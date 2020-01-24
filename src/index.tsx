
import "./index.css";
import {h, render} from "preact";
import {App} from "./app/App"
// import register from './serviceWorker'

declare const module;

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}

if ('serviceWorker' in navigator) {
  try {
    navigator.serviceWorker.register('serviceWorker.js')
    console.info('Service Worker Registered!')
  } catch (err) {
    console.error(err);
  }
}
 
render(<App />, document.getElementById('root'));
// registerServiceWorker();
