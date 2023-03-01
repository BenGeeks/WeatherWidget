import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { setBackgroundImage } from './store/storeSlices/settings';

import Weather from './components/WeatherWidget';
import Settings from './components/Settings';

import { AppContainer } from './App.styled';

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.weather.weatherData);
  const backgroundImage = useSelector((state) => state.settings.backgroundImage);

  useEffect(() => {
    data.weather && data.weather[0].description && dispatch(setBackgroundImage(data.weather[0].icon));
  }, [dispatch, data]);

  return (
    <ThemeProvider theme={{}}>
      <AppContainer backgroundImage={backgroundImage}>
        <Settings />
        <Weather data={data} />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
