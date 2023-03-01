import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setUnit } from '../store/storeSlices/settings';
import { getWeatherData } from '../store/storeSlices/weather';

import SettingsIcon from '../assets/icons/gear-solid.svg';
import { MainContainer, SetttingsContainer, SelectUnit } from './Settings.style';

const Settings = () => {
  const dispatch = useDispatch();
  const [showSettings, setShowSettings] = useState(false);
  const unit = useSelector((state) => state.settings.unit);
  const location = useSelector((state) => (state.weather.weatherData && state.weather.weatherData.name ? state.weather.weatherData.name : null));

  const showSettingsHandler = () => {
    setShowSettings((prevState) => !prevState);
  };

  const onMouseLeaveHandler = () => {
    setShowSettings(false);
  };

  const onClickHandler = (unit) => {
    location && dispatch(getWeatherData({ location, unit }));
    dispatch(setUnit(unit));
    setShowSettings(false);
  };
  return (
    <MainContainer onMouseLeave={onMouseLeaveHandler}>
      <SetttingsContainer>
        <img src={SettingsIcon} onClick={showSettingsHandler} alt={'settings icon'} />
      </SetttingsContainer>
      {showSettings && <SelectUnit>{unit === 'imperial' ? <p onClick={() => onClickHandler('metric')}>Metric</p> : <p onClick={() => onClickHandler('imperial')}>Imperial</p>}</SelectUnit>}
    </MainContainer>
  );
};

export default Settings;
