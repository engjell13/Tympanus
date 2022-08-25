import { FormProps } from "./types";
import classnames from "classnames";

const baseClass = "ty-form";

const Form = ({
  title,
  subtitle,
  input,
  cta,
  classNames,
  ...rest
}: FormProps): JSX.Element => {
  return (
    <div
      data-comp="C02"
      className={classnames(
        baseClass,
        classNames,
        "flex flex-col gap-5 bg-gray-100 p-10"
      )}
      {...rest}
    >
      <h3 className="text-2xl font-bold">{title}</h3>
      <p>{subtitle}</p>
      <input
        className="py-3
    px-3"
        type="email"
        placeholder="email address"
      />
      <button className="w-fit bg-black hover:bg-zinc-800 text-white font-bold py-1.5 px-5 ">
        Subscribe
      </button>
    </div>
  );
};

export { Form };
