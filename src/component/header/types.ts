type NavLink = {
  text: string;
  url: string;
};

export type HeaderProps = {
  logo: string;
  navbar: NavLink[];
  search: string;
  classNames?: string;
};
