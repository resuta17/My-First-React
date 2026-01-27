import { HeartIcon, LoaderCircle } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
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
  const [pending, setPending] = useState(false);
  return (
    <button
      className="group"
      onClick={() => { 
        setPending(true);
        setTimeout(()=> {
          if (liked.includes(id)) {
            setliked(liked.filter(pupId => pupId !== id));
          } else {
           setliked([...liked, id]);
          }
          setPending(false);
        }, 1500)
      }}
    >
      {pending ? 
      ( <LoaderCircle className="animate-spin stroke-slate-300" />) 
      : (
        <HeartIcon
          className={
            liked.includes(id)
              ? "fill-pink-500 stroke-none"
              : "stroke-slate-200 group-hover:stroke-slate-300"
          }
        />
      )}

    </button>
  );
}
