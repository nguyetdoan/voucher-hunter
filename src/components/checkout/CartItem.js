const CartItem = ({ images, quantity, name, price, discount, from, to }) => {
  let totalPrice = price * quantity;
  let newTotalPrice = totalPrice

  const todayTime = +new Date();

  if (discount && +new Date(from) < todayTime && +new Date(to) > todayTime) {
    discount = discount.split("%")[0];
    let newPrice = price - (price * discount) / 100;
    newTotalPrice = newPrice * quantity;
  }

  return (
    <div className="product-info">
      <div className="product-thumbnail">
        <div className="product-img">
          <img src={images[0]} alt="" />
        </div>
        <span className="quantity">{quantity}</span>
      </div>
      <p className="cart-item__title">{name}</p>
      <div>
        <p>{Intl.NumberFormat().format(newTotalPrice)} VND</p>
        {totalPrice !== newTotalPrice ? <p className="origin-price">{Intl.NumberFormat().format(totalPrice)} VND</p> : null}
      </div>
    </div>
  );
};

export default CartItem;
