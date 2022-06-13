import { useDispatch } from "react-redux";
import cartAction from "../../redux/actions/cartActions";
const ProductItem = ({ images, price, name, quantity, _id }) => {
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(cartAction.deleteItem(_id))
  }
  return (
    <div className="product-info">
      <div className="product-img">
        <img src={images[0]} alt="" />
      </div>
      <div className="w-100">
        <p className="product-title">{name}</p>
        <p>
          {quantity} x {Intl.NumberFormat().format(price)} VND
        </p>
      </div>
      <div>
        <i className="bi bi-trash" onClick={deleteItem}></i>
      </div>
    </div>
  );
};

export default ProductItem;
