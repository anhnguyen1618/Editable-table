import React from 'react';
import { render } from 'react-dom';
import './Scss/Styles.scss';
import { Provider } from "react-redux";
import store from "./redux-store/store";
import App from './components/App.jsx';
render(
    <Provider store = {store}>
		<App/>
	</Provider>,
    document.getElementById('app'));
