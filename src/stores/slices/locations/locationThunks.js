import dClient from "../../../common/api/reduxLoaderApi";
import { setLoaderApp } from "../../loaderStore/loaderSlice";
import { setLocations } from "./locationSlice";

//method for autosearch on pick-ups
export const getLocationQueries =
  (params, callback = false) =>
  async (dispatch, getState) => {
    dispatch(setLoaderApp(true));
    const res = await dClient(
      "get",
      "/locations/autocomplete",
      {
        params: {
          searchString: params.params,
        },
      },
      {},
      false
    );
    dispatch(setLocations(res));
    dispatch(setLoaderApp(false));
    return callback && callback(res);
  };
