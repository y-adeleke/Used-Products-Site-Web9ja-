import classes from "./LandingPage.module.css";
import { Fragment } from "react";

const LandingPage = () => {
  return (
    <Fragment>
      <div className={classes.fullpage}>
        <section className={classes.section1} id="">
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
          <button className={classes.massivectav1}>
            <h4 className={classes.accent1}>Create your first Ad</h4>
            <div className={classes.icon}></div>
          </button>
          <div className={classes.bigimg}></div>
        </section>
        <section className={classes.section2}>
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
              <div className={classes.rightimg}></div>
            </div>
            <div className={classes.secondstep}>
              <div className={classes.leftimg}></div>
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
              <div className={classes.rightimg}></div>
            </div>
          </div>
        </section>
        <section className={classes.section3}>
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
        <section className={classes.section4}>
          <div className={classes.headtext}>
            <h1 className={classes.white}>Developed by</h1>
          </div>
          <div className={classes.cardlist}>
            <div className={classes.card}>
              <div className={classes.cardtop}>
                <div className={classes.developer}>
                  <div className={classes.devpic}></div>
                  <h5 className={classes.lightgray}>FEMI BRIGHT</h5>
                </div>
                <div className={classes.Devline}>
                  <h5 className={classes.gray}>So basically for my part I designed, prototyped and animated the UI. Also I coded out the design.</h5>
                </div>
              </div>
              <div className={classes.bottom}>
                <h5 className={classes.gray}>UI Designer</h5>
                <div className={classes.dot}></div>
                <h5 className={classes.gray}>Frontend Designer</h5>
              </div>
            </div>
            <div className={classes.card}>
              <div className={classes.cardtop}>
                <div className={classes.developer}>
                  <div className={classes.devpic}></div>
                  <h5 className={classes.lightgray}>FEMI BRIGHT</h5>
                </div>
                <div className={classes.Devline}>
                  <h5 className={classes.gray}>So basically for my part I designed, prototyped and animated the UI. Also I coded out the design.</h5>
                </div>
              </div>
              <div className={classes.bottom}>
                <h5 className={classes.gray}>UI Designer</h5>
                <div className={classes.dot}></div>
                <h5 className={classes.gray}>Frontend Designer</h5>
              </div>
            </div>
            <div className={classes.card}>
              <div className={classes.cardtop}>
                <div className={classes.developer}>
                  <div className={classes.devpic}></div>
                  <h5 className={classes.lightgray}>FEMI BRIGHT</h5>
                </div>
                <div className={classes.Devline}>
                  <h5 className={classes.gray}>So basically for my part I designed, prototyped and animated the UI. Also I coded out the design.</h5>
                </div>
              </div>
              <div className={classes.bottom}>
                <h5 className={classes.gray}>UI Designer</h5>
                <div className={classes.dot}></div>
                <h5 className={classes.gray}>Frontend Designer</h5>
              </div>
            </div>
            <div className={classes.card}>
              <div className={classes.cardtop}>
                <div className={classes.developer}>
                  <div className={classes.devpic}></div>
                  <h5 className={classes.lightgray}>FEMI BRIGHT</h5>
                </div>
                <div className={classes.Devline}>
                  <h5 className={classes.gray}>So basically for my part I designed, prototyped and animated the UI. Also I coded out the design.</h5>
                </div>
              </div>
              <div className={classes.bottom}>
                <h5 className={classes.gray}>UI Designer</h5>
                <div className={classes.dot}></div>
                <h5 className={classes.gray}>Frontend Designer</h5>
              </div>
            </div>
            <div className={classes.card}>
              <div className={classes.cardtop}>
                <div className={classes.developer}>
                  <div className={classes.devpic}></div>
                  <h5 className={classes.lightgray}>FEMI BRIGHT</h5>
                </div>
                <div className={classes.Devline}>
                  <h5 className={classes.gray}>So basically for my part I designed, prototyped and animated the UI. Also I coded out the design.</h5>
                </div>
              </div>
              <div className={classes.bottom}>
                <h5 className={classes.gray}>UI Designer</h5>
                <div className={classes.dot}></div>
                <h5 className={classes.gray}>Frontend Designer</h5>
              </div>
            </div>
            <div className={classes.card}>
              <div className={classes.cardtop}>
                <div className={classes.developer}>
                  <div className={classes.devpic}></div>
                  <h5 className={classes.lightgray}>FEMI BRIGHT</h5>
                </div>
                <div className={classes.Devline}>
                  <h5 className={classes.gray}>So basically for my part I designed, prototyped and animated the UI. Also I coded out the design.</h5>
                </div>
              </div>
              <div className={classes.bottom}>
                <h5 className={classes.gray}>UI Designer</h5>
                <div className={classes.dot}></div>
                <h5 className={classes.gray}>Frontend Designer</h5>
              </div>
            </div>
            <div className={classes.card}>
              <div className={classes.cardtop}>
                <div className={classes.developer}>
                  <div className={classes.devpic}></div>
                  <h5 className={classes.lightgray}>FEMI BRIGHT</h5>
                </div>
                <div className={classes.Devline}>
                  <h5 className={classes.gray}>So basically for my part I designed, prototyped and animated the UI. Also I coded out the design.</h5>
                </div>
              </div>
              <div className={classes.bottom}>
                <h5 className={classes.gray}>UI Designer</h5>
                <div className={classes.dot}></div>
                <h5 className={classes.gray}>Frontend Designer</h5>
              </div>
            </div>
          </div>
        </section>
        <footer className={classes.footer}>
          <h5 className={classes.white}>Contact@AY_REP for more info</h5>
          <h5 className={classes.white}>Group1 - Julio's class</h5>
          <h5 className={classes.white}>2023</h5>
        </footer>
      </div>
    </Fragment>
  );
};

export default LandingPage;
