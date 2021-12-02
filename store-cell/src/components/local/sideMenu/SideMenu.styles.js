import styled from 'styled-components';

export const MenuToggle = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  -webkit-user-select: none;
  user-select: none;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.lightGraySecundary};
    transition: color 0.3s ease;

    &:hover {
      color: tomato;
    }
  }

  input {
    display: block;
    width: 40px;
    height: 32px;
    position: fixed;
    top: -7px;
    left: -5px;
    cursor: pointer;
    opacity: 0;
    z-index: 2; 
    -webkit-touch-callout: none;

    &:checked ~ span {
      opacity: 1;
      transform: rotate(45deg) translate(-2px, -1px);
      background: ${(props) => props.theme.colors.lightGraySecundary};
    }

    &:checked ~span:nth-last-child(2) {
      transform: rotate(-45deg) translate(0, -1px);
    }

    &:checked ~ span:nth-last-child(3) {
      opacity: 0;
      transform: rotate(0deg) scale(0.2, 0.2);
    }

    &:checked ~ul {
      transform: none;
    }
  }

  span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;
    background: ${(props) => props.theme.colors.lightGraySecundary};
    border-radius: 3px;
    z-index: 1;
    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
    background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
    opacity 0.55s ease;

    &:first-child {
      transform-origin: 0% 0%;
    }

    &:nth-last-child(2) {
      transform-origin: 0% 100%;
    }
  }
`;

export const Menu = styled.ul`
  position: fixed;
  top: 50px;
  left: 0px;
  width: 200px;
  padding: 20px;
  background: ${(props) => props.theme.colors.darkBlack};
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  transform-origin: 0% 0%;
  transform: translate(-100%, 0);
  transition: transform 0.5s cubic - bezier(0.77, 0.2, 0.05, 1.0);
  z-index: 2;
  border-radius: 0px 0px 8px 8px;

  li {
    padding: 10px 0;
    font-size: 22px;
  }
`;