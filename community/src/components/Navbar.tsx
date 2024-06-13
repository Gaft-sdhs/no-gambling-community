import React from 'react';
import styled from 'styled-components';

const NavbarWrapper = styled.nav`
  background-color: #333;
  color: white;
  padding: 10px;
`;

const NavbarList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
`;

const NavbarItem = styled.li`
  cursor: pointer;
`;

const Navbar: React.FC = () => {
  return (
    <NavbarWrapper>
      <NavbarList>
        <NavbarItem>인기 게시글</NavbarItem>
        <NavbarItem>최신 게시글</NavbarItem>
        <NavbarItem>로그인</NavbarItem>
      </NavbarList>
    </NavbarWrapper>
  );
}

export default Navbar;
