import { Badge, notification } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import cartAction from "../../redux/actions/cartActions";

const ProductItem = ({
  name,
  price,
  images,
  _id,
  discount,
  from,
  to,
  ...rest
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.auth)
  const todayTime = +new Date();
  let newPrice = price;

  const addToCart = () => {
    if (user) {
      dispatch(
        cartAction.addToCart({
          name,
          price,
          images,
          _id,
          discount,
          from,
          to,
          ...rest,
          quantity: 1,
        })
      );
      return;
    }
    notification.error({message: "Please login first!"})
  };
  if (discount && +new Date(from) < todayTime && +new Date(to) > todayTime) {
    discount = discount.split("%")[0];
    newPrice = price - (price * discount) / 100;
  }

  const Wrapper =
    newPrice !== price
      ? ({children}) => (
          <Badge.Ribbon text={`${-discount}%`} color="red">
            {children}
          </Badge.Ribbon>
        )
      : ({children}) => <>{children}</>;

  return (
    <Wrapper>
      <div className="product-item">
        <div className="product-item__front">
          <div className="overlay-image">
            <img src={images[0]} alt="" />
          </div>
        </div>
        <div className="product-overlay"></div>
        <div className="product-item__back">
          <div
            className="overlay-image"
            onClick={() => navigate(`/product/${_id}`)}
          >
            <img src={images[1] || images[0]} alt="" />
          </div>
          <div className="product-action">
            <div className="product-icon" onClick={addToCart}>
              <i className="bi bi-plus-circle"></i>
            </div>
            <div className="product-icon">
              <i className="bi bi-heart"></i>
            </div>
            <div className="product-icon">
              <i className="bi bi-eye"></i>
            </div>
          </div>
        </div>

        <p
          className="product-title"
          onClick={() => navigate(`/product/${_id}`)}
        >
          {name}
        </p>
        <p className="product-item__price">
          {Intl.NumberFormat().format(newPrice)} VND
        </p>
        {price !== newPrice ? (
          <p className="origin-price">
            {Intl.NumberFormat().format(price)} VND
          </p>
        ) : null}
      </div>
    </Wrapper>
  );
};

export default ProductItem;
