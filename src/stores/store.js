import {configureStore} from '@reduxjs/toolkit';
import offerReducer from './slices/offers/offerSlice';
import locationReducer from './slices/locations/locationSlice';
import reducer from './loaderStore/loaderSlice';

export const sixtStore = configureStore({
  //create root reducer
    reducer: {
        ...offerReducer,
        ...locationReducer,
        ...reducer
    }
});
