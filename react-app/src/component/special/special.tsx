import { SpecialTypes } from "./types";
import classnames from "classnames";

const baseClass = "ty-special";

const Special = ({
  image,
  text,
  classNames,
  ...rest
}: SpecialTypes): JSX.Element => {
  return (
    <a
      data-comp="C04"
      className={classnames(baseClass, classNames, "w-72 mb-10")}
      {...rest}
      href="#"
    >
      <img className="" src={image} alt="speical" />
      <div className="bg-black p-5">
        <p className="text-white text-sm">{text}</p>
      </div>
    </a>
  );
};

export { Special };
