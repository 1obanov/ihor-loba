/// <reference types="react-scripts" />

declare module "*.pdf" {
  const src: string;
  export default src;
}

declare module "*.scss" {
  const styles: { [className: string]: string };
  export default styles;
}
declare module "*.css" {
  const styles: { [className: string]: string };
  export default styles;
}
