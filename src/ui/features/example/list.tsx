import { IUseExample } from "../../../presentation/use-example";
import { usePresentationContext } from "../../../presentation/use-presentation-context";
import style from "./style.module.css";

function ExampleList() {
  const { state } = usePresentationContext<IUseExample>();

  return (
    <div className={style.list}>
      {state.kind === "loading" &&
        new Array(10).fill(
          <div className={style.itemSkeleton} />
        )}
      {state.kind === "success" &&
        state.data.map((item, index) => (
          <div key={index} className={style.item}>
            {item.name}
          </div>
        ))}
    </div>
  );
}

export default ExampleList;
