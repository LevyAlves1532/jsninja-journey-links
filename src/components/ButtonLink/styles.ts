// LIBs
import styled from "styled-components";

export const ButtonLinkArea = styled.a`
  width: 100%;
  padding: 1.12rem 1.75rem;
  background-color: ${props => props.theme.bg_v};
  border-radius: 0.62rem;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  &:hover {
    &::before {
      width: 100%;
    }

    p {
      color: #000;
    }
  }

  &::before {
    content: '';
    width: 0;
    height: 100%;
    background-color: ${props => props.theme.first};
    transition: all ease 0.5s;

    display: block;

    position: absolute;
    top: 0;
    left: 0;
  }

  p {
    font-size: 1.5rem;
    color: ${props => props.theme.txt};
    font-weight: 600;
    font-family: 'Handjet'; 
    transition: all ease 0.5s;

    position: relative;
    z-index: 1;
  }
`;
