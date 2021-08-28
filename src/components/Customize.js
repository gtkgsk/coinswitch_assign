import React, { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import Currency from "./Currency";
import classes from "./Customize.module.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Link } from "react-router-dom";

const Customize = () => {
  const assets = useSelector((state) => state.assets);
  const dispatch = useDispatch();
  useEffect(() => {
    if (assets.length === 0) {
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
          dispatch({ type: "FETCH_DATA", data: data });
        })
        .catch((error) => {
            alert("Request API failed.please try again");
        });
    }
  }, []);
  return (
    <React.Fragment>
      <div className={classes.header}>
        <Link to="/">
          <ArrowBackIcon style={{ color: "white" }} />
        </Link>
        <div className={classes.heading}>Customize Watchlist</div>
      </div>
      <div className={classes.items}>
        {assets.length === 0 && <div className={classes.message}>Loading..........</div>}
        {assets &&
          assets.map((asset) => {
            return (
              <Currency
                key={asset["data"]["id"]}
                id={asset["data"]["id"]}
                name={asset["data"]["name"]}
                image={asset["data"]["image"]}
                show={asset["show_option"]}
              />
            );
          })}
      </div>
    </React.Fragment>
  );
};

export default Customize;
