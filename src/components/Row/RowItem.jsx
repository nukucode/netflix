import { Link } from "react-router-dom";

const base_url = "https://image.tmdb.org/t/p/original";

function RowItem({ isRepeat, data, type }) {
  return (
    <Link
      to={`/details/${type}/${data.id}`}
      key={data.id}
      className={isRepeat ? "watch" : "link"}
    >
      <img
        className={isRepeat ? "img-watch" : "imgPoster"}
        key={data.id}
        src={
          !isRepeat
            ? `${base_url}${data.poster_path}`
            : `${base_url}${data.backdrop_path}`
        }
        alt={data.title}
      />
    </Link>
  );
}

export default RowItem;
