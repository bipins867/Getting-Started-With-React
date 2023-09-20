
export default (props) => {
  const classes = props.className;
  
  return <div id={props.id} className={classes}>{props.children}</div>;
};

