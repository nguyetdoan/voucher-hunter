import { Card, Col, Row } from "react-bootstrap";

const styleColor = {
  color: "#ed2a26",
};

const News = () => {
  return (
    <div className="page-wrapper mt-5">
      <h3 style={styleColor} >News</h3>
      <Row xs={1} md={4} className="g-4 mt-2">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://cdn1.hoanghamobile.com/tin-tuc/wp-content/uploads/2020/03/nhung-smartphone-chup-anh-dep-1.jpg"
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};
export default News;
