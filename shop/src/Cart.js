import React from "react";
import { Table } from "react-bootstrap";
import { connect, useDispatch, useSelector } from "react-redux";

function Cart(props) {
  let state = useSelector((state) => state);
  console.log(state.reducer);
  let dispatch = useDispatch();

  return (
    <div>
      <Table responsive>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경</th>
        </tr>
        {state.reducer.map((a, i) => {
          return (
            <tr key={i}>
              <td>{a.id}</td>
              <td>{a.name}</td>
              <td>{a.quan}</td>
              <td>
                <button
                  onClick={() => {
                    dispatch({ type: "수량증가", 데이터: a.id });
                  }}
                >
                  +
                </button>
                <button
                  onClick={() => {
                    dispatch({ type: "수량감소", 데이터: a.id });
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

      {props.alert열렸니 === true ? (
        <div className="my-alert2">
          <p>지금 구매하시면 신규할인 20%</p>
          <button
            onClick={() => {
              props.dispatch({ type: "alert닫기" });
            }}
          >
            닫기
          </button>
        </div>
      ) : null}
    </div>
  );
}

// reducer 데이터 수정 요청
// 데이터 수정요청 할 땐 props.dispatch()

// redux  store 데이터 가져와서
// props로 변환해주는 함수

// function state를props화(state) {
//   return { state: state }; // state 라는 이름의 props로 바꿔주셈
// }

function state를props화(state) {
  console.log(state);
  return {
    state: state.reducer,
    alert열렸니: state.reducer2,
  }; // state 라는 이름의 props로 바꿔주셈
}

//export default connect(state를props화)(Cart);
export default Cart;
// 컴포넌트에서 store에 있는 state쓰려면
// 1.function 만들기
// 2.export default connect()()
//export default Cart;
