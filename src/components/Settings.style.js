import styled from 'styled-components/macro';

export const MainContainer = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  width: 200px;
  height: 125px;
  z-index: 100;
`;

export const SetttingsContainer = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  z-index: 10;
  padding: 5px;
  border-radius: 10px;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.2);
  transition: all 0.15s ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

export const SelectUnit = styled.div`
  position: fixed;
  top: 50px;
  right: 50px;
  width: 150px;
  z-index: 10;
  padding: 2px;
  border-radius: 2px;
  background-color: rgba(0, 0, 0, 0.4);
  transition: all 0.15s ease-in-out;

  & p {
    font-size: 1rem;
    padding: 5px;
    margin: 3px;
    border: 1px solid rgba(255, 255, 255, 0.8);
    cursor: pointer;

    &:hover {
      background-color: rgba(255, 255, 255, 0.8);
      color: #282829;
    }
  }

  @media (max-width: 550px) {
    background-color: rgba(0, 0, 0, 0.7);
    top: 55px;
    right: 10px;
  }
`;
