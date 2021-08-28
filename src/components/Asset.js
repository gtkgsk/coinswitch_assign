import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import React from "react";
import classes from "./Asset.module.css";
import Avatar from "@material-ui/core/Avatar";

const Asset = (props) => {
  return (
    <div className={classes.asset}>
      <div className={classes.image}>
        <Avatar size="small" src={props.image} />
        <div className={classes.name}>
          <div className={classes.coin}>{props.name}</div>
          <div className={classes.symbol}>{props.symbol}</div>
        </div>
      </div>
      <div className={classes.price}>
        <div>{`$${Math.round(props.price * 10) / 1000}`}</div>
        {props.change >= 0 && (
          <div className={classes.up}>
            <ArrowDropUpIcon style={{ color: "green" }} />
            {Math.round(props.change * 10) / 10}
          </div>
        )}
        {props.change < 0 && (
          <div className={classes.down}>
            <ArrowDropDownIcon style={{ color: "red" }} />
            {Math.round(props.change * 10) / 10}
          </div>
        )}
      </div>
    </div>
  );
};

export default React.memo(Asset);
