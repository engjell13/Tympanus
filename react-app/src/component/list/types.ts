export type CardProps = {
  title: string;
  date: string;
  image: string;
  desc?: string;
  cta?: string;
};

export type ListProps = {
  title?: string;
  cards: CardProps[];
  classNames?: string;
};
