import React from 'react';
import styled from 'styled-components';
import {
  menuHoverTop,
  menuHoverBottom,
  menuCloseTop,
  menuCloseBottom
} from '../keyframes';

class Navbar extends React.Component {
  state = {
    menuToggle: false
  };

  handleMenuOpen = e => {
    this.setState(preState => ({
      menuToggle: !preState.menuToggle
    }));
  };

  render() {
    return (
      <Wrapper
        open={this.state.menuToggle}
        className="w-full bg-grey-darkest h-16 flex items-center justify-between relative"
      >
        <h4 className="text-green-light ml-6">React Tailwind BoilerPlate</h4>
        <div className="flex items-center mr-4">
          <a href="#" className="navLink">
            Home
          </a>
          <a href="#" className="navLink ">
            Posts
          </a>
          <a href="#" className="navLink">
            Latest
          </a>
          <a href="#" className="navLink">
            Contact
          </a>
          <div className="menu-container" onClick={this.handleMenuOpen}>
            <div className="menu-icon" />
          </div>
        </div>
        <div className="drop-menu absolute pin-r mt-32 h-48 bg-grey-darker flex flex-col items-center py-2">
          <h5 className="p-4 hover:bg-grey w-full cursor-pointer my-p whitespace-no-wrap">
            item one
          </h5>
          <h5 className="p-4 hover:bg-grey w-full cursor-pointer my-p whitespace-no-wrap">
            item two
          </h5>
          <h5 className="p-4 hover:bg-grey w-full cursor-pointer my-p whitespace-no-wrap">
            item three
          </h5>
        </div>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  position: relative;

  .navLink {
    ${tw('text-white p-4 no-underline')};

    &:hover {
      ${tw('text-green-lighter')};
    }
  }

  .drop-menu {
    width: ${props => (props.open ? '180px' : '0')};
    transition: width 0.3s ease-in;
    overflow: hidden;
  }

  .menu-icon {
    position: relative;
    transform: ${props => props.open && 'rotate(-135deg)'};
    transition: ${props =>
      props.open ? 'all 0.3s ease-in 0.2s' : 'all 0.3s ease-in'};

    &,
    &::before,
    &::after {
      width: 26px;
      height: 1.7px;
      background-color: white;
      display: inline-block;
    }

    &::before,
    &::after {
      content: '';
      position: absolute;
    }

    &::before {
      top: -7px;
      transform: ${props => props.open && 'translateY(-15px)'};
      opacity: ${props => props.open && '0'};
      transition: ${props =>
        props.open ? 'all .2s ease-in' : 'all .2s ease-in .3s'};
    }

    &::after {
      top: ${props => (props.open ? '0' : '7px')};
      transform: ${props => props.open && 'rotate(270deg)'};
      transition: ${props =>
        props.open
          ? 'top 0.3s ease-ins, transform .3s ease-in .2s'
          : 'all 0.3s ease-in'};
    }
  }

  .menu-container {
    position: relative;
    width: 35px;
    height: 36px;
    z-index: 10;
    cursor: pointer;
    margin-top: 10px;

    &:hover {
      .menu-icon::before {
        animation: ${props =>
          props.open ? 'none' : `${menuHoverTop} 1s infinite`};
      }

      .menu-icon::after {
        animation: ${props =>
          props.open ? 'none' : `${menuHoverBottom} 1s infinite`};
      }
    }
  }
`;

export default Navbar;
