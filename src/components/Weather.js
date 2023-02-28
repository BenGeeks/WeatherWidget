import React, { useState } from 'react';

import { Container, InputContainer, Main, OtherDetails, BoldP } from './Weather.styled';
import { Button1 } from '../assets/buttons';

const Weather = ({ data, onSearch }) => {
  const [location, setLocation] = useState('');
  console.log(data);

  const onClickHandler = () => {
    onSearch(location);
    setLocation('');
  };

  return (
    <Container>
      <InputContainer>
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Enter Location" />
        <Button1 onClick={onClickHandler}>Search</Button1>
      </InputContainer>
      <Main>
        <p>Dallas</p>
        <h1>23</h1>
        <p>Cloudy</p>
      </Main>
      <OtherDetails>
        <div>
          <BoldP>23</BoldP>
          <p>Feels Like</p>
        </div>
        <div>
          <BoldP>20%</BoldP>
          <p>Humidity</p>
        </div>
        <div>
          <BoldP>12 km/h</BoldP>
          <p>Winds</p>
        </div>
      </OtherDetails>
    </Container>
  );
};

export default Weather;
