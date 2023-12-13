import classes from "./LandingPage.module.css";
import iphone15 from "../../images/promo_iphone15_large_2x.jpg";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";
import PostAd from "../../images/postad.png";

const LandingPage = () => {
  const authCtx = useContext(AuthContext);

  return (
    <div className={classes.fullpage}>
      <section className={classes.section1} id="about">
        <div className={classes.main}>
          <div className={classes.massivetext}>
            Sell <span className={classes.accent2}>Anything</span> you can get your <span className={classes.pill1}>Hands</span> On
          </div>
          <div className={classes.subtext}>
            <h5 className={classes.lightgray}>Using web9ja’s optimized tools create ads and sell anything, It’s just that easy</h5>
          </div>
          <div className={classes.img1}></div>
          <div className={classes.img2}></div>
          <div className={classes.img3}></div>
          <div className={classes.img4}></div>
        </div>

        {authCtx.token && (
          <NavLink className={classes.createAd} to="/ads/adform">
            <button className={classes.massivectav1}>
              <h4 className={classes.accent1}>Create your first Ad</h4>
              <div className={classes.icon}></div>
            </button>
          </NavLink>
        )}
        {!authCtx.token && (
          <NavLink className={classes.createAd} to="/auth">
            <button className={classes.massivectav1}>
              <h4 className={classes.accent1}>Create your first Ad</h4>
              <div className={classes.icon}></div>
            </button>
          </NavLink>
        )}

        <div className={classes.bigimg}>
          <img src={iphone15} alt="iphone15" srcset=""></img>
        </div>
      </section>
      <section className={classes.section2} id="features">
        <div className={classes.heading}>
          <div className={classes.bigtext}>
            <h1 className={classes.black}>
              It's so <span className={classes.accent4}>Simple</span> even a baby can
            </h1>
            <div className={classes.img}></div>
          </div>
          <h4 className={classes.black}>
            In just <span className={classes.pill2}>3</span> easy steps
          </h4>
        </div>
        <div className={classes.steps}>
          <div className={classes.firststep}>
            <div className={classes.leftstep}>
              <h2 className={classes.black}>01</h2>
              <button className={classes.massivectav2}>
                <h2 className={classes.black}>
                  <span className={classes.accent4}>Create</span> An <span className={classes.accent4}>AD</span>
                </h2>
              </button>
              <div className={classes.subtext}>
                <h5 className={classes.black}>It’s as simple as A-B-C, Just click the create AD Button</h5>
              </div>
            </div>
            <div className={classes.rightimg}>
              <video className={classes.video} src="https://youtu.be/u_m6UZImN-o" autoPlay loop muted></video>
            </div>
          </div>
          <div className={classes.secondstep}>
            <div className={classes.leftimg}>
              <img src={PostAd} alt="postad" srcset="" className={classes.postadimg} />
            </div>
            <div className={classes.rightstep}>
              <h2 className={classes.black}>02</h2>
              <button className={classes.massivectav2}>
                <h2 className={classes.black}>
                  <span className={classes.accent5}>Post</span> Your <span className={classes.accent5}>AD</span>
                </h2>
              </button>
              <div className={classes.subtext}>
                <h5 className={classes.black}>Share your AD to the world and see what happens</h5>
              </div>
            </div>
          </div>
          <div className={classes.firststep}>
            <div className={classes.leftstep}>
              <h2 className={classes.black}>03</h2>
              <button className={classes.massivectav2}>
                <h2 className={classes.black}>
                  <span className={classes.accent1}>Pick</span> A <span className={classes.accent1}>Deal</span>
                </h2>
              </button>
              <div className={classes.subtext}>
                <h5 className={classes.black}>Get feedback and comments from interested Customers</h5>
              </div>
            </div>
            <div className={classes.rightimg}>
              <video className={classes.video} src="https://youtu.be/JcSmhrb-wkI" autoPlay loop muted></video>
            </div>
          </div>
        </div>
      </section>
      <section className={classes.section3} id="faq">
        <div className={classes.heading}>
          <h1 className={classes.white}>
            Questions people ask <span className={classes.pill3}>Alot</span>
          </h1>
        </div>

        <div className={classes.FAQlist}>
          <div className={classes.q1}>
            <h5 className={classes.white}>How do I create an ad on the site?</h5>
            <div className={classes.iconv2}></div>
          </div>
          <div className={classes.q2}>
            <h5 className={classes.white}>Is there a fee for posting an ad?</h5>
            <div className={classes.iconv2}></div>
          </div>
          <div className={classes.q3}>
            <h5 className={classes.white}>Can I include multiple items in a single ad?</h5>
            <div className={classes.iconv2}></div>
          </div>
          <div className={classes.q4}>
            <h5 className={classes.white}>How do I create an ad on the site?</h5>
            <div className={classes.iconv2}></div>
          </div>
          <div className={classes.q5}>
            <h5 className={classes.white}>How can I contact the seller or buyer?</h5>
            <div className={classes.iconv2}></div>
          </div>
          <div className={classes.q6}>
            <h5 className={classes.white}>How long will my ad be visible on the site?</h5>
            <div className={classes.iconv2}></div>
          </div>
        </div>
      </section>
      <footer className={classes.footer} id="contact">
        <p className={classes.white}>web9ja</p>
        <p className={classes.white}>Group4 - Julio's class</p>
        <p className={classes.white}>2023</p>
      </footer>
    </div>
  );
};

export default LandingPage;
