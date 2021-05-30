import axios from "./APIClient";
import * as R from "ramda";

import { notify } from "./notify";
import { AXIOSFAILED } from "constants/actions.js";
import { trackPromise } from "react-promise-tracker";

// use react promise tracker for base loder in page
// another way is to use redux middleware

function createMessageFromError(errs) {
  let acc = "";
  const keyPlusValue = (value, key) => (acc = acc + key + ":" + value + "\n");
  R.forEachObjIndexed(keyPlusValue)(errs);
  return acc;
}

export const masterApi = async (method, url, data, config, ...args) => {
  method = method.toLowerCase();
  let res = null;
  try {
    res = await trackPromise(axios[method](url, data, ...args));
    return res.data;
  } catch (error) {
    const { response } = error;
    if (!response) return { status: AXIOSFAILED };

    notify.warning(response?.data?.message);

    console.error(response);
    return {
      ...response,
      status: AXIOSFAILED,
    };
  }
};

export const catcher = async (
  method,
  url,
  inData,
  config,
  mess = true,
  ...args
) => {
  const res = await masterApi(method, url, inData, config, ...args);
  mess && res.message && notify.def(res.message);
  if (!res) return { data: null };

  const { status } = res;

  switch (status) {
    default:
      return res;
  }
};

let curCatcher = R.curry(catcher);

export const masterApiNoLoader = async (method, url, data, config, ...args) => {
  method = method.toLowerCase();
  let res = null;
  try {
    res = await axios[method](url, data, ...args);
    return res.data;
  } catch (error) {
    const { response } = error;
    if (!response) return { status: AXIOSFAILED };

    notify.warning(response?.data?.message);
    const me = createMessageFromError(response?.data?.errors);
    notify.info(me);
    console.error(response);
    return {
      ...response,
      status: AXIOSFAILED,
    };
  }
};

export const catcherNoLoader = async (
  method,
  url,
  inData,
  config,
  mess = true,
  ...args
) => {
  const res = await masterApiNoLoader(method, url, inData, config, ...args);
  mess && res.message && notify.def(res.message);
  if (!res) return { data: null };

  const { status } = res;

  switch (status) {
    default:
      return res;
  }
};

export default curCatcher;
