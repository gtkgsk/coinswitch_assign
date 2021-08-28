import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Asset from "./Asset";
import classes from "./Details.module.css";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const Details = () => {
  const assets = useSelector((state) => state.assets);
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  useEffect(() => {
    const interval = setInterval(() => {
      if (count > 0) {
        fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false",
          {
            method: "GET",
            headers: {},
            body: null,
          }
        )
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            dispatch({ type: "REFRESH_DATA", data: data });
          })
          .catch((error) => {
              
          });
      }
    }, 30000);
    return () => clearInterval(interval);
  }, [count]);

  return (
    <React.Fragment>
      <div className={classes.header}>
        <div className={classes.custom}>
          <Link className={classes.link} to="/customize">
            <Button size="small" style={{ color: "white" }}>
              Customize
            </Button>
          </Link>
        </div>
        <div className={classes.view}>
          <span className={classes.accounts}>Your Accounts</span>
          <span className={classes.nmbr}>$ 36,400</span>
        </div>
      </div>
      <div className={classes.items}>
        {count === 0 && (
          <div className={classes.message}>
            Please add currency to your tracker by pressing the Customise button
            above
          </div>
        )}
        {count > 0 &&
          assets.map((asset) => {
            return (
              asset["show_option"] && (
                <Asset
                  key={asset["data"]["id"]}
                  id={asset["data"]["id"]}
                  name={asset["data"]["name"]}
                  image={asset["data"]["image"]}
                  symbol={asset["data"]["symbol"]}
                  price={asset["data"]["current_price"]}
                  change={asset["data"]["price_change_percentage_24h"]}
                />
              )
            );
          })}
      </div>
    </React.Fragment>
  );
};

export default Details;
