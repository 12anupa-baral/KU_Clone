import { useState } from "react";
import Nav from "./components/nav";
import Main from "./components/home";
import Innernav from "./components/innernav";
import News from "./components/news";
import Admission from "./components/admission";
import Notice from "./components/notice";

function App() {
  return (
    <>
      <Nav />
      <Main />
      <News />
      <Admission />
      <Notice />
    </>
  );
}

export default App;
