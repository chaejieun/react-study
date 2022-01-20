import React from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";

function Cart(props) {
  return (
    <div>
      <Table responsive>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경</th>
        </tr>
        {props.state.map((a, i) => {
          return (
            <tr key={i}>
              <td>{a.id}</td>
              <td>{a.name}</td>
              <td>{a.quan}</td>
              <td>
                <button
                  onClick={() => {
                    props.dispatch({ type: "수량증가" });
                  }}
                >
                  +
                </button>
                <button
                  onClick={() => {
                    props.dispatch({ type: "수량감소" });
                  }}
                >
                  -
                </button>
              </td>
            </tr>
          );
        })}
        ;
      </Table>
    </div>
  );
}

// reducer 데이터 수정 요청
// 데이터 수정요청 할 땐 props.dispatch()

// redux  store 데이터 가져와서
// props로 변환해주는 함수
function state를props화(state) {
  return { state: state }; // state 라는 이름의 props로 바꿔주셈
}

export default connect(state를props화)(Cart);
// 컴포넌트에서 store에 있는 state쓰려면
// 1.function 만들기
// 2.export default connect()()
//export default Cart;
