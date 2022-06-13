import { Form, Formik } from "formik";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import "yup-phone";
import authActions from "../../redux/actions/authActions";
import CustomInput from "../CustomInput/index";
import CustomSelector from "../CustomSelector/index";

const initialState = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  district: "",
  phoneNumber: "",
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Require."),
  lastName: Yup.string().required("Require."),
  address: Yup.string().required("Require."),
  city: Yup.string().required("Require."),
  district: Yup.string().required("Require."),
  phoneNumber: Yup.string()
    .required("Require.")
    .phone("VN", true, "Not a valid phone number."),
});

const AddressForm = () => {
  const [initialValues, setInitialValues] = useState(initialState);
  const [cityOptions, setCityOptions] = useState([]);
  const [districtOptions, setDistrictOptions] = useState([]);
  const [addressData, setAddressData] = useState([]);
  const { billingAddress, user, loadingAddressForm } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  const setDistrictSelectOptions = useCallback((cityName) => {
    if (addressData.length) {
      const city = addressData.find((city) => city.name === cityName);
      const options = [];

      for (let district of city.districts) {
        options.push(district.name);
      }
      setDistrictOptions(options);
    }
  }, [addressData]);

  useEffect(() => {
    if (billingAddress) {
      setInitialValues(billingAddress);
      setDistrictSelectOptions(billingAddress.city)
    }
  }, [billingAddress, setDistrictSelectOptions]);

  useEffect(() => {
    fetch("https://provinces.open-api.vn/api/?depth=2")
      .then((res) => res.json())
      .then((data) => {
        setAddressData(data);
        setCitySelectOptions(data);
      });

    dispatch(authActions.loadAddress());
  }, [dispatch]);

  const setCitySelectOptions = (data) => {
    const options = [];
    for (let city of data) {
      options.push(city.name);
    }
    setCityOptions(options);
  };

  const handleSaveAddress = (values) => {
    console.log(values);
    dispatch(authActions.setLoadingAddressForm(true));
    dispatch(authActions.addAddress({ ...values, userId: user._id }));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSaveAddress}
      enableReinitialize
    >
      {({ isSubmitting }) => (
        <Form className="address-form">
          <div className="d-grid-2">
            <CustomInput
              name="firstName"
              label="First Name"
              require={true}
              type="text"
            />
            <CustomInput
              name="lastName"
              label="Last Name"
              require={true}
              type="text"
            />
          </div>
          <CustomInput
            name="address"
            label="Address"
            require={true}
            type="text"
          />
          <div className="d-grid-2">
            <CustomSelector
              placeholder={"Select a city"}
              name="city"
              label="City"
              require={true}
              setDistrictSelectOptions={setDistrictSelectOptions}
              selectOptions={cityOptions}
            />
            <CustomSelector
              placeholder={"Select a district"}
              name="district"
              label="District"
              require={true}
              selectOptions={districtOptions}
            />
          </div>
          <div className="d-grid-2">
            <CustomInput
              name="phoneNumber"
              label="Phone Number"
              require={true}
              type="text"
            />
          </div>
          <button className="submit-btn" onClick={isSubmitting}>
            {loadingAddressForm ? (
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              "Save changes"
            )}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AddressForm;
