export const validationSchema = {
  email: {
    isRequired: {
      message: 'Электронная почта обязательна для заполнения',
    },
    isEmail: {
      message: 'Email введен не корректно',
    },
  },
  link: {
    isRequired: {
      message: 'Ссылка обязательна для заполнения',
    },
    isUrl: {
      message: 'URL не корректный',
    },
  },
  description: {
    isRequired: {
      message: 'Описание обязательно для заполнения',
    },
    min: {
      message: 'Описание должно сожержать минимум 20 символов',
      param: 20,
    },
  },
  password: {
    isRequired: {
      message: 'Пароль обязателен для заполнения',
    },
    isCapitalSymbol: {
      message: 'Пароль должен содержать заглавную букву',
    },
    isContainDigit: {
      message: 'Пароль должен содержать число',
    },
    min: {
      message: 'Пароль должен содержать минимум 8 символов',
      param: 8,
    },
  },
};
