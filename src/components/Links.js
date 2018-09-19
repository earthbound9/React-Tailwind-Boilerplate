import React from 'react';
import styled from 'styled-components';
import { ExternalLink } from 'styled-icons/feather';
import { slideRight } from '../keyframes';

const Links = () => {
  return (
    <LinkWrapper className="self-center mt-16 w-full flex">
      <div className="m-auto bg-grey-lightest w-1/2 h-64 flex flex-col rounded overflow-hidden shadow">
        <h4 className="text-center w-full p-4 bg-blue-dark text-grey-lighter">
          Useful Links
        </h4>

        <div className="flex flex-col justify-around w-full h-full">
          <div className="link-item">
            <a href="https://tailwindcss.com/" target="_blank">
              TailwindCss
            </a>
            <ExternalLink size="18" className="link-icon text-blue" />
          </div>
          <div className="link-item">
            <a href="http://nerdcave.com/tailwind-cheat-sheet" target="_blank">
              Tailwind Cheat Sheet
            </a>
            <ExternalLink size="18" className="link-icon text-blue" />
          </div>
          <div className="link-item">
            <a href="https://www.styled-components.com/" target="_blank">
              Styled-Components
            </a>
            <ExternalLink size="18" className="link-icon text-blue" />
          </div>
          <div className="link-item">
            <a href="https://styled-icons.js.org/" target="_blank">
              Styled-Icons
            </a>
            <ExternalLink size="18" className="link-icon text-blue" />
          </div>
        </div>
      </div>
    </LinkWrapper>
  );
};

const LinkWrapper = styled.div`
  animation: ${slideRight} 1.2s ease-in-out;

  .link-icon {
    margin: auto 0;
  }

  .link-item {
    ${tw('flex justify-center items-center h-full')};

    &:hover {
      ${tw('bg-teal-lighter')};
    }
  }

  a {
    ${tw('no-underline text-grey-darkest font-xl py-4 pr-2')};
  }
`;

export default Links;
