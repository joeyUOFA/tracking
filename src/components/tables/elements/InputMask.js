import { createNumberMask } from 'redux-form-input-masks';

export const currencyMask = createNumberMask({
    prefix: '$ ',
    suffix: '',
    decimalPlaces: 2,
    locale: 'en-US',
});

export const percentageMask = createNumberMask({
    prefix: '',
    suffix: ' %',
    decimalPlaces: 2,
    locale: 'en-US',
});