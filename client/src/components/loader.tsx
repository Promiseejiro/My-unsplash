import Header from "./header";

interface progressValue {
  percent: string;
  previewTeXt: String;
}

function Loader({ percent, previewTeXt }: progressValue) {
  return (
    <div>
      <Header title={`${previewTeXt}`}></Header>
      <progress max="100" value={percent}></progress>
    </div>
  );
}
export default Loader;
