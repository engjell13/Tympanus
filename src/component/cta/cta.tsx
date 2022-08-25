import { CalltoActionProps, CtaProps } from "./types";
import classnames from "classnames";

const baseClass = "ty-cta";

const CTA = ({ cta, classNames, ...rest }: CtaProps): JSX.Element => {
  return (
    <div
      className={classnames(
        baseClass,
        classNames,
        "flex mb-10 flex-wrap ml-3 gap-5"
      )}
      {...rest}
    >
      {cta.map(({ image, url }: CalltoActionProps, index: number) => {
        return (
          <div key={index}>
            <a href={url}>
              <img src={image} alt="cta" />
            </a>
          </div>
        );
      })}
    </div>
  );
};
export { CTA };
