// export default name -> 무조건 1개만 export 가 가능함
/*
var name ="Kim";
var name2 ="Park";

내보내기 : export {name, name2} 
가져오기 : import {name, name2 } from '경로';


*/
// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    id: 0,
    title: "White and Black",
    content: "Born in France",
    price: 120000,
    img: "https://codingapple1.github.io/shop/shoes1.jpg",
  },

  {
    id: 1,
    title: "Red Knit",
    content: "Born in Seoul",
    price: 110000,
    img: "https://codingapple1.github.io/shop/shoes2.jpg",
  },

  {
    id: 2,
    title: "Grey Yordan",
    content: "Born in the States",
    price: 130000,
    img: "https://codingapple1.github.io/shop/shoes3.jpg",
  },
];
