import { notification } from "antd";
import { useDispatch, useSelector } from "react-redux";
import cartAction from "../../redux/actions/cartActions";
import CartItem from './CartItem';

const CartContainer = () => {
  const {user, billingAddress} = useSelector(state => state.auth)
  const { cart, totalPrice, loadingOrder } = useSelector(state => state.cart);
  const dispatch = useDispatch()

  const placeOrder = () => {
    if (!billingAddress) {
      notification.error({message: "Please enter and save your address before submitting"});
      return;
    }
    dispatch(cartAction.setLoadingOrder(true));
    dispatch(cartAction.placeOrder({cart, userId: user._id, totalPrice, information: billingAddress}))
  }

  return (
    <div className="cart__container">
      <div className="list-product">
        {cart.map((item) => (
          <CartItem {...item} key={item._id} />
        ))}
      </div>
      <div className="sub-total">
        <p>
          Subtotal <span>{Intl.NumberFormat().format(totalPrice)} VND</span>
        </p>
        <p>
          Shipping <span>0</span>
        </p>
      </div>
      <div className="total">
        <p>
          Total{' '}
          <span>
           <strong>{Intl.NumberFormat().format(totalPrice)} VND</strong>
          </span>
        </p>
      </div>
      <button className="submit-btn w-100 d-block" onClick={placeOrder}>
        {loadingOrder ? <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div> : "Check out with Paypal"}
      </button>
    </div>
  );
};

export default CartContainer;