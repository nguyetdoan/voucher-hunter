import { useDispatch } from "react-redux";
import cartAction from "../../redux/actions/cartActions";
const ProductItem = ({ images, price, title, quantity, _id }) => {
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(cartAction.deleteItem(_id))
  }
  return (
    <div className="product-info">
      <div className="col-3 product-img">
        <img src={images[0]} alt="" />
      </div>
      <div>
        <p>{title}</p>
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
