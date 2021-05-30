import dClient from "../../../common/api/reduxLoaderApi";
import { setLoaderApp } from "../../loaderStore/loaderSlice";
import { pickerPropOffer } from "./offerModel";
import { setOffers } from "./offerSlice";

//method for sending selected filter data to the server
export const postOffer =
  ({ data }, callback = false) =>
  async (dispatch, getState) => {
    let remData = pickerPropOffer(data);
    dispatch(setLoaderApp(true));
    const res = await dClient("post", "/offers", remData, {}, true);
    dispatch(setOffers(res));
    dispatch(setLoaderApp(false));
    return callback && callback(res);
  };
