import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, Button, Card, Image, List, Typography } from "antd";

const data = [
  {
    title: "Voucher 2",
    img: "./image/voucher2.png",
    price: "60"
  },
  {
    title: "Voucher 3",
    img: "./image/voucher3.png",
    price: "100"
  },
  {
    title: "Voucher 4",
    img: "./image/voucher4.png",
    price: "80"
  },
  {
    title: "Voucher 5",
    img: "./image/voucher1.png",
    price: "200"
  },
  {
    title: "Voucher 6",
    img: "./image/voucher2.png",
    price: "50"
  },
];

const { Title } = Typography;

const styleColor = {
  padding: "10px",
  color: "#8ec145",
  display: "inline-block",
};

const cardColor = {
  border: "1px solid silver",
  borderRadius:"10px",
  padding:"5px",
  backgroundColor:"#ffb3c1",

}

const styleCart = {
  backgroundColor:"white",
  color:"black",
  border:"1px solid white",
  borderTopLeftRadius:"30px",
  borderBottomLeftRadius:"30px",
  borderBottomRightRadius:"30px",
  borderTopRightRadius:"30px",
  height:"30px",
}

const HotProducts = () => (
  <div className="page-wrapper">
    <Title style={styleColor}>Hot Products</Title>
    <List
      grid={{
        gutter: 24,
        xs: 1,
        sm: 2,
        column: 4,
      }}
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <Badge.Ribbon text="HOT" color="red">
            <Card
              style={cardColor}
              title={item.title}
              actions={[
                <div style={styleCart} className="cart-container">
                  <p>Add to cart</p>
                  <ShoppingCartOutlined key="addToCart"/>
                </div>,
                <Button type="primary">Buy</Button>,
              ]}
            >
              <Image
                width="100%"
                height={150}
                alt="this is product img"
                src={item.img}
              />
              <h5>{item.price}$</h5>
            </Card>
          </Badge.Ribbon>
        </List.Item>
      )}
    />
  </div>
);

export default HotProducts;
