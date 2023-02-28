import Axios from 'axios';

const apiRequest = (location) => {
  let config = {
    method: 'GET',
    url: `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=2b2d9fa74c635c9b2f27e2a38f3e1433`,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return Axios(config)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
};

export default apiRequest;
