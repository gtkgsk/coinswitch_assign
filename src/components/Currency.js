import AntiSwitch from "../UI/AntiSwitch";
import classes from "./Currency.module.css";
import { useDispatch } from "react-redux";
import Avatar from "@material-ui/core/Avatar";

const Currency = (props) => {
  const dispatch = useDispatch();
  function handleChange(event) {
    if (event.target.checked) {
      dispatch({ type: "CUSTOMIZE_ON", data: event.target.id });
    } else {
      dispatch({ type: "CUSTOMIZE_OFF", data: event.target.id });
    }
  }
  return (
    <div className={classes.currency}>
      <div className={classes.icon}>
        <Avatar size="small" src={props.image} />
        <div className={classes.name}>{props.name}</div>
      </div>
      <AntiSwitch
        id={props.id}
        checked={props.show}
        value="checkedA"
        inputProps={{ "aria-label": "Switch A" }}
        onChange={handleChange}
      />
    </div>
  );
};

export default Currency;
