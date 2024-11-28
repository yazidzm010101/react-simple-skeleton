import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useExample } from "../../../presentation/use-example";
import { PresentationProvider } from "../../../presentation/use-presentation-context";
import ExampleList from "./list";
import ExamplePagination from "./pagination";
import style from "./style.module.css";
import logo from "../../../assets/react.svg"

function ExamplePage() {
  const { state, handlers } = useExample();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const page = Number(searchParams.get("page") ?? "1");
    const init = setTimeout(() => handlers.getData({ page }), 500);
    return () => clearTimeout(init);
  }, [searchParams]);

  return (
    <div className={style.container}>
      <PresentationProvider value={{ state, handlers }}>
        <div className={style.logoWrapper}>
          <img src={logo} width={64} height={64} className={style.logo}/>
          <h1>Welcome to <br/> <span className={style.badge}>Simple React.ts Skeleton</span></h1>
        </div>
        <ExampleList />
        <ExamplePagination/>
      </PresentationProvider>
    </div>
  );
}

export default ExamplePage;
