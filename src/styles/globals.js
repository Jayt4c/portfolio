import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${props => props.theme.colors.background1};
    color: ${props => props.theme.colors.primary1};
    cursor: default;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }
  span {
    position: absolute;
    background: #ffffff;
  }
  .bottom-left-dot {
    bottom: 0;
    left: 0;
    height: 10px;
    width: 10px;
    animation: dots linear infinite 1s;
    animation-delay: 0s;
  }
  .bottom-right-dot {
    bottom: 0;
    right: 0;
    height: 10px;
    width: 10px;
    animation: dots linear infinite 1s;
    animation-delay: 0.5s;
  }
  .top-left-dot {
    top: 0;
    left: 0;
    height: 10px;
    width: 10px;
    animation: dots linear infinite 1s;
    animation-delay: 2.5s;
  }
  .top-right-dot {
    top: 0;
    right: 0;
    height: 10px;
    width: 10px;
    animation: dots linear infinite 1s;
    animation-delay: 1.5s;
  }

  .buttom-line {
    bottom: 5px;
    left: 0;
    height: 3px;
    width: 100%;
    animation: bottomLine linear infinite 1s;
    animation-delay: 0s;
    transform: translate(-100%, 50%);
  }

  .right-line {
    bottom: 0;
    right: 0;
    height: 100%;
    width: 3px;
    animation: leftLine linear infinite 1s;
    animation-delay: 1.5s;
    transform: translate(-100%, 100%);
  }

  .top-line {
    top: 0;
    right: 0;
    height: 3px;
    width: 100%;
    animation: topLine linear infinite 1s;
    animation-delay: 2s;
    transform: translate(100%, 100%);
  }

  .left-line {
    top: 0;
    left: 0;
    height: 100%;
    width: 3px;
    animation: rightLine linear infinite 1s;
    animation-delay: 3.5s;
    transform: translate(100%, -100%);
  }

  @keyframes dots {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes bottomLine {
    0% {
      transform: translate(-100%, 50%);
    }
    100% {
      transform: translate(100%, 50%);
    }
  }

  @keyframes leftLine {
    0% {
      transform: translate(-100%, 100%);
    }
    100% {
      transform: translate(-100%, -100%);
    }
  }

  @keyframes topLine {
    0% {
      transform: translate(100%, 100%);
    }
    100% {
      transform: translate(-100%, 100%);
    }
  }

  @keyframes rightLine {
    0% {
      transform: translate(100%, -100%);
    }
    100% {
      transform: translate(100%, 100%);
    }
  }

`;

export default GlobalStyles;