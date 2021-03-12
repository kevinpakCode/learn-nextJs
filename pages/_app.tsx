import {Provider} from 'react-redux'
import {createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import 'bootstrap/dist/css/bootstrap.min.css'
import './../styles/styles.scss'

import AppRedux from './../redux/app-redux'

const  MyApp = ({ Component, pageProps }) =>{
  const store = createStore(AppRedux, composeWithDevTools())

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
export default MyApp
