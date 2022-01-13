import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom"; // 페이지 뒤로가기 및 활용을 위한 리액트 라우터 돔
import styled from "styled-components";
import "./Detail.scss";

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

function Detail(props) {
  let history = useHistory();
  let { id } = useParams(); // 리액트 라우터의 useParams 훅
  let 찾은상품 = props.shoes.find((x) => x.id == id);

  return (
    <div className="container">
      <박스>
        <제목 색상={`red`}>Detail</제목>
        {/* <제목 색상="blue">Detail(props전송 다른방법)</제목> */}
      </박스>
      <div className="my-alert2">
        <p>재고가 얼마 남지 않았습니다!!!!</p>
      </div>
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
        </div>
      </div>
    </div>
  );
}

export default Detail;
