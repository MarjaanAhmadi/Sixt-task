import { createSlice } from "@reduxjs/toolkit";

const offeredLocations = [
  {
    label: "the famous Munich Hofbräuhaus",
    address: "Hofbräuhaus München, Platzl, Munich, Germany",
    placeId: "ChIJxfxSz4t1nkcRLxq9ze1wwak",
  },
  {
    label: "the Stachus",
    address: "Stachus, Munich, Germany",
    placeId:
      "EhtLYXJsc3BsLiwgTcO8bmNoZW4sIEdlcm1hbnkiLiosChQKEgkfRGon93WeRxEvZKuqIIsjnxIUChIJ" +
      "J8yNql7fnUcRAKU5CaQlHQU",
  },
  {
    label: "the Olympic Tower ",
    address: "Spiridon-Louis-Ring, Munich, Germany",
    placeId: "ChIJU-Q6JoF2nkcRdQApBoHVU8s",
  },
  {
    label: "the Olympic Tower ",
    address: "Englischer Garten, Munich, Germany",
    placeId: "ChIJayv4lZd1nkcR0e_vfGLfm8k",
  },
  {
    label: "the iconic Allianz Arena",
    address: "Allianz Arena, Werner-Heisenberg-Allee, Munich, Germany",
    placeId: "ChIJHyWKEoVznkcRI8QyjkJgTe0",
  },
  {
    label: "the impressive Nymphenburg Castle",
    address: ": Schloss Nymphenburg, Schloß Nymphenburg, Munich, Germany",
    placeId: "ChIJLWiif8x3nkcRZm0epRZWTCc",
  },
];

const initialState = {
  locations: [],
  staticLocations: offeredLocations,
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocations: (state, action) => {
      //set locations after user typing
      state.locations = action.payload;
    },
  },
});

export const { actions } = locationSlice;
export const { setLocations } = actions;

// reducers selectors
export const selLocations = (state) => state.location.locations;
export const selStaticLocations = (state) => state.location.staticLocations;

const locationReducer = {
  location: locationSlice.reducer,
};
export default locationReducer;
