const variablesStyles = '@import "./common/_vars.scss"';
const breakpointsStyles = '@import "./common/_breakpoints.scss"';
const mixinsStyles = '@import "./common/_mixins.scss"';
const resetStyles = '@import "./common/_reset.scss"';

const styles = [
  variablesStyles,
  breakpointsStyles,
  //   colorsStyles,
  mixinsStyles,
  //   baseStyles,
  resetStyles,
];

export const globalStylesOptions = styles.reduce((acc, i) => acc + i + ';', '');
