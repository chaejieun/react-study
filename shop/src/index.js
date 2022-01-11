import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// router setting
//import * as serviceWorker from "./serviceWorker";

import { BrowserRouter } from "react-router-dom"; // react-router-dom 초기 셋팅법 (/abc로 이동해주세요 ( #기호 작동하지 않음))
// import { HashRouter } from "react-router-dom";  // react-router-dom 초기 셋팅법
// (HashRouter로도 사용 가능함 (#기호 작동 -> #기호는 서버에 절대 전송되지 않는다. react가 안정적으로 처리해줄 수 있음 ))
// Browser와 HashRouter의 차이

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
