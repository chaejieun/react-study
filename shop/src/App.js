/* eslint-disable */
import React, { useState } from "react";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Data from "./data.js";
import { Link, Route, Switch } from "react-router-dom";

function App() {
  let [shoes, shoes변경] = useState(Data);

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
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

      <Route exact path="/">
        <div>메인페이지에요</div>

        <div className="background">
          <h1>20% Season off</h1>
          <p>this is product explanatin area</p>
          <Button>test</Button>
        </div>

        <div className="container">
          <div className="row">
            {shoes.map((a, i) => {
              return <Card shoes={shoes[i]} i={i} key={i} />;
            })}
          </div>
        </div>
      </Route>
      <Route path="/detail">
        <div>디테일 페이지에요</div>

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
    </>
  );
}

function Card(props) {
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
    </div>
  );
}

export default App;
