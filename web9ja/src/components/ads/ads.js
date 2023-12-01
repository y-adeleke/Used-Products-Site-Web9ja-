import classes from "./ads.module.css";
import AdCard from "./ad card/AdCard";
//Images
import Furniture from "../../images/furniture.jpg";
import Dress from "../../images/potrait.jpg";
import Laptop from "../../images/laptop.jpg";
import Cat from "../../images/cat.jpg";
import Book from "../../images/books.jpg";
import Beauty from "../../images/beauty.jpg";
import { useContext } from "react";
import AdsContext from "../../store/ads-context";
import UserContext from "../../store/user-context";
import UIContext from "../../store/ui-context";

//Demo Ad data
export const adsFakeData = [
  {
    userId: "112",
    _id: "1",
    pictures: [Furniture],
    itemName: "main longe sofa",
    description: "This is a very long sofa. It is very comfortable and can be used for a long time.",
    category: "furniture",
    location: "Lagos",
    condition: "used",
    price: 200,
    isActive: true,
    endAt: "2021-09-30T00:00:00.000Z",
  },
  {
    userId: "112",
    _id: "2",
    pictures: [Dress],
    itemName: "Long dress",
    description: "This is a woman beautiful dress.",
    category: "fashion",
    location: "Lagos",
    condition: "new",
    price: 100,
    isActive: false,
    endAt: "2021-09-30T00:00:00.000Z",
  },
  {
    userId: "113",
    _id: "3",
    pictures: [Laptop],
    itemName: "Macbook pro",
    description: "This is an M2 apple macbook. It has a little dent but works perfectly. please buy it",
    category: "electronics",
    location: "Lagos",
    condition: "used",
    price: 900,
    isActive: true,
    endAt: "2021-09-30T00:00:00.000Z",
  },
  {
    userId: "113",
    _id: "4",
    pictures: [Cat],
    itemName: "Cat",
    description: "This is a cat. It is very cute and can be used for a long time.",
    category: "pet",
    location: "Lagos",
    condition: "used",
    price: 200,
    isActive: false,
    endAt: "2021-09-30T00:00:00.000Z",
  },
  {
    userId: "6565ec66fe454096a2c7ad91",
    _id: "5",
    pictures: [Book],
    itemName: "Step by step",
    description:
      "This is a book written by Yusuf O. Adeleke, a very good writer.This is a book written by Yusuf O. Adeleke, a very good writer.This is a book written by Yusuf O. Adeleke, a very good writer.This is a book written by Yusuf O. Adeleke, a very good writer.",
    category: "books",
    location: "Lagos",
    condition: "used",
    price: 32,
    isActive: true,
    endAt: "2021-09-30T00:00:00.000Z",
  },
  {
    userId: "113",
    _id: "6",
    pictures: [Beauty],
    itemName: "Face Cream",
    description: "You want a radiant skin? try this cream.",
    category: "beauty",
    location: "Lagos",
    condition: "new",
    price: 75,
    isActive: true,
    fav: false,
    endAt: "2021-09-30T00:00:00.000Z",
  },
];

const Ads = () => {
  const adsContext = useContext(AdsContext);
  const userContext = useContext(UserContext);
  const uiContext = useContext(UIContext);

  const adCardHandler = (id, ad) => {
    console.log(id);
    console.log(ad);
    console.log(userContext.userData?.favorites);
  };

  return (
    <main className={classes.mainBox}>
      {adsContext?.ads?.map((ad, index) => {
        console.log("ad", ad);
        if (new Date(ad.endAt) < new Date()) ad.isActive = false;
        if (uiContext.navActive === "explore") {
          return (
            <AdCard
              key={index}
              id={ad._id}
              imageSrc={ad.pictures[0] || Laptop}
              title={ad.itemName}
              description={ad.description}
              category={ad.category}
              condition={ad.condition}
              price={ad.price}
              isActive={ad.isActive}
              fav={userContext?.userData?.favorites?.includes(ad._id)}
              onClick={() => adCardHandler(ad._id, ad)}
            />
          );
        } else if (uiContext.navActive === "myAds" && userContext.userData?._id === ad.userId) {
          return (
            <AdCard
              key={index}
              id={ad._id}
              imageSrc={ad.pictures[0] || Laptop}
              title={ad.itemName}
              description={ad.description}
              category={ad.category}
              condition={ad.condition}
              price={ad.price}
              isActive={ad.isActive}
              fav={userContext?.userData?.favorites?.includes(ad._id)}
              onClick={() => adCardHandler(ad._id, ad)}
            />
          );
        } else if (uiContext.navActive === "myFav" && userContext.userData?.favorites?.includes(ad._id)) {
          return (
            <AdCard
              key={index}
              id={ad._id}
              imageSrc={ad.pictures[0] || Laptop}
              title={ad.itemName}
              description={ad.description}
              category={ad.category}
              condition={ad.condition}
              price={ad.price}
              isActive={ad.isActive}
              fav={userContext?.userData?.favorites?.includes(ad._id)}
              onClick={() => adCardHandler(ad._id, ad)}
            />
          );
        }
        return null;
      })}
    </main>
  );
};
export default Ads;
