import { AdProps } from "./types";
import classnames from "classnames";

const baseClass = "ty-ad";

const Ad = ({ image, url, classNames, ...rest }: AdProps): JSX.Element => {
  return (
    <a
      data-comp="C05"
      className={classnames(classNames, baseClass)}
      {...rest}
      href={url}
    >
      <img src={image} alt="ad" />
    </a>
  );
};

export { Ad };
