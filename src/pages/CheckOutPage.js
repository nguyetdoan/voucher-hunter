import { Collapse } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import AddressForm from "../components/checkout/AddressForm";
import CartContainer from "../components/checkout/CartContainer";
import OrderSuccess from "../components/checkout/OrderSuccess";
import cartAction from "../redux/actions/cartActions";
const { Panel } = Collapse;

const CheckOutPage = () => {
  const {orderSuccess, cart, loading} = useSelector(state => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => dispatch(cartAction.setOrderStatus(false))
  }, [dispatch]);

  if (orderSuccess) {
    return <OrderSuccess />
  }

  if (!cart.length && !loading) {
    return <Navigate to="/cart" />
  }
  
  return (
    <div className="page-wrapper checkout-page">
      <div className="billing-detail">
        <h4>Billing Detail</h4>
        <Collapse>
          <Panel showArrow={true} header="Edit Address" key="1">
            <AddressForm />
          </Panel>
        </Collapse>
      </div>
      <CartContainer />
    </div>
  );
};

export default CheckOutPage;
