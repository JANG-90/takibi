import "./Home.css";

const Home = () => {
  return (
    <section className="container">
      <figure className="figure-left">
        <img src="/Main/IMG_6657.JPG" alt="Main Image" />
        <div className="title-overlay-main">타이틀 텍스트</div>
      </figure>

      <div className="figure-right">
        <figure className="figure">
          <img src="/Main/IMG_6688.JPG" alt="Supporting Image 1" />
          <div className="title-overlay-right-top">타이틀 텍스트 1</div>
        </figure>
        <figure className="figure">
          <img src="/Main/IMG_9841.JPG" alt="Supporting Image 2" />
          <div className="title-overlay-right-down">타이틀 텍스트 2</div>
        </figure>
      </div>
    </section>
  );
};

export default Home;
