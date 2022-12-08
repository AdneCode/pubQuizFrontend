import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import "./styles.scss";
import { Link } from "react-router-dom";
import { AppNavbar } from "../../components";

//Remove on release:
import { useContext } from "react";
import { SocketContext } from "../../socket";

export const Welcomepage = () => {
  //This can be removed on release:
  const socket = useContext(SocketContext);
  const testData = () => {
    socket.emit("getData");
  };
  //end of remove on release, there is still the button
  return (
    <>
      <AppNavbar />
      <div>
        <Container className="welcome container-center bg-patterns">
          <Row>
            <Col className="text-center">
              {/* Remove on release: */ }
              {/* <button onClick={() => testData()}>SERVER</button> */ }
              <h1 className="mb-4">Build your quiz!</h1>
              <p className="mb-4">
                Welcome to Quest Mongers 62! Play by yourself or with your friends.
                <br />
                <br />
                If you want to start a game with your friends, select "start a game" and send the generated code to your friends. Your friends can then join your game with the code!
              </p>
              <div className="mb-2 pr-4">
                <Stack gap={ 3 } className="col-md-5 mx-auto">
                  <Link to="/host">
                    <Button variant="success" className="btn">
                      Start a game
                    </Button>
                  </Link>

                  <Link to="/join">
                    <Button variant="outline-success" className="btn btn-join">
                      Join a game
                    </Button>
                  </Link>
                </Stack>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
