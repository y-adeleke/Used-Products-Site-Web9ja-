import classes from "./SideNav.module.css";
import UIContext from "../../store/ui-context";
import { useContext } from "react";
import CloseIcon from "@mui/icons-material/Close";
import AdsContext from "../../store/ads-context";

const SideNav = () => {
  const uiContext = useContext(UIContext);
  const adsContext = useContext(AdsContext);

  const closeFilter = (e) => {
    e.stopPropagation();
    uiContext.setSideNav(false);
  };

  return (
    <nav
      className={classes.sideNav}
      onClick={() => {
        uiContext.setSideNav(false);
      }}>
      <div
        className={classes.mainNavCon}
        onClick={(e) => {
          e.stopPropagation();
        }}>
        <h3>Filter</h3>
        <CloseIcon className={classes.closeIcon} onClick={closeFilter} />

        <div className={classes.filterCon}>
          <label>Category</label>
          <div className={classes.options}>
            <button
              onClick={() => {
                adsContext.setFilterAdChoice("category", "all");
              }}
              className={`${adsContext.filterAdChoice.category === "all" ? classes.selected : ""}`}>
              All
            </button>
            <button
              onClick={() => {
                adsContext.setFilterAdChoice("category", "electronics");
              }}
              className={`${adsContext.filterAdChoice.category === "electronics" ? classes.selected : ""}`}>
              Electronics
            </button>
            <button
              onClick={() => {
                adsContext.setFilterAdChoice("category", "furniture");
              }}
              className={`${adsContext.filterAdChoice.category === "furniture" ? classes.selected : ""}`}>
              Furniture
            </button>
            <button
              onClick={() => {
                adsContext.setFilterAdChoice("category", "clothing");
              }}
              className={`${adsContext.filterAdChoice.category === "clothing" ? classes.selected : ""}`}>
              Clothing
            </button>
            <button
              onClick={() => {
                adsContext.setFilterAdChoice("category", "beauty");
              }}
              className={`${adsContext.filterAdChoice.category === "beauty" ? classes.selected : ""}`}>
              Beauty
            </button>
            <button
              onClick={() => {
                adsContext.setFilterAdChoice("category", "sports");
              }}
              className={`${adsContext.filterAdChoice.category === "sports" ? classes.selected : ""}`}>
              Sports
            </button>
            <button
              onClick={() => {
                adsContext.setFilterAdChoice("category", "other");
              }}
              className={`${adsContext.filterAdChoice.category === "other" ? classes.selected : ""}`}>
              Other
            </button>
          </div>
        </div>

        <div className={classes.filterCon}>
          <label>Condition</label>
          <div className={classes.options}>
            <button
              onClick={() => {
                adsContext.setFilterAdChoice("condition", "all");
              }}
              className={`${adsContext.filterAdChoice.condition === "all" ? classes.selected : ""}`}>
              All
            </button>
            <button
              onClick={() => {
                adsContext.setFilterAdChoice("condition", "new");
              }}
              className={`${adsContext.filterAdChoice.condition === "new" ? classes.selected : ""}`}>
              New
            </button>
            <button
              onClick={() => {
                adsContext.setFilterAdChoice("condition", "used");
              }}
              className={`${adsContext.filterAdChoice.condition === "used" ? classes.selected : ""}`}>
              Used
            </button>
            <button
              onClick={() => {
                adsContext.setFilterAdChoice("condition", "fair");
              }}
              className={`${adsContext.filterAdChoice.condition === "fair" ? classes.selected : ""}`}>
              Fair
            </button>
          </div>
        </div>

        <div className={classes.filterCon}>
          <label>Status</label>
          <div className={classes.options}>
            <button
              onClick={() => {
                adsContext.setFilterAdChoice("status", "all");
              }}
              className={`${adsContext.filterAdChoice.status === "all" ? classes.selected : ""}`}>
              All
            </button>
            <button
              onClick={() => {
                adsContext.setFilterAdChoice("status", true);
              }}
              className={`${adsContext.filterAdChoice.status === true ? classes.selected : ""}`}>
              Active
            </button>
            <button
              onClick={() => {
                adsContext.setFilterAdChoice("status", false);
              }}
              className={`${!adsContext.filterAdChoice.status ? classes.selected : ""}`}>
              Disabled
            </button>
          </div>
        </div>
      </div>

      {/* Amount range */}
    </nav>
  );
};
export default SideNav;
