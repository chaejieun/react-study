import React, { useEffect, memo } from "react";
import { Table } from "react-bootstrap";
import { connect, useDispatch, useSelector } from "react-redux";

function Cart(props) {
  let state = useSelector((state) => state);
  console.log(state.reducer);
  let dispatch = useDispatch();

  var style = { color: "white" };

  return (
    <div>
      <Table responsive>
        <tr style={style}>
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
      <Parent 이름="존박1" 나이="20"></Parent>
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

// props나 state가 변경이 되면
// 그거 쓰는 HTML 전부 재렌더링이 됨
// memo()를 사용하면 불필요한 재렌더링 막기 가능
function Parent(props) {
  return (
    <div>
      <Child1 이름={props.이름}></Child1>
      <Child2 나이={props.나이}></Child2>
    </div>
  );
}

function Child1(props) {
  useEffect(() => {
    console.log("렌더링됨1");
  });
  return <div>1111</div>;
}

// function을 memo로 감싸기.
// 재 렌더링이 되지 않음
let Child2 = memo(function (props) {
  useEffect(() => {
    console.log("렌더링됨2");
  });
  return <div>222</div>;
});

//export default connect(state를props화)(Cart);
export default Cart;
// 컴포넌트에서 store에 있는 state쓰려면
// 1.function 만들기
// 2.export default connect()()
//export default Cart;
