import createNumberMask from 'text-mask-addons/dist/createNumberMask';

//export const BASE_API_URL = 'http://localhost:5000/';
export const BASE_API_URL = 'http://localhost:52140/';

export const alertSucess = {
    type: 'success',
    msg: `Transfer enqueued. Check again in a moment for status.`,
    timeout: 3000
  };

export const alertInvalid = {
    type: 'danger',
    msg: `Invalid transfer. Check extract for information.`,
    timeout: 3000
  };

export const moneyMask = createNumberMask({
  prefix: '$ ',
  suffix: '',
  allowDecimal: true
});