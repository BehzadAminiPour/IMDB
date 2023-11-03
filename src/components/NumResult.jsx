import classes from './NumResult.module.css'
function NumResult({movies}) {
  return (
    <p className={classes['num-result']}>
      Found <strong>{movies.length}</strong> results
    </p>
  );
}

export default NumResult;
