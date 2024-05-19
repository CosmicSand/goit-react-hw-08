import { LineWave } from "react-loader-spinner";
import css from "./Loader.module.css";

function Loader() {
  return (
    <div className={css.loader}>
      <LineWave
        visible={true}
        height="50"
        width="50"
        color="wheat"
        ariaLabel="line-wave-loading"
        wrapperStyle={{}}
        wrapperClass=""
        firstLineColor=""
        middleLineColor=""
        lastLineColor=""
      />
    </div>
  );
}

export default Loader;
