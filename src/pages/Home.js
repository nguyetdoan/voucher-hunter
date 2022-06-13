import Newletter from "../components/home/Newletter";
import News from "../components/home/News";
import Product from "../components/home/Products";
import Slider from "../components/home/Silder";
import Voucher from "../components/voucher/Voucher";

const Home = () => {
  return (
    <div>
      <Slider />
      <Product />
      <Voucher />
      {/* <DiscountSale /> */}
      <News />
      <Newletter />
    </div>
  );
};
export default Home;
