export const defaultState = (address, city, postalCode, country) => ({
  formInputsData: {
    address: {
      label: 'Address',
      elementType: 'input',
      value: address ? `${address}` : '',
      elementConfig: {
        type: 'text',
        name: 'address',
        id: 'address',
        spellCheck: false,
        placeholder: address || 'Your Address',
      },
      validation: {
        isRequired: true,
      },
      isRef: true,
      isTouched: false,
      isValid: !address ? false : true,
    },
    city: {
      label: 'City',
      elementType: 'input',
      value: city ? `${city}` : '',
      elementConfig: {
        type: 'text',
        name: 'city',
        id: 'city',
        spellCheck: false,
        placeholder: city || 'City',
      },
      validation: {
        isRequired: true,
      },
      isRef: false,
      isTouched: false,
      isValid: !city ? false : true,
    },
    postalCode: {
      label: 'Postal Code',
      elementType: 'input',
      value: postalCode ? `${postalCode}` : '',
      elementConfig: {
        type: 'text',
        name: 'postalCode',
        id: 'postalCode',
        spellCheck: false,
        placeholder: postalCode || 'Postal Code',
      },
      validation: {
        isRequired: true,
        isNumeric: true,
        isMinLength: 6,
        isMaxLength: 6,
      },
      isRef: false,
      isTouched: false,
      isValid: !postalCode ? false : true,
    },
    country: {
      label: 'Country',
      elementType: 'input',
      value: country ? `${country}` : '',
      elementConfig: {
        type: 'text',
        name: 'country',
        id: 'country',
        spellCheck: false,
        placeholder: country || 'Country',
      },
      validation: {
        isRequired: true,
      },
      isRef: false,
      isTouched: false,
      isValid: !country ? false : true,
    },
  },
  isFormValid: !address ? false : true,
});
