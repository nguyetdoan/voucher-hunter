import { Pagination } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../components/product/ProductItem";
import productAction from "../redux/actions/productAction";

const ProductPage = () => {
  const {
    list,
    loading,
    changed,
    page,
    size,
    search,
    sortBy,
    order,
    totalItems,
  } = useSelector((state) => state.product);
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(productAction.loadProductListByUser({ page: 1, size: 10 }));
    } else dispatch(productAction.loadProductList({ page: 1, size: 10 }));
  }, [dispatch, user]);

  const onChange = (page, pageSize) => {
    dispatch(productAction.changePage({ page, size: pageSize }));
  };

  useEffect(() => {
    if (changed) {
      if (user) {
        dispatch(
          productAction.loadProductListByUser({
            page,
            size,
            search,
            sortBy,
            order,
          })
        );
      } else
      dispatch(
        productAction.loadProductList({ page, size, search, sortBy, order })
      );
    }
  }, [dispatch, changed, page, size, search, sortBy, order, user]);

  if (loading) {
    return <></>;
  }

  return (
    <div className="page-wrapper py-5">
      <div className="d-flex justify-content-end mb-3">
        <Pagination
          showSizeChanger
          onChange={onChange}
          pageSize={size}
          current={page}
          total={totalItems}
        />
      </div>
      <div className="product__container">
        {list.map((props) => (
          <ProductItem key={props._id} {...props} />
        ))}
      </div>
      <div className="d-flex justify-content-end mb-3">
        <Pagination
          showSizeChanger
          onChange={onChange}
          pageSize={size}
          current={page}
          total={totalItems}
        />
      </div>
    </div>
  );
};

export default ProductPage;
