import classes from "./ads.module.css";
import AdCard from "./ad card/AdCard";
import { useNavigate } from "react-router-dom";
import Laptop from "../../images/laptop.jpg";
import { useContext } from "react";
import AdsContext from "../../store/ads-context";
import UserContext from "../../store/user-context";
import UIContext from "../../store/ui-context";

const Ads = () => {
  const adsContext = useContext(AdsContext);
  const userContext = useContext(UserContext);
  const uiContext = useContext(UIContext);
  const navigate = useNavigate();

  const adCardHandler = (id, ad) => {
    navigate(`/ad/${id}`);
  };

  return (
    <main className={classes.mainBox}>
      {adsContext?.ads?.map((ad, index) => {
        const isActive = new Date(ad.endAt) >= new Date() && ad.isActive;
        const { category, condition, status } = adsContext.filterAdChoice;
        const matchesCategory = category === "all" || category === ad.category;
        const matchesCondition = condition === "all" || condition === ad.condition;
        const matchesStatus = status === "all" || status === isActive;
        const search = adsContext.searchData.trim().toLowerCase();
        const matchesSearch = adsContext.searchData.trim().length === 0 || ad.itemName.trim().toLowerCase().includes(search);

        if (matchesSearch && matchesCategory && matchesCondition && matchesStatus) {
          if (uiContext.navActive === "explore") {
            return (
              <AdCard
                key={ad._id}
                id={ad._id}
                imageSrc={ad.pictures[0] || Laptop}
                title={ad.itemName}
                description={ad.description}
                category={ad.category}
                condition={ad.condition}
                price={ad.price}
                isActive={isActive}
                fav={userContext?.userData?.favorites?.includes(ad._id)}
                onClick={() => adCardHandler(ad._id, ad)}
              />
            );
          } else if (uiContext.navActive === "myAds" && userContext.userData?._id === ad.userId) {
            return (
              <AdCard
                key={ad._id}
                id={ad._id}
                imageSrc={ad.pictures[0] || Laptop}
                title={ad.itemName}
                description={ad.description}
                category={ad.category}
                condition={ad.condition}
                price={ad.price}
                isActive={isActive}
                fav={userContext?.userData?.favorites?.includes(ad._id)}
                onClick={() => adCardHandler(ad._id, ad)}
              />
            );
          } else if (uiContext.navActive === "myFav" && userContext.userData?.favorites?.includes(ad._id)) {
            return (
              <AdCard
                key={ad._id}
                id={ad._id}
                imageSrc={ad.pictures[0] || Laptop}
                title={ad.itemName}
                description={ad.description}
                category={ad.category}
                condition={ad.condition}
                price={ad.price}
                isActive={isActive}
                fav={userContext?.userData?.favorites?.includes(ad._id)}
                onClick={() => adCardHandler(ad._id, ad)}
              />
            );
          }
        }

        return null;
      })}
    </main>
  );
};
export default Ads;

//is active --done
//href email--done
//clear text input afer comment --done
//if you disable, dont see delete button. --done
//set userprofile to default if no profile picture --done

//validations
//see more button implementation
