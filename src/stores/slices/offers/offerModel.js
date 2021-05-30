import { mapFieldArrToObjSchema } from "../../../common/hooks/useValidation";
import * as R from "ramda";

//define offer model
export const offerModel = {
  originPlaceId: "",
  selectedStartDate: "2021-11-28T12:45:00+02:00Z",
  duration: 0,
  type: "DURATION",
};

// define the specific properties that should be send to the server
export const pickerPropOffer = R.pick([
  "originPlaceId",
  "selectedStartDate",
  "duration",
  "type",
]);

// define a form init for offer filter
export const FormOfferInit = {
  originPlaceId: "",
  selectedStartDate: "2021-11-28T12:45:00+02:00Z",
  duration: 0,
  type: "DURATION",
};

// define validation fields for offer
const offerValidationsArr = [["originPlaceId", "string"]];

export const offerValidations = mapFieldArrToObjSchema(offerValidationsArr);
