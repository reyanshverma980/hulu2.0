import { HandThumbUpIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { forwardRef } from "react";

const Thumbnail = forwardRef((props, ref) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div
      ref={ref}
      className="group cursor-pointer p-2 transition ease-in transform sm:hover:scale-105 hover:z-50"
    >
      <Image
        layout="responsive"
        src={
          `${BASE_URL}${
            props.result.backdrop_path || props.result.poster_path
          }` || `${BASE_URL}${props.result.poster_path}`
        }
        height={1080}
        width={1920}
        alt="movie"
      />
      <div className="p-2 ">
        <p className=" truncate">{props.result.overview}</p>
        <h2 className=" mt-1 text-white text-2xl transition-all duration-100 ease-in-out group-hover:font-semibold">
          {props.result.title || props.result.original_name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {props.result.release_date || props.result.first_air_date} ·{" "}
          <HandThumbUpIcon className="h-5 mx-2" />
          {props.result.vote_count}
        </p>
      </div>
    </div>
  );
});

Thumbnail.displayName = "Thumbnail";

export default Thumbnail;
