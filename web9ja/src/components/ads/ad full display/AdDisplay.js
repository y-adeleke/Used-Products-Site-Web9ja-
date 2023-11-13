import classes from "./AdDisplay.module.css";

const AdFullDisplay = () => {
  return (
    <div className={classes["ad-full-display"]}>
      <div className={classes["ad-full-display__container"]}>
        <div className={classes["ad-full-display__container__header"]}>
          <h3>Ad Full Display</h3>
        </div>
      </div>
    </div>
  );
};
export default AdFullDisplay;
