import classes from "./AdDisplay.module.css";

const AdFullDisplay = () => {
  return (
    <section className={classes.full}>
      <div className={classes.adsfull}>
        <div className={classes.leftsection}>
          <div className={classes.top_leftsection}>
            <div className={classes.mainimg}></div>
            <div className={classes.imglist}>
              <div className={classes.fillerimg}></div>
              <div className={classes.fillerimg}></div>
              <div className={classes.fillerimg}></div>
              <div className={classes.fillerimg}></div>
              <div className={classes.fillerimg}></div>
            </div>
          </div>
          <div className={classes.mid_leftsection}>
            <div className={classes.mid_top}>
              <div className={classes.mid_top_left}>
                <h4 className={classes.black}>Nike Shoes</h4>
                <h6 className={classes.black}>$59.99</h6>
              </div>
              <div className={classes.timeleft}>
                <div className={classes.clockicon}></div>
                <h6 className={classes.black}>2 days</h6>
              </div>
            </div>
            <div className={classes.mid_mid}>
              <h6 className={classes.gray}>
                Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate lib ero et velit interdum, ac aliquet odio mattis. Class taciti socios qu ad litora torquent per conubia nostra,
                per inceptos himenaeos.
              </h6>
            </div>
            <div className={classes.mid_bottom}>
              <div className={classes.list}>
                <h5 className={classes.black}>Condition</h5>
                <h6 className={classes.gray}>Brand New</h6>
              </div>
              <div className={classes.list}>
                <h5 className={classes.black}>Location</h5>
                <h6 className={classes.gray}>38 stratosphere, Earth, 3rd Planet to the sun, Solar system</h6>
              </div>
              <div className={classes.list}>
                <h5 className={classes.black}>Category</h5>
                <h6 className={classes.gray}>Clothing</h6>
              </div>
            </div>
          </div>
          <div className={classes.bottom_leftsection}>
            <div className={classes.seccta}>Contact Seller</div>
          </div>
        </div>
        <div className={classes.rightsection}>
          <div className={classes.commentbox}>
            <div className={classes.heading}>
              <div className={classes.sellerdp}></div>
              <h5 className={classes.black}>Seller</h5>
            </div>
            <div className={classes.comments}>
              <div className={classes.commentv1}>
                <div className={classes.cusdp}></div>
                <div className={classes.cust}>
                  <h5>customer</h5>
                  <h6>I saw this a while ago and i’m very interested in getting to know more about this item, are you available to discuss more specifications</h6>
                </div>
              </div>
              <div className={classes.commentv2}>
                <div className={classes.cusdp}></div>
                <div className={classes.cust}>
                  <h5>customer</h5>
                  <h6>I saw this a while ago and i’m very interested in getting to know more about this item, are you available to discuss more specifications</h6>
                  <div className={classes.reply}>
                    <div className={classes.line}></div>
                    <h6 className={classes.gray}>View reply</h6>
                  </div>
                </div>
              </div>
              <div className={classes.commentv1}>
                <div className={classes.cusdp}></div>
                <div className={classes.cust}>
                  <h5>customer</h5>
                  <h6>I saw this a while ago and i’m very interested in getting to know more about this item, are you available to discuss more specifications</h6>
                </div>
              </div>
              <div className={classes.commentv1}>
                <div className={classes.cusdp}></div>
                <div className={classes.cust}>
                  <h5>customer</h5>
                  <h6>I saw this a while ago and i’m very interested in getting to know more about this item, are you available to discuss more specifications</h6>
                </div>
              </div>
              <div className={classes.commentv1}>
                <div className={classes.cusdp}></div>
                <div className={classes.cust}>
                  <h5>customer</h5>
                  <h6>I saw this a while ago and i’m very interested in getting to know more about this item, are you available to discuss more specifications</h6>
                </div>
              </div>
              <div className={classes.commentv1}>
                <div className={classes.cusdp}></div>
                <div className={classes.cust}>
                  <h5>customer</h5>
                  <h6>I saw this a while ago and i’m very interested in getting to know more about this item, are you available to discuss more specifications</h6>
                </div>
              </div>
              <div className={classes.commentv3}>
                <div className={classes.cusdp}></div>
                <div className={classes.cust}>
                  <h5>customer</h5>
                  <h6>I saw this a while ago and i’m very interested in getting to know more about this item, are you available to discuss more specifications</h6>
                  <div className={classes.reply}>
                    <div className={classes.line}></div>
                    <div className={classes.replyv2}>
                      <div className={classes.sellerdp}></div>
                      <h6 className={classes.gray}>Sure man, Inbox me so we can discuss further</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.commentv1}>
                <div className={classes.cusdp}></div>
                <div className={classes.cust}>
                  <h5>customer</h5>
                  <h6>I saw this a while ago and i’m very interested in getting to know more about this item, are you available to discuss more specifications</h6>
                </div>
              </div>
              <div className={classes.commentv3}>
                <div className={classes.cusdp}></div>
                <div className={classes.cust}>
                  <h5>customer</h5>
                  <h6>I saw this a while ago and i’m very interested in getting to know more about this item, are you available to discuss more specifications</h6>
                  <div className={classes.reply}>
                    <div className={classes.line}></div>
                    <div className={classes.replyv2}>
                      <div className={classes.sellerdp}></div>
                      <h6 className={classes.gray}>Sure man, Inbox me so we can discuss further</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.sendcomment}>
            <div className={classes.emoji}></div>
            <div className={classes.addcomment}>
              <h6 className={classes.black}>Ad comment</h6>
              <div className={classes.sendicon}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdFullDisplay;
