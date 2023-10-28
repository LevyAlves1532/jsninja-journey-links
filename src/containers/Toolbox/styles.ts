// LIBs
import styled from "styled-components";

export const ContainerToolbox = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;

  .Toolbox {
    display: flex;
    gap: 10px;

    &__button {
      position: relative;

      &:hover {
        >button {
          p, span {
            color: ${props => props.theme.first};
          }
        }
      }

      button {
        border-radius: 999px;
        padding: 14px;
        background-color: ${props => props.theme.bg_v};
        
        &:hover {
          svg {
            transform: rotate(360deg) scale(0.8);
          }

          p, span {
            color: ${props => props.theme.first};
          }
        }

        p {
          font-size: 16px;
          color: ${props => props.theme.txt};
          margin: 0 15px;
          transition: all ease 0.5s;
        }

        span {
          font-size: 16px;
          color: ${props => props.theme.txt};
          transition: all ease 0.5s;
        }

        svg {
          font-size: 24px;
          line-height: 24px;
          color: ${props => props.theme.txt};
          transition: all ease 0.5s;

          display: block;
        }
      }

      &--list {
        width: 100%;
        padding-top: 0;
        opacity: 0;
        pointer-events: none;
        transition: all ease 0.5s;

        display: flex;
        flex-direction: column;
        gap: 10px;

        position: absolute;
        top: 100%;
        left: 0;

        &.active-list {
          padding-top: 1.25rem;
          opacity: 1;
          pointer-events: all;
        }

        button {
          width: 100%;

          &.active-language {
            position: relative;

            span {
              color: ${props => props.theme.first};
            }

            &::before {
              content: '';
              width: 0.31rem;
              height: 0.31rem;
              border-radius: 0.31rem;
              background-color: ${props => props.theme.first};
              transform: translateY(-50%);

              position: absolute;
              top: 50%;
              left: 0.62rem;
            }
          }
        }
      }
    }
  }
`;
