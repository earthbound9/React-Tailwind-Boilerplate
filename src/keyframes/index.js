import { keyframes } from 'styled-components';

const slideUp = keyframes`
  0% {
    transform: translateY(200px);
  }
  75% {
    transform: translateY(-25px);
  }
  100% {
    transform: translateY(0);
  }
`;

const menuHoverTop = keyframes`
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-2px);
  }

  100% {
    transform: translateY(0);
  }
`;

const menuHoverBottom = keyframes`
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(2px);
  }

  100% {
    transform: translateY(0);
  }
`;

const menuCloseTop = keyframes`
    0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(60deg);
  }
`;

const menuCloseBottom = keyframes`
    0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(60deg);
  }
`;

export {
  slideUp,
  menuHoverTop,
  menuHoverBottom,
  menuCloseTop,
  menuCloseBottom
};
