const express = require("express");
const path = require("path");
const app = express();

const http = require("http").createServer(app);
http.listen(8080, function () {
  console.log("listening on 8080");
});

//app.use(express.static(path.join(__dirname, "public")));
// app.use -> 미들웨어
// 서버의 요처과 응답사이에 실행할 코드
app.use("/react", express.static(path.join(__dirname, "react-project/build")));
app.use("/", express.static(path.join(__dirname, "public")));

// /react로 들어갔을 때 리액트 페이지 보여주려면
// 리액트 프로젝트 package.json에 "homepage":"/react"를 추가해주어야함!!

app.get("/", function (요청, 응답) {
  응답.sendFile(path.join(__dirname, "public/main.html"));
});

app.get("/react", function (요청, 응답) {
  응답.sendFile(path.join(__dirname, "react-project/build/index.html"));
});

app.get("*", function (요청, 응답) {
  응답.sendFile(path.join(__dirname, "react-project/build/index.html"));
});

// 리액트 프로젝트 내에서도 라우팅이 가능
// 서버의 역할 1. 라우팅 페이지 나누기 X -> DB 입출력으로 축소가 될 수가 있음
// 하지만, 이렇게 사용할 경우 문제점이 생길 수 있음.
//
