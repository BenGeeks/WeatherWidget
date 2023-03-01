import styled from 'styled-components/macro';

export const Container = styled.div`
  max-width: 700px;
  min-height: 400px;
  margin: auto;
  padding: 0 1rem;
  position: relative;
  top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
`;

export const InputContainer = styled.div`
  width: 100%;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;

  & input {
    padding: 0.7rem 1.5rem;
    font-size: 1.2rem;
    border-radius: 25px;
    border: 1px solid rgba(255, 255, 255, 0.8);
    background: rgba(255, 255, 255, 0.1);
    margin-bottom: 20px;
    color: #f8f8f8;

    &::placeholder {
      color: rgba(255, 255, 255, 0.6);
    }
  }
`;

export const Main = styled.div`
  width: 100%;
  margin: 1rem auto;
`;

export const WeatherContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OtherDetails = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin: 1rem auto;
  padding: 1rem;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.3);
  text-align: center;
`;

export const BoldP = styled.p`
  font-weight: 700;
`;
