import classes from "./LandingPage.module.css";
const LandingPage = () => {
  return (

<>
    <div className={classes.navbar}>
      <h3>
        COntact us @loremgmcail.com
      </h3>
     <div className={classes.logo}>
      <h1>
          Web9ja
        </h1>
     </div>
      <div className={classes.buttons}>
        <div className={classes.prycta}>
          Get Started
        </div>
        <div className={classes.seccta
}>
          Sign in
        </div>
      </div>
    </div>
    <div className={classes.Fullpage}>
      <section className={classes.section1}>
        <div className={classes.toppart}>
            <h1>
            ReSellNow - Shop & Sell Preloved Treasures
            </h1>
            <h5>
            Discover and sell quality secondhand items. Join us in promoting sustainability through conscious consumption.
            </h5>
        </div>
        <div className={classes.bottompart}>
          <div className={classes.img1}></div>
          <div className={classes.img2}></div>
          <div className={classes.img3}></div>
        </div>
      </section>
      <section className={classes.section2}>
        <div className={classes.leftpart}>
          <h5>
          Get branded fits sold and cleaned by the originals themselves
          </h5>
          <div className={classes.iconlist}>
            <div className={classes.icon}></div>
            <div className={classes.icon}></div>
            <div className={classes.icon}></div>
            <div className={classes.icon}></div>
            <div className={classes.icon}></div>
            <div className={classes.icon}></div>
            <div className={classes.icon}></div>
          </div>
          <div className={classes.leftimg}></div>
        </div>
        <div className={classes.rightpart}>
          <h1>
          Get the originals for less
          </h1>
        <div className={classes.imgandbtn}>
          <div className={classes.rightimg}></div>
            <div className={classes.prycta}>
              Shop now
          </div>
        </div>
  
        </div>
      </section>
      <section className={classes.section3}>
        <div className={classes.Leftandright}>
          <h1>
          Sell your old Items old items
          </h1>
          <h5>
          Promote eco-friendly clothing distributing and still get paid
          </h5>
        </div>
        <div className={classes.bigimg}></div>
        <div className={classes.prycta}>
            Sell Now
        </div>
      </section>
      <section className={classes.section4}>
        <h1>
          footer
        </h1>
      </section>
    </div>
</>
  );
};
export default LandingPage;
