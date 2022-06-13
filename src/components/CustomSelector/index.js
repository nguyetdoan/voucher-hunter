import { Field, useField, useFormikContext } from "formik";
import { useEffect, useRef, useState } from "react";

const CustomSelector = ({
  placeholder,
  name,
  require,
  label,
  selectOptions,
  setDistrictSelectOptions
}) => {
  const [selected, setSelected] = useState(placeholder);
  const [showOptions, setShowOptions] = useState(false);
  const [filterOptions, setFilterOptions] = useState(selectOptions);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef();
  const [isTouched, setIsTouched] = useState(false);
  const { touched: touchedObj, setFieldValue, setTouched } = useFormikContext();
  const [{ value }, { touched, error }] = useField(name);

  useEffect(() => {
    setFilterOptions(selectOptions);
  }, [selectOptions]);

  const handleClick = (e, item) => {
    e.stopPropagation();
    setInputValue("");
    setFieldValue(name, item);
    setShowOptions(false);
    inputRef.current.focus();
  };

  useEffect(() => {
    if (value) {
      setSelected(value)
    }
  }, [value, name, setDistrictSelectOptions])

  const toggleSelect = (e) => {
    e.stopPropagation();
    new Promise((resolve) => resolve(setShowOptions(true))).then(() =>
      inputRef.current.focus()
    );
    console.log(showOptions);
    if (!isTouched) {
      setIsTouched(true);
    }
  };

  useEffect(() => {
    if (!touched) {
      setIsTouched(false);
    }
  }, [touched]);

  const handleFilter = (e) => {
    setInputValue(e.target.value);
    const regex = new RegExp(e.target.value, "i");
    setFilterOptions(selectOptions.filter((option) => regex.test(option)));
    if (!showOptions) {
      setShowOptions(true);
    }
  };

  useEffect(() => {
    // when click outside options show off
    const handleClickOutside = () => {
      if (showOptions) {
        setShowOptions(false);
      }
      if (isTouched && !touched) {
        setTouched({ ...touchedObj, [name]: true });
      }
      setFilterOptions(selectOptions);
      setInputValue("")
    };

    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, [setTouched, selectOptions, touchedObj, touched, name, isTouched, showOptions]);

  return (
    <div className="custom-select">
      <label>
        {label} {require && <span className="text-primary">*</span>}
      </label>
      <Field as="select" name={name}>
        <option value="">{placeholder}</option>
        {selectOptions.map((item, i) => (
          <option key={i} value={item}>
            {item}
          </option>
        ))}
      </Field>
      <div className="input-field">
        <input
          ref={inputRef}
          value={inputValue}
          placeholder={selected}
          onChange={handleFilter}
          className={`w-100 "select-selected"} ${
            showOptions ? "show-box" : ""
          } ${value === "" ? "not-selected" : ""}
          ${touched && error ? "error" : ""}`}
          onClick={toggleSelect}
        />

        {touched && error ? <div className="err-msg">{error}</div> : null}
      </div>

      <div className={`select-items ${!showOptions ? "select-hide" : ""} bg-white`}>
        {filterOptions.length === 0 ? (
          <div className="disabled-select" onClick={(e) => e.stopPropagation()}>
            No Data.
          </div>
        ) : (
          filterOptions.map((option, index) => (
            <div
              key={`${name}-${index}`}
              className={option === selected ? "same-as-selected" : ""}
              onClick={(e) => handleClick(e, option)}
            >
              {option}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CustomSelector;
