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
        
        <Grid container spacing={2}>
           
            <Grid item xs={4}>
              <div className={classes.firstGrid}>
              </div>
            </Grid>

            
            <Grid item xs={4}>
              <div className={classes.secondGrid}>
              
              </div>
            </Grid>

         
            <Grid item xs={4}>
              <div className={classes.thirdGrid}>
              
              </div>
            </Grid>
          </Grid>
      </div>

    </div>
  );
};
export default LandingPage;
