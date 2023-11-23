import classes from "./LandingPage.module.css";
import  pic1 from "../../Images/Adidas_ logo.jpg";
import pic2 from "../../Images/Fila_logo.jpg";
import pic3 from "../../Images/jordan_1.jpg";
import pic4 from "../../Images/Nike_logo.jpg";
import pic5 from "../../Images/Puma_logo.jpg";
import pic6 from "../../Images/vans.jpg";
import pic7 from "../../Images/reebok.jpg"


const LandingPage = () => {
  return (
    <div className={classes.Full}>
      <div className={classes.top}>
        <div className={classes.leftSection }>
            <h1>ReSellNow-Shop & </h1>
            <h1>Sell Preloved </h1>
            <h1>Treasures</h1>
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


      <div className={classes.top1}>

        <div className={classes.leftSection1}>
          <h4 style={{marginLeft:"-200px"}}> Get branded fits sold and cleaned by the originals themselves</h4>
        </div>

        <div className={classes.RightSection1}>
        <h4 style={{marginRight:"-220px"}}>Get the originals for less</h4>
        </div>
      </div>

      <div className={classes.ImgFolder}>
        <div className={classes.ImgFolder1}><img src={pic1}  alt="Logo description" width="30.98px" height="30.98px"  ></img></div>
        <div className={classes.ImgFolder1}><img src={pic2} alt="Logo description" width="30.98px" height="30.98px"></img></div>
        <div className={classes.ImgFolder1}><img src={pic3} alt="Logo description" width="30.98px" height="30.98px" ></img></div>
        <div className={classes.ImgFolder1}><img src={pic4} alt="Logo description" width="30.98px" height="30.98px"></img></div>
        <div className={classes.ImgFolder1}><img src={pic5} alt="Logo description" width="30.98px" height="30.98px"></img></div>
        <div className={classes.ImgFolder1}><img src={pic6} alt="Logo description" width="30.98px" height="30.98px"></img></div>
        <div className={classes.ImgFolder1}><img src={pic7} alt="Logo description" width="30.98px" height="30.98px"></img></div>
      </div>

      <div className={classes.Grid2}>
        <div className={classes.firstItem1}></div>
        <div className={classes.secondItem1}></div>
      </div>

      <div className={classes.ThirdSection}>
        <div className={classes.ThirdSection1}>
          <h3 style={{marginLeft:"-220px"}}> Sell your old </h3>
          <h3 style={{marginLeft:"-220px"}}>Items old items</h3>
        </div>
        <div className={classes.ThirdSection2}>
          <h3 style={{marginRight:"-295px"}}> Promote eco-friendly </h3>
          <h3 style={{marginRight:"-295px"}}>clothing distributing and </h3>
          <h3 style={{marginRight:"-295px"}}>still get paid</h3>
        </div>
      </div>
      <div className={classes.FourthSection}> </div>
      <div className={classes.secondButton}>
      <button>Sell item</button>
    </div>

    <div className={classes.footerSection}>
      <h2>Footer</h2>
    </div>
      
  </div>

  );
};
export default LandingPage;
  