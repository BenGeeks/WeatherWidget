import styled from 'styled-components/macro';

export const Button1 = styled.button`
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  outline: 0;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: all 0.15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  padding: 0.25rem 1.5rem;
  font-size: 1.2rem;
  border-radius: 25px;
  border: 1px solid rgba(255, 255, 255, 0.8);
  background: rgba(70, 61, 166, 0.5);
  color: #f8f8f8;

  &:before {
    background-color: initial;
    background-image: linear-gradient(#fff 0, rgba(255, 255, 255, 0) 100%);
    border-radius: 125px;
    content: '';
    height: 50%;
    left: 4%;
    opacity: 0.5;
    position: absolute;
    top: 0;
    transition: all 0.3s;
    width: 92%;
  }

  &:hover {
    box-shadow: rgba(255, 255, 255, 0.2) 0 3px 15px inset, rgba(0, 0, 0, 0.1) 0 3px 5px, rgba(0, 0, 0, 0.1) 0 10px 13px;
  }
`;
