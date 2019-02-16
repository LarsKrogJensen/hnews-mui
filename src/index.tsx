import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from "./app/App";

const rootEl = document.getElementById('root')

ReactDOM.render(<App />, rootEl);

// const mod: any = module
if ((module as any).hot) {
    (module as any).hot.accept('./app/App', () => {
    const NextApp = require('./app/App').default
    ReactDOM.render(
      <NextApp />,
      rootEl
    )
  })
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
