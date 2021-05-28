// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { HTTP } from '@metall/common1';
import { installHttpMock } from './__mock/installHttpMock';

installHttpMock({ environment: 'test' });
HTTP.createClient('http://localhost:4000/api');
