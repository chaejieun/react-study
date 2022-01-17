/* eslint-disable */
import React, { useContext, useState } from "react";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Data from "./data.js";
import { Link, Route, Switch } from "react-router-dom";
import Detail from "./Detail.js";
import axios from "axios";

//  context 만들기
// 1. createContext 같은 변수값을 공유할 범위 생성
// 2. 재고context.Provider -> 같은 값을 공유할 HTML을 범위로 싸매기
// 2-2. value={공유하는값}
export let 재고context = React.createContext();

function App() {
  let [shoes, shoes변경] = useState(Data);
  let [재고, 재고변경] = useState([10, 11, 12]);

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link to="/" as={Link}>
                Home
              </Nav.Link>
              <Nav.Link to="/detail" as={Link}>
                Detail
              </Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* switch 컴포넌트
        여러개가 맞아도 하나만 보여주세요! (택일)
        중복이 발생하면 맨 위에꺼만 매칭될 수 있도록 처리해줌
     */}
      <Switch>
        <Route exact path="/">
          <div>메인페이지에요</div>

          <div className="background">
            <h1>20% Season off</h1>
            <p>this is product explanatin area</p>
            <Button>test</Button>
          </div>

          <div className="container">
            <재고context.Provider value={재고}>
              <div className="row">
                {shoes.map((a, i) => {
                  return <Card shoes={shoes[i]} i={i} key={i} />;
                })}
              </div>
            </재고context.Provider>

            <button
              className="btn btn-primary"
              onClick={() => {
                // AJAX 통신
                // .them() -> 성공하면
                // .catch() -> 실패 시 처리
                // 생 자바스크립트 로 가져오는 ajax는
                // fetch('https://codingapple1.github.io/shop/data2.json').then()으로 사용 가능
                // axios를 쓰면 JSON을 Object로 자동으로 바꿔줌

                // AJAX POST _ 서버에 데이터를 보내고 싶을 때  POST 요청하는 법
                // axios.post("서버URL", { id: "codingapple", pw: 1234 });

                // 로딩중이라는 UI 띄움

                axios
                  .get("https://codingapple1.github.io/shop/data2.json")
                  .then((result) => {
                    // 로딩중이라는 UI 안보이게 처리
                    shoes변경([...shoes, ...result.data]); // 기존에 있던 shoes에 result.data를 추가 시켜주는 technic
                  })
                  .catch(() =>
                    // 로딩중이라는 UI 안보이게 처리
                    console.log("실패했어요")
                  );
              }}
            >
              더보기
            </button>
          </div>
        </Route>

        {/* 
            :id 
          뒤에 파라미터가 오든 이동시킬 수 있는 URL의 파라미터 문법 
          1. 콜론 뒤에 맘대로 작성
          2. 여러개 사용 가능 
        */}
        <Route path="/detail/:id">
          <div>디테일 페이지에요</div>
          <Detail shoes={shoes} 재고={재고} 재고변경={재고변경} />
          {/* 이 부분을 다른 페이지에서 export할 수 있도록 컴포넌트화 작업으로 처리함 -> Detail.js 
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                src="https://codingapple1.github.io/shop/shoes1.jpg"
                width="100%"
              />
            </div>
            <div className="col-md-6 mt-4">
              <h4 className="pt-5">상품명</h4>
              <p>상품설명</p>
              <p>120000원</p>
              <button className="btn btn-danger">주문하기</button>
            </div>
          </div>
        </div>
        */}
        </Route>
        {/* '/' 경로로 들어왔을 때와, '/detail'로 들어왔을 때에도 메인페이지 내용이 보이는 이유는?
          '/' <- 이 슬래쉬가 메인에도 포함되어 있기 때문에 '메인페이지에요 와 디테일 페이지에요'가 함께 보이는 이유!
          ----> 그것을 막기 위해서는 [exact]라는 것을 넣으면, 무조건 문자가 일치하는 것만 타게 됌
     */}

        {/*  <Route path="/어쩌구" component={Modal}></Route> 
        /어쩌구 경로로 들어오게 될 경우
        component-> 'Modal'이라는 것을 바로 실행시킬 수 있도록 처리
      */}

        {/*  
        URL에 맞는 HTML을 갈아치우는 걸 흉내내는 것이기 때문에 서로 다른 HTML이 아님!
      */}
        <Route path="/:id">
          <div>아무거나 적었을 때 이거 보여주기</div>
        </Route>
      </Switch>
    </>
  );
}

// 재고라는 data를 마음데로 가져다 쓸 수 있음
function Card(props) {
  let 재고 = useContext(재고context); // context로 공유된 값 사용하기

  return (
    <div className="col-md-4">
      <img src={props.shoes.img} width="100%" alt="" />{" "}
      <img
        src={
          "https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"
        }
        width="100%"
        alt=""
      />
      <h4> {props.shoes.title} </h4>
      <p>
        {props.shoes.content} & {props.shoes.price}
      </p>
      {/* props 대신 context를 사용하자 */}
      <Test></Test>
    </div>
  );
}

function Test() {
  let 재고 = useContext(재고context);
  return <p>{재고[0]}</p>;
}

// Redux라는 라이브러리 :
// 모든 컴포넌트파일들이 같은 값을 공유할 수 있는 저장공간 생성가능

export default App;
