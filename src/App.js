import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderNavbar from "./Components/navbar/HeaderNavbar";
import HeroSection from "./Components/section/HeroSection";
import CardDetail from "./Components/CardSection/CardDetail";
import FooterSection from "./Components/footer/FooterSection";
import BannerImage from "./backgroundImage/Image.png";

function App() {
  const style = {
    backgroundImage: `url(${BannerImage})`,
    backgroundSize: "cover",
    position: "relative",
    width: "100%",
    minHeight: "80vh",
    color: "white",
  };
  return (
    <div className="bg-white">
      <div style={style}>
        <HeaderNavbar />
        <HeroSection />
      </div>
      <CardDetail />
      <div style={style}>
        <HeroSection />
      </div>
      <FooterSection />
    </div>
  );
}
export default App;
