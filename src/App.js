import { ThemeProvider } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { getWeatherData } from './store/storeSlices/weather';

import Weather from './components/Weather';

import { AppContainer } from './App.styled';

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.weather.weatherData);

  const searchWeatherDataHandler = (location) => {
    console.log(location);
    dispatch(getWeatherData(location));
  };
  return (
    <ThemeProvider theme={{}}>
      <AppContainer>
        <Weather data={data} onSearch={searchWeatherDataHandler} />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
