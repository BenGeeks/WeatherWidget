import styled from 'styled-components/macro';

export const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;

  &:before {
    content: '';
    background: url(${(props) => props.backgroundImage}) no-repeat center center/cover;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.5s ease-in-out;
  }
`;
