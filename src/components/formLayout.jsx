import React from 'react';
import PropTypes from 'prop-types';

const FormLayout = ({ children, title }) => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 shadow p-4">
          <h2>{title}</h2>
          {children}
        </div>
      </div>
    </div>
  );
};

FormLayout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default FormLayout;
