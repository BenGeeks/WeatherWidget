import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiRequest from '../axios';
import { toast } from 'react-toastify';
import Sunny from '../../assets/images/sunny.jpg';

export const getWeatherData = createAsyncThunk('chart/getWeatherData', async (action) => {
  return await apiRequest(action);
});

const initialState = {
  weatherData: {},
  themeSettings: {
    backgroundImg: Sunny,
  },
  status: 'idle',
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // get weather data
      .addCase(getWeatherData.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(getWeatherData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.weatherData = action.payload.data;
      })
      .addCase(getWeatherData.rejected, (state, action) => {
        state.status = 'failed';
        toast.error(action.payload.message);
      });
  },
});

export default weatherSlice.reducer;
