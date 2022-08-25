import { HeaderProps } from "./types";
import classnames from "classnames";

const baseClass = "ty-header";

const Header = ({
  logo,
  navbar,
  search,
  classNames,
  ...rest
}: HeaderProps): JSX.Element => {
  return (
    <header
      data-comp="CO1"
      className={classnames(
        baseClass,
        classNames,
        " flex justify-between items-center py-8 mb-20"
      )}
      {...rest}
    >
      <a href="#">
        <img src={logo} alt="Logo tympanus" />
      </a>
      <nav>
        <ul className="flex gap-6">
          {navbar.map(({ text, url }: { text: string; url: string }, index) => {
            return (
              <li key={index}>
                {" "}
                <a href={url}>{text}</a>
              </li>
            );
          })}
        </ul>
      </nav>
      <a href="#" className="w-6">
        <img src={search} alt="Search" />
      </a>
    </header>
  );
};

export { Header };
