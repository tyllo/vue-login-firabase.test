import { CUSTOM_UNKNOWN_ERROR } from './error-types';


export const getMessage = (e) => (
  e?.response?.data?.error?.message
  || CUSTOM_UNKNOWN_ERROR
);
