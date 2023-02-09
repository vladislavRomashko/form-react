import React, { useEffect, useState } from 'react';
import { validationSchema } from './validationSchema';
import { validate } from '../../utils/validator';
import TextField from '../textField';
import FormLayout from '../formLayout';

const FeedbackForm = () => {
  const [values, setValues] = useState({
    email: '',
    link: '',
    description: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const errors = validate(values, validationSchema);
    setErrors(errors);
  }, [values]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      console.log('Send form');
    }
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const isValid = Object.keys(errors).length === 0;

  const { email, link, description, password } = values;
  return (
    <FormLayout title="Отчет об ошибке">
      <form onSubmit={handleSubmit}>
        <TextField
          name="email"
          label="Email"
          value={email}
          onChange={handleChange}
          error={errors.email}
        />
        <TextField
          name="link"
          label="Ссылка на страницу с ошибкой"
          value={link}
          onChange={handleChange}
          error={errors.link}
        />
        <TextField
          name="description"
          label="Описание"
          value={description}
          onChange={handleChange}
          error={errors.description}
        />
        <TextField
          name="password"
          label="Пароль"
          value={password}
          onChange={handleChange}
          error={errors.password}
          type="password"
        />
        <button
          className="btn btn-primary mx-auto w-100"
          type="submit"
          disabled={!isValid}
        >
          Отправить
        </button>
      </form>
    </FormLayout>
  );
};

export default FeedbackForm;
