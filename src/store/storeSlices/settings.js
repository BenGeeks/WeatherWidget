import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import ClearSky from '../../assets/images/clearsky.jpg';
import FewClouds from '../../assets/images/fewclouds.jpg';
import ScatteredClouds from '../../assets/images/scatteredclouds.jpg';
import BrokenClouds from '../../assets/images/brokenclouds.jpg';
import ShowerRain from '../../assets/images/showerrain.jpg';
import Rain from '../../assets/images/rain.jpg';
import ThunderStorm from '../../assets/images/thunderstorm.jpg';
import Snow from '../../assets/images/snow.jpg';
import Mist from '../../assets/images/mist.jpg';

const initialState = {
  unit: 'metric',
  backgroundImage: ClearSky,
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setUnit: (state, action) => {
      state.unit = action.payload;
      toast.success(`Unit updated to ${action.payload}`);
    },
    setBackgroundImage: (state, action) => {
      if (action.payload === '01d' || action.payload === '01n') state.backgroundImage = ClearSky;
      if (action.payload === '02d' || action.payload === '02n') state.backgroundImage = FewClouds;
      if (action.payload === '03d' || action.payload === '03n') state.backgroundImage = ScatteredClouds;
      if (action.payload === '04d' || action.payload === '04n') state.backgroundImage = BrokenClouds;
      if (action.payload === '05d' || action.payload === '05n') state.backgroundImage = ShowerRain;
      if (action.payload === '06d' || action.payload === '06n') state.backgroundImage = Rain;
      if (action.payload === '07d' || action.payload === '07n') state.backgroundImage = ThunderStorm;
      if (action.payload === '08d' || action.payload === '08n') state.backgroundImage = Snow;
      if (action.payload === '09d' || action.payload === '09n') state.backgroundImage = Mist;
    },
  },
});

export const { setUnit, setBackgroundImage } = settingsSlice.actions;

export default settingsSlice.reducer;
