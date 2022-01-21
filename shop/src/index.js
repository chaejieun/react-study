import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { combineReducers, createStore } from "redux";
// router setting
//import * as serviceWorker from "./serviceWorker";

import { BrowserRouter } from "react-router-dom"; // react-router-dom 초기 셋팅법 (/abc로 이동해주세요 ( #기호 작동하지 않음))
// import { HashRouter } from "react-router-dom";  // react-router-dom 초기 셋팅법
// (HashRouter로도 사용 가능함 (#기호 작동 -> #기호는 서버에 절대 전송되지 않는다. react가 안정적으로 처리해줄 수 있음 ))
// Browser와 HashRouter의 차이

import { Provider } from "react-redux";
// provider로 감싼 컴포넌트는 같은 state를 공유할 수 있음
// provider로 보낸 store는 모든 state에서 사용 가능

// redux 쓰는 이유
// 1. 복잡한 props 전송이 필요없음
// 2. state 데이터 관리 가능

// let store = createStore(() => {
//   return [
//     { id: 0, name: "나이키조던신발", quan: 2 },
//     { id: 1, name: "구찌신발", quan: 4 },
//   ];
// });

let alert초기값 = true;

function reducer2(state = alert초기값, 액션) {
  if (액션.type === "alert닫기") {
    state = false;
    return state;
  } else {
    return state;
  }
}

let 초기값 = [
  { id: 0, name: "나이키조던신발", quan: 2 },
  { id: 1, name: "구찌신발", quan: 4 },
];

// state 데이터의 수정방법을 정의해놓자 : reducer
// reducer 세팅법
// reducer는 그냥 수정된 state를 뱉어내는 함수
function reducer(state = 초기값, 액션) {
  // state에 초기값을 선택
  if (액션.type === "수량증가") {
    // 수량 증가일 경우
    // 복사본 만들어주고, 해당 숫자 +1 시켜주기
    let copy = [...state]; // copy본 만들기
    copy[액션.데이터].quan++;
    return copy;
  } else if (액션.type === "수량감소") {
    let copy = [...state];
    copy[액션.데이터].quan--;
    if (copy[액션.데이터].quan < 0) {
      copy[액션.데이터].quan = 0;
      return copy;
    }
    return copy;
  } else {
    return state;
  }
}

//let store = createStore(reducer);
let store = createStore(combineReducers({ reducer, reducer2 }));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
