import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TextField = ({ name, label, type, value, onChange, error }) => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const getInputClasses = () => {
    return 'form-control' + (error ? ' is-invalid' : '');
  };

  return (
    <div className="mb-4">
      <label htmlFor={name}>{label}</label>
      <div className="input-group has-validation">
        <input
          className={getInputClasses()}
          id={name}
          name={name}
          type={showPassword ? 'text' : type}
          value={value}
          onChange={onChange}
        />
        {type === 'password' && (
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={toggleShowPassword}
          >
            {showPassword ? 'Скрыть' : 'Показать'}
          </button>
        )}
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

TextField.defaultProps = {
  type: 'text',
};

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};
export default TextField;
