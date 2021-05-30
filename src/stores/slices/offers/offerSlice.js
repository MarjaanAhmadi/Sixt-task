import { createSlice } from "@reduxjs/toolkit";
import { FormOfferInit } from "./offerModel";

const initialState = {
  offers: [],
  offerForm: FormOfferInit,
};

const offerSlice = createSlice({
  name: "offer",
  initialState,
  reducers: {
    setOffers: (state, action) => {
      //set offers after requesting to server and filtering
      state.offers = action.payload;
    },
    onOfferFormChange: (state, action) => {
      //assign value to the offer form for filtering
      const { name, value } = action.payload;
      state.offerForm[name] = value;
    },
  },
});

export const { actions } = offerSlice;
export const { setOffers, onOfferFormChange } = actions;

// reducers selectors
export const selOffers = (state) => state.offer.offers;
export const selOfferForm = (state) => state.offer.offerForm;

const offerReducer = {
  offer: offerSlice.reducer,
};
export default offerReducer;
