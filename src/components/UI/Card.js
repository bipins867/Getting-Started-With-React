
export default (props) => {
  const classes = props.className;

  return <div className={classes}>{props.children}</div>;
};

