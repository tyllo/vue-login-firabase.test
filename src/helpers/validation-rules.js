/* eslint camelcase: 0 */

import { MIN_PASSWORD_LENGTH } from '@/helpers/params';


export const required = (value) => value?.length > 0 || 'Обязательное поле';

export const min = (value) => value?.length >= MIN_PASSWORD_LENGTH || `Минимум ${MIN_PASSWORD_LENGTH} символов`;

export const email = (value) => /.+@.+/.test(value) || ('Введите валидный адрес электронной почты');

export const password = (value) => /[A-Z0-9]$/.test(value) || 'Можно использовать только прописные буквы и цифры';

export const password_repeat = (pwd1, pwd2) => pwd1 === pwd2 || 'Пароли не совпадают';
