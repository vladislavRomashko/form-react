import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  fio: yup
    .string()
    .required('ФИО обязательно для заполнения')
    .matches(
      /^([a-zA-Zа-яА-Я]{2,}\s[a-zA-Zа-яА-Я]{1,}'?-?[a-zA-Zа-яА-Я]{2,}\s?([a-zA-Z]{1,})?)/g,
      'Введите корректное ФИО'
    ),
  email: yup
    .string()
    .required('Электронная почта обязательна для заполнения')
    .email('Email введен не корректно'),
  address: yup.string().required('Адрес обязателен для заполнения'),
  deliveryType: yup.string().required('Выберите вариант доставки'),
  needLiftFloor: yup.string().required('Укажите нужен ли подъем на этаж'),
  agreement: yup
    .array()
    .test(
      'contains value',
      'Согласие на обработку данных обязательно',
      (value) => value.includes('1')
    ),
});

// export const validationSchema = {
//   fio: {
//     isRequired: {
//       message: 'Электронная почта обязательна для заполнения',
//     },
//     isFIO: {
//       message: 'Введите корректное ФИО',
//     },
//   },
//   email: {
//     isRequired: {
//       message: 'Электронная почта обязательна для заполнения',
//     },
//     isEmail: {
//       message: 'Email введен не корректно',
//     },
//   },
//   deliveryType: {
//     isRequired: {
//       message: 'Выберите вариант доставки',
//     },
//   },
//   needLiftFloor: {
//     isRequired: {
//       message: 'Укажите нужен ли подъем на этаж',
//     },
//   },
//   agreement: {
//     isContainValue: {
//       message: 'Согласие на обработку данных обязательно',
//       param: '1',
//     },
//   },
// };
