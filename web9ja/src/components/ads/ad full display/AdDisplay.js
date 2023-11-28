/*import { callbackify } from "util";*/
import classes from "./AdDisplay.module.css";

const AdFullDisplay = () => {
  return (
   <section className={classes.full}>
       <nav className={classes.fullnav}>
      <div className={classes.leftnav}>
        <h5>
          Contactus@lorem@gmail.com
        </h5>
        <div className={classes.seerchbar}>
          <div className={classes.searchicon}></div>
          <h6 className={classes.gray}> Search for item or AD </h6>
        </div>
      </div>
      <div className={classes.midnav}>
        <h5 className={classes.black}>Web9JA</h5>
        <ul className={classes.links}>
          <li className={classes.Active}>
            <h6 className={classes.black}>
              Home
            </h6>
          </li>
          <li className={classes.Inactive}>
            <h6 className={classes.black}>
              Posted ADs
            </h6>
          </li>
        </ul>
      </div>
      <div className={classes.rightnav}>
        <div className={classes.righttop}>
          <div className={classes.lang}>
            <div className={classes.flag}></div>
            <h5>EN</h5>
          </div>
          <div className={classes.icons}>
            <div className={classes.icon}></div>
            <div className={classes.icon}></div>
          </div>
        </div>
        <button className={classes.prycta}>
          <h6 className={classes.white}>
            Create AD
          </h6>
        </button>
      </div>
    </nav>
    <div className={classes.adsfull}>
      <div className={classes.leftsection}>
        
      </div>
    </div>
   </section>
  );
};
export default AdFullDisplay;
