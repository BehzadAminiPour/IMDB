import classes from "./Error.module.css";
function Error({ message }) {
  return <p className={classes.error}>{message}</p>;
}

export default Error;
