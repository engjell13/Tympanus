import { data } from "./data";
import { Header } from "./component/header";
import { Form } from "./component/from";
import { List } from "./component/list";
import { Special } from "./component/special";
import { Ad } from "./component/ad";
import { CTA } from "./component/cta";

const Layout = (): JSX.Element => {
  const { header, ad, cta, form, list, mainList, special } = data;
  return (
    <>
      <div className="container mx-auto mb-20">
        <Header {...header} />
        <div className="grid grid-cols-3 gap-5">
          <div className="flex flex-col gap-5">
            <Form {...form} />
            <List {...list} />
          </div>
          <div className="flex flex-col">
            <List classNames="border-none  py-0" {...mainList} />
          </div>
          <div className="ml-32 flex flex-col">
            <Special {...special} />
            <CTA cta={[...cta]} />
            <Ad {...ad} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
