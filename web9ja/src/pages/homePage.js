import Homes from "../components/homepageContent/homePageContent";

import Navbar from "../components/navBar/NavbarContent";
import Triangle from "../components/TriangleFlipper/tri_Content";
import ViewMore from "../components/viewMoreCards/morecards";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Triangle />
      <ViewMore />
      <Homes />
    </div>
  );
};
export default Home;
