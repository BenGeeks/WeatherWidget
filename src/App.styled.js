import styled from 'styled-components/macro';
import sunny from './assets/images/sunny.jpg';

export const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;

  &:before {
    content: '';
    background: url(${sunny}) no-repeat center center/cover;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;
