import React, { useEffect, useState } from 'react';
import FormLayout from '../formLayout';
import TextField from '../textField';
// import { validate } from '../../utils/validator';
import { validationSchema } from './validationSchema';
import SelectField from '../selectField';
import {
  deliveryTypeList,
  needLiftFloorOptions,
  giftList,
  agreements,
} from './fieldsOptions';
import RadioField from '../radioField';
import MultiSelectField from '../multiSelectField';
import CheckboxField from '../checkboxField';
import { parseYupError } from '../../utils/paseYupError';

const OrderForm = () => {
  const [values, setValues] = useState({
    fio: '',
    email: '',
    address: '',
    deliveryType: '',
    needLiftFloor: '',
    gifts: [],
    agreement: [],
    test: false,
  });
  const [errors, setErrors] = useState({});
  useEffect(() => {
    validationSchema
      .validate(values, { abortEarly: false })
      .then(() => setErrors({}))
      .catch((yupError) => {
        const errors = parseYupError(yupError);
        setErrors(errors);
      });
  }, [values]);

  // useEffect(() => {
  //   const errors = validate(values, validationSchema);
  //   setErrors(errors);
  // }, [values]);

  const isValid = Object.keys(errors).length === 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) console.log('Send!');
  };

  const handleChange = (e) => {
    console.log(e);
    const { name, value } = e.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <FormLayout title="Оформление заказа">
      <form onSubmit={handleSubmit}>
        <TextField
          name="fio"
          value={values.fio}
          label="ФИО"
          error={errors.fio}
          onChange={handleChange}
        />
        <TextField
          name="email"
          value={values.email}
          label="Email"
          error={errors.email}
          onChange={handleChange}
        />
        <TextField
          name="address"
          value={values.address}
          label="Адрес"
          error={errors.address}
          onChange={handleChange}
        />
        <SelectField
          options={deliveryTypeList}
          name={'deliveryType'}
          label="Выберите доставку"
          value={values.deliveryType}
          onChange={handleChange}
          error={errors.deliveryType}
          defaultOption="Выберите вариант доставки"
        />
        <RadioField
          options={needLiftFloorOptions}
          name="needLiftFloor"
          value={values.needLiftFloor}
          onChange={handleChange}
          label="Нужен подъем на этаж? "
          error={errors.needLiftFloor}
        />
        <MultiSelectField
          options={giftList}
          className="mb-4"
          name="gifts"
          value={values.gifts}
          onChange={handleChange}
          label="Выберите подарок"
        />
        <CheckboxField
          name="agreement"
          label="Подтвердите согласие"
          value={values.agreement}
          onChange={handleChange}
          options={agreements}
          error={errors.agreement}
        />

        <button className="btn btn-primary w-100 mx-auto" disabled={!isValid}>
          Оформить
        </button>
      </form>
    </FormLayout>
  );
};

export default OrderForm;
