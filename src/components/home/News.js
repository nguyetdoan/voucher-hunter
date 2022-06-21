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
                src="https://kynghiviet.vn/public/upload/Blog/2019/Thang12/Phu-quoc/du-lich-phu-quoc-kinh-nghiem-va-thong-tin-huu-ich.jpg?1578022748671"
              />
              <Card.Body>
                <Card.Title>Phú quốc</Card.Title>
                <Card.Text>
                  Thỏa sức khám phá thiên đường vui chơi giải trí VinWonders Phú Quốc – Công viên chủ đề đầu tiên tại Việt Nam và Vinpearl Safari Phú Quốc - công viên chăm sóc, bảo tồn động vật, vườn thú bán hoang dã đầu tiên tại Việt Nam
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
