import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setUnit } from '../store/storeSlices/settings';

import SettingsIcon from '../assets/icons/gear-solid.svg';
import { MainContainer, SetttingsContainer, SelectUnit } from './Settings.style';

const Settings = () => {
  const dispatch = useDispatch();
  const [showSettings, setShowSettings] = useState(false);

  const showSettingsHandler = () => {
    setShowSettings((prevState) => !prevState);
  };

  const onMouseLeaveHandler = () => {
    setShowSettings(false);
  };

  const onClickHandler = (unit) => {
    dispatch(setUnit(unit));
    setShowSettings(false);
  };
  return (
    <MainContainer onMouseLeave={onMouseLeaveHandler}>
      <SetttingsContainer>
        <img src={SettingsIcon} onClick={showSettingsHandler} alt={'settings icon'} />
      </SetttingsContainer>
      {showSettings && (
        <SelectUnit>
          <p onClick={() => onClickHandler('metric')}>Metric</p>
          <p onClick={() => onClickHandler('imperial')}>Imperial</p>
        </SelectUnit>
      )}
    </MainContainer>
  );
};

export default Settings;
