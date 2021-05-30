import { catcher, catcherNoLoader } from "./masterApi";
import * as R from "ramda";

// client with loader at fetch time
const clientLoader = async (method, link, data, config, mess = true) => {
  const res = await catcher(method, link, data, config, mess);
  return res;
};
const noCurryClientNoLoader = async (
  method,
  link,
  data,
  params,
  mess = true
) => {
  const res = await catcherNoLoader(method, link, data, params, mess);
  return res;
};

// curried functions for more partial fns

export const clientNoLoader = R.curryN(5, noCurryClientNoLoader);

export default R.curryN(5, clientLoader);
