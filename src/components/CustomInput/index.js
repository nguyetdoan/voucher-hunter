import { Field, useField } from "formik";

const CustomInput = ({ name, label, type, require, placeholder }) => {
  const [, meta] = useField(name);

  return (
    <div className="input-field">
      <label>{label}{require && <span className="text-primary">*</span>}</label>
      <Field
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className={`form-control ${
          meta.touched && meta.error ? "error" : ""
        }`}
      />
      {meta.touched && meta.error ? (
        <div className="err-msg">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default CustomInput;
