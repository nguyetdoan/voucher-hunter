import "@dotlottie/player-component";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import cartAction from "../../redux/actions/cartActions";
import ProductItem from "./ProductItem";

const CartPopUp = ({ show, setShowCart }) => {
  const {user} = useSelector(state => state.auth)
  const { cart, totalPrice} = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  useEffect(() => {
    if (user) {
      dispatch(cartAction.getCart())
    }
  }, [dispatch, user])

  const handlePushCheckout = () => {
    navigate(`/checkout`);
    setShowCart(false);
  };
  const handlePushCart = () => {
    navigate("/cart");
    setShowCart(false);
  };

  if (cart.length === 0) {
    return (
      <div className={`cart-pop-up ${show ? "show" : ""}`}>
        <dotlottie-player
          src="../image/empty-basket.lottie"
          autoplay
          loop
          style={{ width: "100%" }}
        />

        <p className="text-center fw-bold my-3">
          Your cart is currently empty!!
        </p>
      </div>
    );
  }

  return (
    <div
      className={`dropdown-menu cart-pop-up cart-wrapper ${show ? "show" : ""}`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="list-product pb-3">
        {cart.map((item) => (
          <ProductItem {...item} key={item._id} />
        ))}
      </div>
      <div className="py-3">
        <div className="d-flex justify-content-between">
          <p>Total</p>
          <p>{Intl.NumberFormat().format(totalPrice)} VND</p>
        </div>
        <p>
          Taxes and shipping calculated at checkout
        </p>
      </div>

      <div className="d-flex justify-content-center">
        <button className="btn btn-dark mx-2" onClick={handlePushCart}>
          YOUR CART
        </button>
        <button className="btn btn-primary mx-2" onClick={handlePushCheckout}>
          CHECK OUT
        </button>
      </div>
    </div>
  );
};

export default CartPopUp;
