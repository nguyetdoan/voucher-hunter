import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container d-block">
        <div className="accordion" id="accordionPanelsStayOpenExample">
          <div className="accordion-item ">
            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
              <button
                className="accordion-button collapsed fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                Contact information
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <ul className="accordion-body pt-0">
                <li className="d-flex align-items-center mb-3">
                  <div className="icon-container me-3 ">
                    <i className="bi bi-geo-alt-fill" />
                  </div>
                  <div>
                    <p className="mb-0 fw-bold">Address</p>
                    <p className="mb-0">
                      343, Pham Ngu Lao, District 1, Ho Chi Minh city
                    </p>
                  </div>
                </li>
                <li className="d-flex align-items-center mb-3">
                  <div className="icon-container me-3">
                    <i className="bi bi-telephone-fill"></i>
                  </div>
                  <div>
                    <p className="mb-0 fw-bold">Phone</p>
                    <p className="mb-0">01234566617</p>
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <div className="icon-container me-3">
                    <i className="bi bi-geo-alt-fill" />
                  </div>
                  <div>
                    <p className="mb-0 fw-bold">Email</p>
                    <p className="mb-0">mindX@gmail.com</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="accordion-item ">
            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
              <button
                className="accordion-button collapsed fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                Your Account
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwo"
            >
              <ul className="accordion-body pt-0">
                <li>
                  <Link to="/account">Personal Info</Link>
                </li>
                <li>
                  <Link to="/orders">Orders</Link>
                </li>
                <li>
                  <Link to="/account">Credit Slips</Link>
                </li>
                <li>
                  <Link to="/account">Address</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="accordion-item ">
            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
              <button
                className="accordion-button collapsed fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
              >
                Your Account
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingThree"
            >
              <ul className="accordion-body pt-0">
                <li>
                  <Link to="/aboutus">About us</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/sitemap">Sitemap</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="accordion-item ">
            <h2 className="accordion-header" id="panelsStayOpen-headingFour">
              <button
                className="accordion-button collapsed fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseFour"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseFour"
              >
                Our Company
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingFour"
            >
              <ul className="accordion-body pt-0">
                <li>
                  <Link to="/newproduct">New Product</Link>
                </li>
                <li>
                  <Link to="/special">Special</Link>
                </li>
                <li>
                  <Link to="/bestproduct">Best Product</Link>
                </li>
                <li>
                  <Link to="/pricedrop">Price drop</Link>
                </li>
                <li>
                  <Link to="/delivery">Delivery</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="accordion-item ">
            <h2 className="accordion-header" id="panelsStayOpen-headingFive">
              <button
                className="accordion-button collapsed fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseFive"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseFive"
              >
                Extra
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingFive"
            >
              <ul className="accordion-body pt-0">
                <li>
                  <Link to="/store">Our store</Link>
                </li>
                <li>
                  <Link to="/brands">Brands</Link>
                </li>
                <li>
                  <Link to="/news">Newsletter</Link>
                </li>
                <li>
                  <Link to="/blogs">Blogs</Link>
                </li>
                <li>
                  <Link to="/wishlist">Wishlist</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="py-3">
        <p className="text-center mb-0 text-white">
          &copy; Copyright belongs to <b>TeamTwo</b>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
