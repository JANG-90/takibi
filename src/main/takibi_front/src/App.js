import "./App.css"; // 파일 경로에 맞게 수정
import Header from "./layouts/Header/Header.js";
import Footer from "./layouts/Footer/Footer.js";

const App = () => {
  return (
    <div className="App">
      {/* 상단 헤더 */}
      <Header />

      {/* 하단 푸터 */}
      <Footer />
    </div>
  );
};

export default App;
