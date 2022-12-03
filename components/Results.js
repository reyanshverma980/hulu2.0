import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";

const Results = (props) => {
  return (
    <FlipMove className="px-5 my-10 sm:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {props.results.map((result) => {
        return <Thumbnail key={result.id} result={result} />;
      })}
    </FlipMove>
  );
};

export default Results;
