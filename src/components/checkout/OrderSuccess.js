import '@dotlottie/player-component';
import { useNavigate } from 'react-router-dom';

const OrderSuccess = () => {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate('/');
  };

  return (
    <div className="page-wrapper order-success__container">
      <dotlottie-player
        src="image/order-success.lottie"
        autoplay
        loop
        style={{ height: '60vh', margin: '0 auto' }}
      />
      <div className="text-center mt-5">
        <button className="btn btn-primary" onClick={handleReturn}>
          Return to home
        </button>
      </div>
    </div>
  );
};

export default OrderSuccess;