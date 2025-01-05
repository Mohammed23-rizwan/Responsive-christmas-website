import Celebrate from "./Components/Celebrate";
import Giving from "./Components/Giving";
import Home from "./Components/Home";
import Messages from "./Components/Messages";
import NavBar from "./Components/NavBar";
import NewArraival from "./Components/NewArrival";
import ShareGift from "./Components/ShareGift";
import FooterSi from "./Components/FooterSi";

const App = () => {
  return (
    <div className="w-full h-full bg-body-color-dark text-title-color-dark">
      <NavBar />
      <Home />
      <Giving />
      <Celebrate />
      <ShareGift />
      <NewArraival />
      <Messages />
      <FooterSi />
    </div>
  );
};

export default App;
