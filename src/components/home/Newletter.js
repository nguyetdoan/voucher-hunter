import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Form, Row } from "react-bootstrap";
import "./Newletter.css";

const Newletter = () => {
  return (
    <div className="container_newletter">
      <div style={{ textAlign: "center" }}>
        <h3>Save time, save money!</h3>
        <p>Sign up and we'll send the best deals to you</p>
      </div>
      <div className="input_newletter">
        <Form>
          <Row style={{ justifyContent: "center" }}>
            <Col xs={6}>
              <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                Name
              </Form.Label>
              <Form.Control
                className="mb-2"
                id="inlineFormInput"
                placeholder="Your Email"
              />
            </Col>

            <Col xs="auto">
              <Button type="submit" className="mb-2 primary-btn">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  )
}
export default Newletter;
