import classes from './Logo.module.css'
function Logo() {
    return ( 
        <div className={classes.logo}>
        <span role="img">🍿</span>
        <h1>IMDB</h1>
      </div>
     );
}

export default Logo;