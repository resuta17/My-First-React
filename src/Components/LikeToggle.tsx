import { HeartIcon } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { Dog } from "../type"

export function LikeToggle({
  id,
  liked,
  setliked,
}: {
  id: Dog["id"];
  liked: Dog["id"][];
  setliked: Dispatch<SetStateAction< Dog['id'][]>>;
}) {
  return (
    <button
      className="group"
      onClick={() => {
        if (liked.includes(id)) {
          setliked(liked.filter(pupId => pupId !== id));
        } else {
          setliked([...liked, id]);
        }
      }}
    >
      <HeartIcon
        className={
          liked.includes(id)
            ? "fill-pink-500 stroke-none"
            : "stroke-slate-200 group-hover:stroke-slate-300"
        }
      />
    </button>
  );
}
