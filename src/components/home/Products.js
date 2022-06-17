import { Typography } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import productActions from "../../redux/actions/productAction";
import ProductItem from "../product/ProductItem";

// const openNotificationWithIcon = (type) => {
//   notification[type]({
//     message: "Đã thêm vào giỏ hàng",
//     description:
//       "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
//   });
// };
// const data = [
//   {
//     title: "Voucher 1",
//     img: "./image/voucher1.png",
//     price: "300",
//   },
//   {
//     title: "Voucher 2",
//     img: "./image/voucher2.png",
//     price: "295",
//   },
//   {
//     title: "Voucher 3",
//     img: "./image/voucher3.png",
//     price: "500",
//   },
//   {
//     title: "Voucher 4",
//     img: "./image/voucher4.png",
//     price: "120",
//   },
//   {
//     title: "Voucher 5",
//     img: "./image/voucher1.png",
//     price: "220",
//   },
//   {
//     title: "Voucher 6",
//     img: "./image/voucher2.png",
//     price: "400",
//   },
//   {
//     title: "Voucher 1",
//     img: "./image/voucher1.png",
//     price: "520",
//   },
//   {
//     title: "Voucher 2",
//     img: "./image/voucher2.png",
//     price: "60",
//   },
//   {
//     title: "Voucher 3",
//     img: "./image/voucher3.png",
//     price: "100",
//   },
//   {
//     title: "Voucher 4",
//     img: "./image/voucher4.png",
//     price: "80",
//   },
//   {
//     title: "Voucher 5",
//     img: "./image/voucher1.png",
//     price: "200",
//   },
//   {
//     title: "Voucher 6",
//     img: "./image/voucher2.png",
//     price: "50",
//   },
// ];

const { Title } = Typography;

const styleColor = {
  color: "#ed2a26",
};

const cardColor = {
  border: "1px solid silver",
  borderRadius: "10px",
  padding: "5px",
  backgroundColor: "#ffb3c1",
};

const styleCart = {
  backgroundColor: "white",
  color: "black",
  border: "1px solid white",
  borderTopLeftRadius: "20px",
  borderBottomLeftRadius: "20px",
  borderBottomRightRadius: "20px",
  borderTopRightRadius: "20px",
  height: "30px",
  marginRight: "10px",
  marginLeft: "10px",
};

const Products = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.product);
  const {user} = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      dispatch(productActions.loadProductListByUser({ page: 1, size: 8 }));
    } else dispatch(productActions.loadProductList({ page: 1, size: 8 }));
  }, [dispatch, user]);

  return (
    <div className="page-wrapper mt-5">
      <h3 style={styleColor}>Products</h3>
      <div className="product__container pt-2">
        {list.map((props) => (
          <ProductItem key={props._id} {...props} />
        ))}
      </div>
    </div>
  );
};

export default Products;
