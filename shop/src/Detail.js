import React from "react";
import { useHistory } from "react-router-dom"; // 페이지 뒤로가기 및 활용을 위한 리액트 라우터 돔

function Detail() {
  let history = useHistory();

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
            alt=""
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">상품명</h4>
          <p>상품설명</p>
          <p>120000원</p>
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
