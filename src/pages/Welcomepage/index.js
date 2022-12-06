import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import "./styles.scss";

export const Welcomepage = () => {
  return (
    <div>
      <Container className="welcome">
        <Row>
          <Col className="text-center">
            <h1 className="mb-4">Welcome!</h1>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="mb-2 pr-4">
              <Stack gap={3} className="col-md-5 mx-auto">
                <Button variant="secondary">Start a game</Button>
                <Button variant="outline-secondary">Join a game</Button>
              </Stack>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
