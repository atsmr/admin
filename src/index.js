import { h, Component } from 'preact'
import { Provider } from 'preact-redux'
import App from './components/app'
import store from './store'
import './style'

export default () => (
    <Provider store={store}>
        <App />
    </Provider>
)
