import classes from "./LandingPage.module.css";
import { Grid } from "@mui/material";


const LandingPage = () => {
  return (
    <div className={classes.Full}>
      <div className={classes.top}>
        <div className={classes.leftSection }>
            <h1>ReSellNow-Shop & Sell Preloved Treasures</h1>
        </div>

        <div className={classes.RightSection}>
            <h5>Discover and sell quantity secondhand items. Join us in promoting sustainability through conscious consumption</h5>
        </div>
      </div>
      <div className={classes.bottom}>
        <div className={classes.firstItem}></div>
        <div className={classes.secondItem}></div>
        <div className={classes.thirdItem}></div>
      </div>


      <div className={classes.top}>
      <div className={classes.leftSection1}>
        <h4> Get branded fits sold and cleaned by the originals themselves</h4>
      </div>

      <div className={classes.RightSection1}>
       <h4>Get the originals for less</h4>
      </div>


      </div>
    </div>

  );
};
export default LandingPage;
  