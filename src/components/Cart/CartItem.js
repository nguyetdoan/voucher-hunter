import { ExclamationCircleOutlined } from "@ant-design/icons";
import confirm from "antd/lib/modal/confirm";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import cartAction from "../../redux/actions/cartActions";

const CartItem = ({
  _id,
  images,
  name,
  from,
  to,
  discount,
  quantity,
  price,
  stock,
}) => {
  const dispatch = useDispatch();
  let newPrice = price;
  let totalPrice = price * quantity;
  const todayTime = +new Date();
  const quantityRef = useRef(null)

  if (discount && +new Date(from) < todayTime && +new Date(to) > todayTime) {
    discount = discount.split("%")[0];
    newPrice = price - (price * discount) / 100;
    totalPrice = newPrice * quantity;
  }

  const showConfirm = () => {
    confirm({
      title: 'Do you Want to delete this item?',
      icon: <ExclamationCircleOutlined />,
  
      onOk() {
        dispatch(cartAction.deleteItem(_id))
      }
    });
  };

  const changeQuantity = (quantity) => {
    if (!quantity) return;
    if (quantity === stock) return;
    dispatch(cartAction.updateItem({ id: _id, quantity }));
  };

  useEffect(() => {
    quantityRef.current.value = quantity
  }, [quantity])

  const handleQuantityInput = () => {
    const newQuantity = +quantityRef.current.value;

    if (newQuantity === 0) {
      dispatch(cartAction.updateItem({ id: _id, quantity: 1 }));
      return;
    }
    if (newQuantity > stock) {
      quantityRef.current.value = stock;
      dispatch(cartAction.updateItem({ id: _id, quantity: stock }));
      return;
    }

    dispatch(cartAction.updateItem({ id: _id, quantity: newQuantity })); 
  }

  const handleIncrease = () => {
    changeQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    changeQuantity(quantity - 1);
  };

  return (
    <div className="product-info">
      <div className="product-info__detail">
        <div className="image-container">
          <img src={images[0]} alt="" />
        </div>

        <div>
          <p>{name}</p>
        </div>
      </div>
      <div>
        <p>{Intl.NumberFormat().format(newPrice)} VND</p>
        {price !== newPrice ? <p className="origin-price">{Intl.NumberFormat().format(price)} VND</p> : null}
      </div>
      <div className="quantity-input">
        <button disabled={quantity === 1} onClick={handleDecrease}>
          -
        </button>
        <input type="number" step="1" ref={quantityRef} onBlur={handleQuantityInput} />
        <button
          disabled={quantity === stock}
          onClick={handleIncrease}
        >
          +
        </button>
      </div>
      <div className="total-price">
        <strong>{Intl.NumberFormat().format(totalPrice)}</strong>
      </div>
      <i className="bi bi-trash" onClick={showConfirm}></i>
    </div>
  );
};

export default CartItem;
