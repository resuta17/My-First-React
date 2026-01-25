import { Dispatch, SetStateAction } from "react";
import { Dog } from "../type";
import { LikeToggle } from "./LikeToggle";

// indirect
type PuppiesListProps = { 
  dogs: Dog[];
  liked: Dog["id"][];
  setliked: Dispatch<SetStateAction< Dog["id"][]>>; //or setliked: (liked: number[]) => void;
};

export function PuppiesList({ dogs, liked, setliked }: PuppiesListProps) {
  return (
    <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {dogs.map((dog) => (
        <DogCard key={dog.id} dog={dog} liked={liked} setliked={setliked} />
      ))}
    </ul>
  );
}
type dogCardProps = {
  dog: Dog;
  liked: Dog["id"][];
  setliked: Dispatch<SetStateAction<Dog["id"][]>>;
}

// direct
function DogCard({ dog, liked, setliked }:  dogCardProps) {
  return (
    <li className="overflow-clip rounded-lg bg-white shadow-md ring ring-black/5 hover:-translate-y-0.5">
      <img
        className="aspect-square object-cover"
        alt={dog.name}
        src={dog.image}
      />

      <div className="flex items-center justify-between gap p-4 text-sm">
        <div className="flex items-center gap-2">
          <p className="font-semibold">{dog.name}</p>
          <span className="text-slate-300">·</span>
          <p className="text-slate-500">{dog.description}</p>
        </div>
        <LikeToggle id={dog.id} liked={liked} setliked = {setliked} />
      </div>
    </li>
  );
}
