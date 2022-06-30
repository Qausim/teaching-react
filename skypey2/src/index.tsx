import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store';


if (process.env.NODE_ENV !== 'production') {
  // @ts-ignore
  Map.prototype.toJSON = function() {
    const obj: { [key: string]: any } = {};
    this.forEach((value, key) => obj[key] = value);
    return obj;
  }
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const fancyLog = () => {
  console.log("%c Rendered with 👉 👉 👇", "background: purple; color: #FFF");
  console.log(store.getState());
};

const render = () => {
  fancyLog();
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};
render();
store.subscribe(render);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
