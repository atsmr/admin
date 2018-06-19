import { h, Component } from 'preact'
import { Provider } from 'preact-redux'
import store from './store'
import './style';
import App from './components/App';

export default () => {
    <Provider store={store}>
        <App />
    </Provider>
}
