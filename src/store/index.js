import { configureStore } from '@reduxjs/toolkit';

import weatherSlice from './storeSlices/weather';
import settingsSlice from './storeSlices/settings';

const store = configureStore({
  reducer: {
    weather: weatherSlice,
    settings: settingsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
