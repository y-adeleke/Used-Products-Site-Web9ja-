import classes from "./navBar.module.css";

const navBar = 
() =>{
    return(
<div className={classes.MainHeading}>
        <div className={classes.LeftSide}>
            <h4>contact@Web9ja.ca</h4>
        </div>

        <div className={classes.MiddlePart}>
            <h3>WEB9JA</h3>
        </div>

        <div className={classes.RightSide}>
            
            <div className={classes.GetButton}>Get Started</div>
            <div className={classes.SignButton}>
                Sign in</div>
        </div>
    </div>
    );
    

}
export default navBar;
