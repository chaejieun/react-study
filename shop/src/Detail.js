import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom"; // 페이지 뒤로가기 및 활용을 위한 리액트 라우터 돔
import styled from "styled-components";
import App from "./App";
import "./Detail.scss";
import { 재고context } from "./App.js";
import { Nav } from "react-bootstrap";

import { SwitchTransition, CSSTransition } from "react-transition-group";

// component가 많아지면
// css 작성 고민이 많아짐
// yarn add styled-components 설치 후 import styled

// 컴포넌트에 직접 스타일 넣어서 스타일링하기
// css를 미리 입혀놓은 컴포넌트
let 박스 = styled.div`
  padding: 20px;
`;

let 제목 = styled.h4`
  font-size: 25px;
  color: ${(props) => props.색상}; //글자 {변수명}으로 사용 가능
`;

let 파란제목 = styled(제목)`
  font-color: blue;
`;

// SASS (프로그래밍 언어스럽게 작성한 Preprocessor)
// npm install node-sass
// import "./Detail.css";
// 별도의 css 파일로 만들어서 적용

// 컴포넌트의 LifeCycle
// 컴포넌트 등장-> 재렌더링 -> 퇴장
// 중간 중간 hook을 걸 수가 있음
// 컴포넌트가 생성 되기 전에 먼저 hook을 걸어 요청할 수 있음!!
// Hook으로 컴포넌트의 인생 중간중간에 뭔가 명령을 줄 수 있음!

// 이전 버전
// class Detail2 extends React.component {
//   // 컴포넌트가 마운트 되었을 때 작동
//   componentDidMount() {}

//   // 컴포넌트 마운트가 해제 되었을 때 작동
//   componentWillUnmount() {}
// }

function Detail(props) {
  let [alert, setAlert] = useState(true);
  let [inputData, setInputData] = useState("");

  let [누른탭, 누른탭변경] = useState(0);
  let [스위치, 스위치변경] = useState(false);

  let 재고 = useContext(재고context);

  // useEffect
  // LifeCycle의 Hook과 같은 기능을 함
  // 컴포넌트가 mount / update / 될 때 특정 코드를 실행할 수 있음
  useEffect(() => {
    // 2초 후에 my-alert2창을 사라지게 해주세요
    let 타이머 = setTimeout(() => {
      setAlert(false);
    }, 2000);
    console.log("디테일 타이머");
    return () => {
      clearTimeout(타이머);
    };
    // 2초가 사라지면 타이머를 다시 clear 시켜주어야 버그 잡을 수 있음
  }, [alert]);
  // alert가 변경이 될 때만 실행되는 조건
  // [] 빈 값일 경우엔? 업데이트 시 실행이 안됩니다! (페이지가 딱 한번 로딩 됐을 때만 사용 가능)

  let history = useHistory();
  let { id } = useParams(); // 리액트 라우터의 useParams 훅
  let 찾은상품 = props.shoes.find((x) => x.id == id);

  return (
    <div className="container">
      <박스>
        <제목 색상={`red`}>Detail</제목>
        {/* <제목 색상="blue">Detail(props전송 다른방법)</제목> */}
      </박스>

      {inputData}
      <input onChange={(e) => setInputData(e.target.value)} />

      {alert ? (
        <div className="my-alert2">
          <p>재고가 얼마 남지 않았습니다!!!!</p>
        </div>
      ) : (
        ``
      )}

      <div className="row">
        <div className="col-md-6">
          <img src={찾은상품.img} width="100%" alt="" />
        </div>
        <div className="col-md-6 mt-4">
          {/* 
          <h4 className="pt-5">{props.shoe[id].title}</h4>
          <p>{props.shoe[id].content}</p>
          <p>{props.shoe[id].price}원</p> 
          */}
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>
          <button className="btn btn-danger">주문하기</button>

          <button
            className="btn btn-danger"
            onClick={() => {
              history.goBack();
            }}
          >
            뒤로가기
          </button>
          {/* history.push(이동경로)를 치면 해당 경로로 이동하라는 의미*/}
          <button
            className="btn btn-danger"
            onClick={() => {
              history.push("/");
            }}
          >
            뒤로가기2
          </button>

          {/* 
                    [ Tab UI 만드는 법 ]
              1. UI상태를 true/false state로 저장해둠
              2. state에 따라 UI 보이게 안보이게 
            */}
          <Nav variant="tabs" defaultActiveKey="link-0">
            <Nav.Item>
              <Nav.Link
                eventKey="link-0"
                onClick={() => {
                  누른탭변경(0);
                  스위치변경(false);
                }}
              >
                Active
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="link-1"
                onClick={() => {
                  누른탭변경(1);
                  스위치변경(false);
                }}
              >
                Option 2
              </Nav.Link>
            </Nav.Item>
          </Nav>

          {/* animation 추가는? 
          1. cssTransition으로 애니메이션 필요한 곳 감싸기
          2. in, classNames, timeout 넣기 
          3. class로 애니메이션 넣기
          4. 원할 때 스위치 켜기
          */}
          <CSSTransition in={스위치} classNames="wow" timeout={500}>
            <TabContent 누른탭={누른탭} 스위치변경={스위치변경} />
          </CSSTransition>
        </div>
      </div>
    </div>
  );
}

function TabContent(props) {
  // tabContent가 등장할 때 스위치 켜주기
  useEffect(() => {
    props.스위치변경(true);
  });

  if (props.누른탭 === 0) {
    return <div>내용0</div>;
  } else if (props.누른탭 === 1) {
    return <div>내용1</div>;
  } else if (props.누른탭 === 2) {
    return <div>내용2</div>;
  }
}

function Info(props) {
  return <p>재고 : {props.재고[0]}</p>;
}

export default Detail;
