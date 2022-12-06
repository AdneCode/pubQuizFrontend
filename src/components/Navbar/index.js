import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export const AppNavbar = () => {
  return (
    <div>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">Quest Mongers 62</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};
