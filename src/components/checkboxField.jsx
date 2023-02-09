import React from 'react';
import PropTypes from 'prop-types';
import SingleCheckboxField from './singleCheckboxField';

const CheckboxField = ({ name, label, value, options, onChange, error }) => {
  // const getOptionId = (option) => `${option.value}_${option.value}`;

  const handleChange = (e) => {
    const { value: inputValue } = e.target;
    const newValue = value.includes(inputValue)
      ? value.filter((v) => v !== inputValue)
      : [...value, inputValue];

    const fakeEvent = {
      target: {
        name,
        value: newValue,
      },
    };
    onChange(fakeEvent);
  };

  const getIsChecked = (inputValue) => {
    value.includes(inputValue);
  };

  const getInputClasses = () => {
    return error ? 'is-invalid' : '';
  };

  return (
    <div className="mb-4">
      <p className={getInputClasses()}>
        <label>{label}</label>
      </p>
      {options.map((option) => (
        <SingleCheckboxField
          key={option.value}
          checked={getIsChecked(option.value)}
          label={option.label}
          name={name}
          value={option.value}
          onChange={handleChange}
        />
      ))}

      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

CheckboxField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ),
};

export default CheckboxField;
