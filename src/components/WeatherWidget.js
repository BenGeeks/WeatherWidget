import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getWeatherData } from '../store/storeSlices/weather';

import { Container, InputContainer, Main, WeatherContainer, OtherDetails, BoldP } from './WeatherWidget.styled';
import { Button1 } from '../assets/buttons';

const Weather = ({ data }) => {
  const dispatch = useDispatch();
  const [location, setLocation] = useState('');
  const status = useSelector((state) => state.weather.status);
  const unit = useSelector((state) => state.settings.unit);

  const onKeyUpHandler = (e) => {
    if (e.key === 'Enter') {
      dispatch(getWeatherData({ location, unit }));
    }
  };

  const onSearchHandler = () => {
    dispatch(getWeatherData({ location, unit }));
  };

  useEffect(() => {
    status === 'succeeded' && setLocation('');
  }, [status]);

  return (
    <Container>
      <InputContainer>
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} onKeyUp={onKeyUpHandler} placeholder="Enter Location" />
        <Button1 onClick={onSearchHandler} disabled={status === 'loading' || location === ''}>
          {status === 'loading' ? 'Fetching Data...' : 'Search'}
        </Button1>
      </InputContainer>
      <Main>
        <p>
          {data.name ? data.name : 'City'} {data.sys && data.sys.country ? data.sys.country : 'Country'}
        </p>
        <h1>
          {data.main && data.main.temp ? data.main.temp : '0'} {unit === 'metric' ? '°C' : '°F'}
        </h1>
        <WeatherContainer>
          {data.weather && data.weather[0] && data.weather[0].icon && <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt="weather icon" />}
          <p>{data.weather && data.weather[0].description ? data.weather[0].description : 'Clouds'}</p>
        </WeatherContainer>
      </Main>
      <OtherDetails>
        <div>
          <BoldP>
            {data.main && data.main.feels_like ? data.main.feels_like : '0'} {unit === 'metric' ? '°C' : '°F'}
          </BoldP>
          <p>Feels Like</p>
        </div>
        <div>
          <BoldP>{data.main && data.main.humidity ? data.main.humidity : '0'}%</BoldP>
          <p>Humidity</p>
        </div>
        <div>
          <BoldP>
            {data.wind && data.wind.speed ? data.wind.speed : '0'} {unit === 'metric' ? 'm/s' : 'mph'}
          </BoldP>
          <p>Winds</p>
        </div>
      </OtherDetails>
    </Container>
  );
};

export default Weather;
