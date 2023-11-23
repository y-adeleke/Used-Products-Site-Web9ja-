import Homes from "../components/homepageContent/homePageContent";
import Navbar from "../components/navBar/NavbarContent";
import Triangle from "../components/TriangleFlipper/tri_Content";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Triangle />
      <Homes />
    </div>
  );
};
export default Home;
