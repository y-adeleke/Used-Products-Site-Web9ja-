import Ads from "../components/ads/ads";
import Nav from "../components/navbar/Nav";
import SideNav from "../components/navbar/SideNav";
import { useContext } from "react";
import UIContext from "../store/ui-context";
const AdsPage = () => {
  const uiContext = useContext(UIContext);

  return (
    <div>
      <Nav />
      {uiContext.sideNav && <SideNav />}
      <Ads />
    </div>
  );
};
export default AdsPage;
