import { Container, Row, Col, Form, Button } from 'react-bootstrap';


export default function Contact() {
  return (
    <Col lg="6" className="mx-auto pt-4  ">
      <h2>GET IN TOUCH</h2>
      <p>
        This form does not have to function when submitted. It is assumed that the applicant will be able to take this design and create an appropriate mobile layout.
        This form does not have to function when submitted. It is ass
      </p>
      <Container>
        <Row className="card_panel_bg py-3" >

          <Col xs="12" sm="6" >
            <Form.Group>
              <Form.Label>Name<span>*</span></Form.Label>
              <Form.Control />
            </Form.Group>
          </Col>
          <Col xs="12" sm="6" >
            <Form.Group>
              <Form.Label>Email Address<span>*</span> </Form.Label>
              <Form.Control />
            </Form.Group>
          </Col>

          <Col xs="12"  >
            <Form.Group>
              <Form.Label>Message<span>*</span> </Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Col>
          <Col xs="12">
            <Button className="clear_btn float-right" >
              Send
          </Button>
          </Col>
        </Row>
      </Container>
    </Col>);
}