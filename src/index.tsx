import * as React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { style } from './styles'
import { createGlobalStyle } from 'styled-components'
import { AppContainer } from 'react-hot-loader'

const GlobalStyle = createGlobalStyle`${style}`

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <>
        <GlobalStyle />
        <App />
      </>
    </AppContainer>,
    document.getElementById('root')
  )
}

render()

// react-hot-loader
if ((module as any).hot) {
  (module as any).hot.accept()
}

registerServiceWorker()
