import styled from "styled-components";

const NavBar = () => {

  return (
    <Navigation>
      <Logo>ISHAK HAGI</Logo>
      <NavItems>
        <Item>Webentwicklung</Item>
        <Item>Mobile- und Softwareentwicklung</Item>
        <Item>Graphikdesign</Item>
      </NavItems>
    </Navigation>
  );
};

const Navigation = styled.div`
  height: 50px;
  width: 100%;
  background: #132f4a;
  color: white;
  display: flex;
  align-items: center;
`;
const NavItems = styled.div`
  font-family: Poppins;
  margin-left: 20px;
  font-size: 0.6em;
`;
const Item = styled.a`
  font-family: Poppins;
  margin-left: 20px;
`;

const Logo = styled.h3`
  font-family: Poppins;
  margin-left: 20px;
`;

export default NavBar;
