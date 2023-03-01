import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiRequest from '../axios';
import { toast } from 'react-toastify';

export const getWeatherData = createAsyncThunk('chart/getWeatherData', async (action) => {
  return await apiRequest(action);
});

const initialState = {
  weatherData: {},
  status: 'idle',
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // get weather data
      .addCase(getWeatherData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getWeatherData.fulfilled, (state, action) => {
        if (action.payload.cod === 200) {
          state.status = 'succeeded';
          state.weatherData = action.payload;
        } else {
          state.status = 'failed';
          toast.error(action.payload.response.data.message);
        }
      })
      .addCase(getWeatherData.rejected, (state) => {
        state.status = 'failed';
        toast.error('An error occured while fetching the weather data.');
      });
  },
});

export default weatherSlice.reducer;
