import classes from "./CssModules.module.scss";

export const CssModules = () => {
  return (
    <>
      <p className={classes.title}>CSS moodules입니다</p>
      <button className={classes.button}> 버튼</button>
    </>
  );
};
