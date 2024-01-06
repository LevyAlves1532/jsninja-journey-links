// LIBs
import styled from "styled-components";

export const WrapperApp = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${props => props.theme.bg};
  padding: 2.5rem 0;
  transition: all ease 0.5s;

  display: flex;
  flex-direction: column;

  position: relative;
  
  @media ${props => props.theme.mbB} {
    padding: 7.5rem 0;
  }

  .Container {
    max-width: 768px;
    width: 100%;
    flex: 1;
    margin: 0 auto;
    padding: 0 1.25rem;

    display: flex;
    flex-direction: column;

    &__image {
      margin-bottom: 2.5rem;

      display: flex;
      justify-content: center;

      img {
        width: 9.37rem;
        border: 0.12rem solid ${props => props.theme.first};
        padding: 0.62rem;
        border-radius: 50%;
        object-fit: cover;
        object-position: center;
        transition: all ease 0.5s;
        
        &:hover {
          padding: 1.25rem;
        }
      }
    }

    &__title {
      margin-bottom: 1.25rem;
      text-align: center;

      h1, span {
        font-size: 1.5rem;
        color: ${props => props.theme.txt};
        font-weight: 600;
      }

      h1 {
        span {
          font-family: 'Handjet';
          color: ${props => props.theme.first};
        }
      }
    }

    &__text {
      max-width: 28.12rem;
      width: 100%;
      margin: 0 auto;
      margin-bottom: 3.75rem;
      text-align: center;

      p, span {
        font-size: 1rem;
        color: ${props => props.theme.txt};
        opacity: 0.9;
      }

      p {
        display: flex;
        flex-direction: column;
        gap: 0.62rem;

        span {
          font-size: 1.12rem;
          font-family: 'Handjet';
          font-weight: 600;
          color: ${props => props.theme.first};
        }
      }
    }

    &__links {
      margin-bottom: 5rem;
    }

    &__footer {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: flex-end;

      p {
        font-size: 14px;
        color: ${props => props.theme.txt};

        a {
          font-size: 0.87rem;
          color: ${props => props.theme.first};
          font-family: 'Handjet';
          transition: all ease 0.5s;
          font-weight: 600;

          &:hover {
            letter-spacing: 1px;
          }
        }
      }
    }
  }
`;
