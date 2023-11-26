/*import { callbackify } from "util";*/
import classes from "./AdDisplay.module.css";

const AdFullDisplay = () => {
  return (
    /* <div className={classes["ad-full-display"]}>
      <div className={classes["ad-full-display__container"]}>
        <div className={classes["ad-full-display__container__header"]}>
          <h3>Ad Full Display</h3>
        </div>
        dkuhwdw
      </div>
    </div> */

    <div className={classes.full_display}>

      <div className={classes.Leftdisplay}>
        <div className={ classes.slidershow} >
          <div className={classes.productimg}></div>
          <div className={classes.track}>
            <div className={classes.trackfilled}></div> 
            <div className={classes.trackdefault}></div>
            <div className={classes.trackdefault}></div>
          </div>
        </div>
        <div className={classes.firstlevel}>
          <div className={classes.toppart}>
              <div className={classes.nameandprice}>
                <h3>Nike Shoes</h3>
                <h4>$59.99</h4>
              </div>
              <div className={classes.Timeleft}>
                <div className={classes.clockicon}>clock</div>
                2days Left
              </div>
          </div>
          <div className={classes.description}>
          Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate lib ero et velit interdum, ac aliquet odio mattis. Class taciti socios qu ad litora torquent per conubia nostra, per inceptos himenaeos.
          </div>
          <div className={classes.otherinfo}>
            <div className={classes.info}>
              <h5> Condinition </h5>
              <h6>Brand new</h6>
            </div>
            <div className={classes.info}>
              <h5> Location </h5>
              <h6>38 stratosphere, Earth, 3rd Planet to the sun, Solar system</h6>
            </div>
            <div className={classes.info}>
              <h5> Category </h5>
              <h6>Clothing</h6>
            </div>
          </div>
          <div className={classes.SecCTA}>
            Contact Seller
          </div>
        </div>

      </div>

      <div className={classes.Rightdisplay}>
        <div className={classes.commentdisplay}>
          <div className={classes.topscroll}>
            <div className={classes.sellerdp}></div>
            <h3> Seller </h3>
          </div>
          <div className={classes.bottomscroll}>
              <div className={classes.commentv1}>

              </div>
              <div className={classes.commentv2}>
                <div className={classes.profimg}></div>
                <div className={classes.text}>
                    <h2>
                      Customer
                    </h2>
                    <h4>
                      I saw this a while ago and i’m very interested in getting to know more about this item, are you available to discuss more specifications.
                    </h4>
                </div>
              </div>
              <div className={classes.commentv2}>
                <div className={classes.profimg}></div>
                <div className={classes.text}>
                    <h2>
                      Customer
                    </h2>
                    <h4>
                      I saw this a while ago and i’m very interested in getting to know more about this item, are you available to discuss more specifications.
                    </h4>
                </div>
              </div>
              <div className={classes.commentv2}>
                <div className={classes.profimg}></div>
                <div className={classes.text}>
                    <h2>
                      Customer
                    </h2>
                    <h4>
                      I saw this a while ago and i’m very interested in getting to know more about this item, are you available to discuss more specifications.
                    </h4>
                </div>
              </div>
              <div className={classes.commentv2}>
                <div className={classes.profimg}></div>
                <div className={classes.text}>
                    <h2>
                      Customer
                    </h2>
                    <h4>
                      I saw this a while ago and i’m very interested in getting to know more about this item, are you available to discuss more specifications.
                    </h4>
                </div>
              </div>
              <div className={classes.commentv2}>
                <div className={classes.profimg}></div>
                <div className={classes.text}>
                    <h2>
                      Customer
                    </h2>
                    <h4>
                      I saw this a while ago and i’m very interested in getting to know more about this item, are you available to discuss more specifications.
                    </h4>
                </div>
              </div>
              <div className={classes.commentv2}>
                <div className={classes.profimg}></div>
                <div className={classes.text}>
                    <h2>
                      Customer
                    </h2>
                    <h4>
                      I saw this a while ago and i’m very interested in getting to know more about this item, are you available to discuss more specifications.
                    </h4>
                </div>
              </div>
               <div className={classes.commentv2}>
                <div className={classes.profimg}></div>
                <div className={classes.text}>
                    <h2>
                      Customer
                    </h2>
                    <h4>
                      I saw this a while ago and i’m very interested in getting to know more about this item, are you available to discuss more specifications.
                    </h4>
                </div>
              </div>
              
          </div>
        </div>
        <div className={classes.commentbox}>
          <div className={classes.emoji}></div>
          <div className={classes.addcomment}>
            Add comment
            <div className={classes.Sendcta}></div>
          </div>
        </div>
      </div>

    </div>
  );
};
export default AdFullDisplay;
