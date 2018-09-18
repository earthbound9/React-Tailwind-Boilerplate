import React from 'react';
import styled from 'styled-components';

import blueSky from '../img/blue-sky.jpeg';
import { slideUp } from '../keyframes';

const Heading = () => {
  const Img = styled.div`
    background-image: url(${blueSky});
    width: 100vw;
    height: 30vh;
    background-size: cover;
    background-position: left bottom;
  `;
  const CardWrapper = styled.div`
    display: flex;
    justify-content: center;
    .card {
      animation: 0.6s ${slideUp} ease-in-out;
      ${tw(
        'bg-grey-lightest h-32 -m-12 w-1/2 shadow-lg rounded flex justify-center items-center text-2xl'
      )};
    }
    .logo {
      ${tw('w-32 p-2')};
    }
  `;
  return (
    <div>
      <Img />
      <CardWrapper>
        <div className="card">
          <img
            className="logo"
            src="https://tailwindcss.com/img/tailwind.svg"
            alt="tailwind logo"
          />
          <p className="text-2xl px-2">+</p>
          <div className="flex flex-col items-center mt-2">
            <img
              className="w-24"
              src="https://sandstorm.de/_Resources/Persistent/3285416e8503b2c8354c321bcd690cf550b8b2d3/React-Logo.svg"
              alt="react logo"
            />
            <p className="text-xl py-2">React</p>
          </div>
          <p className="text-2xl px-2">+</p>
          <img
            className="logo"
            src="https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png"
            alt="styled components logo"
          />
        </div>
      </CardWrapper>
    </div>
  );
};

export default Heading;
