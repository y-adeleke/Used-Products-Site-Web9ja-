import { createContext } from "react";

const AdsContext = createContext({
  ads: [],
});

export const AdsContextProvider = (props) => {
  //ADS
  const createAdHandler = (...data) => {
    //send your request to the server here
  };

  const editAdHandler = () => {};

  const getAllAdsHandler = () => {};

  const disableAdHandler = () => {};

  const askQuestionHandler = () => {};

  const answerQuestionHandler = () => {};

  const toggleFavouriteHamdler = () => {};

  const contextValue = {};

  return <AdsContext.Provide value={contextValue}>{props.children}</AdsContext.Provide>;
};
export default AdsContext;
