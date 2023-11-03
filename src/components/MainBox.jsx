import classes from './MainBox.module.css'
function MainBox({ children }) {
  return <main className={classes.main}>{children}</main>;
}

export default MainBox;
