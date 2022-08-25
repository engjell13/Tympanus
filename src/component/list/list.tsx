import { CardProps, ListProps } from "./types";
import classnames from "classnames";

const baseClass = "ty-list";

const List = ({
  title,
  cards,
  classNames,
  ...rest
}: ListProps): JSX.Element => {
  return (
    <div
      data-comp="C03"
      className={classnames(
        baseClass,
        classNames,
        "flex flex-col gap-6 border-2 border-grey-100 p-8"
      )}
      {...rest}
    >
      {title && <h3 className="font-bold text-2xl">{title}</h3>}
      <ul className="flex flex-col gap-10">
        {cards.length &&
          cards.map(
            ({ image, cta, date, desc, title }: CardProps, index: number) => {
              return (
                <li key={index}>
                  <a href={cta} className="flex gap-2">
                    <img className="w-24" src={image} alt="test" />
                    <div className="flex flex-col">
                      <h4 className="text-lg font-bold">{title}</h4>
                      <span className="text-sm text-zinc-400">{date}</span>
                      <p className="mt-auto ">{desc}</p>
                    </div>
                  </a>
                </li>
              );
            }
          )}
      </ul>
    </div>
  );
};

export { List };
