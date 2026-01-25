import { Dog } from "../type";
import { Dispatch, SetStateAction } from "react";
import {X, Heart} from "lucide-react"

export function ShortList( {dogs, liked, setliked}: {dogs:Dog[]; liked: Dog["id"][]; setliked: Dispatch<SetStateAction<Dog["id"][]>>;}) {
     return(
        <div>
          <div>
            <h2 className="flex items-center gap-2 font-medium">
              <span>Your shortlist</span
              >
              <Heart className ="inline-block size-6 fill-pink-500 stroke-pink-500" />
            </h2>
            <ul className="mt-4 flex flex-wrap gap-4">
              {dogs.filter(dog => liked.includes(dog.id)).map(dog => (
              <li key={dog.id}
                className="relative flex items-center overflow-clip rounded-md bg-white shadow-sm ring ring-black/5 transition duration-100 starting:scale-0 starting:opacity-0"
              >
                <img
                  height="32"
                  width="32"
                  alt={dog.name}
                  className="aspect-square w-8 object-cover"
                  src={dog.image}
                />
                <p className="px-3 text-sm text-slate-800">{dog.name}</p>
                <button
                  className="group h-full border-l border-slate-100 px-2 hover:bg-slate-100" onClick={() => setliked(liked.filter((id) => id !== dog.id))}
                >
                  <X className = "size-4 stroke-slate-400 group-hover:stroke-red-400" />
                </button>
              </li>
                
              ))}
            </ul>
          </div>
        </div>
     );
}