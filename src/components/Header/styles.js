import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ headerColor }) => headerColor};
  padding: 10px 20px;
  z-index: 99;
  transition: all ease 0.5s;
`;

export const LogoContainer = styled.div`
  img {
    height: 60px;
  }
`;

export const AvatarContainer = styled.div`
  img {
    height: 50px;
  }
`;
