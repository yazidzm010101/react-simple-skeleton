import { useSearchParams } from "react-router-dom";
import { IUseExample } from "../../../presentation/use-example";
import { usePresentationContext } from "../../../presentation/use-presentation-context";
import { useMemo } from "react";
import style from "./style.module.css";

function ExamplePagination() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { state } = usePresentationContext<IUseExample>();
  const page = state.page;
  const totalPages = Math.ceil(state.count / 10);

  const pages = useMemo(() => {
    const pages = [];
    const min = Math.max(1, page - 2);
    const max = Math.min(totalPages, page + 2);
    for (let i = min; i <= max; i++) {
      pages.push(i);
    }
    return pages;
  }, [totalPages, page, state.kind]);

  const isHasPrev = useMemo(() => {
    return state.kind == "success" && !!pages[0] && pages[0] > 1;
  }, [pages, totalPages, state.kind]);

  const isHasPrevs = useMemo(() => {
    return state.kind == "success" && !!pages[0] && pages[0] > 2;
  }, [pages, state.kind]);

  const isHasNext = useMemo(() => {
    return state.kind == "success" && pages[pages.length - 1] < totalPages;
  }, [pages, state.kind]);

  const isHasNexts = useMemo(() => {
    return state.kind == "success" && totalPages - pages[pages.length - 1] > 1;
  }, [pages, totalPages, state.kind]);

  const onChangePage = (page: number) => {
    searchParams.set("page", String(page));
    setSearchParams(searchParams);
  };

  return (
    <>
      <ul className={style.pagination}>
        <li
          className={
            !isHasPrevs || state.kind == "loading" ? style.disabled : ""
          }
          onClick={() => isHasPrevs && onChangePage(Math.max(1, page - 10))}
        >
          &lt;&lt;
        </li>
        <li
          className={
            !isHasPrev || state.kind == "loading" ? style.disabled : ""
          }
          onClick={() => isHasPrev && onChangePage(page - 1)}
        >
          &lt;
        </li>
        {pages?.map((page, index) => (
          <li
            className={[
              state.kind == "loading" ? style.disabled : "",
              page == state.page ? style.active : "",
              style.number,
            ].join(" ")}
            key={index}
            onClick={() => onChangePage(page)}
          >
            {page}
          </li>
        ))}
        <li
          className={
            !isHasNext || state.kind == "loading" ? style.disabled : ""
          }
          onClick={() => isHasNext && onChangePage(page + 1)}
        >
          &gt;
        </li>
        <li
          className={
            !isHasNexts || state.kind == "loading" ? style.disabled : ""
          }
          onClick={() =>
            isHasNexts && onChangePage(Math.min(totalPages, page + 10))
          }
        >
          &gt;&gt;
        </li>
      </ul>
      {state.kind == "success" && (
        <p className={style.counter}>
          Displaying {state.data.length} of {state.count} data{" "}
        </p>
      )}
    </>
  );
}

export default ExamplePagination;
