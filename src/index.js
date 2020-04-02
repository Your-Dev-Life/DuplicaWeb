import React from 'react';
import { render } from 'react-dom';
import App from './components/app';
import api from './api';
import './i18n/i18n';

render(<App api={api} />, document.getElementById('app'));
