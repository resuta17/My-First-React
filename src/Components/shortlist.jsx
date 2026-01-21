export function ShortList() {
     return(
        <shortlist>
                      <div>
            <h2 class="flex items-center gap-2 font-medium">
              <span>Your shortlist</span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-heart inline-block size-6 fill-pink-500 stroke-pink-500"
              >
                <path
                  d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                ></path>
              </svg>
            </h2>
            <ul class="mt-4 flex flex-wrap gap-4">
              <li
                class="relative flex items-center overflow-clip rounded-md bg-white shadow-sm ring ring-black/5 transition duration-100 starting:scale-0 starting:opacity-0"
              >
                <img
                  height="32"
                  width="32"
                  alt="Chase"
                  class="aspect-square w-8 object-cover"
                  src="src/assets/images/2.jpg"
                />
                <p class="px-3 text-sm text-slate-800">Chase</p>
                <button
                  class="group h-full border-l border-slate-100 px-2 hover:bg-slate-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-x size-4 stroke-slate-400 group-hover:stroke-red-400"
                  >
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </button>
              </li>
              <li
                class="relative flex items-center overflow-clip rounded-md bg-white shadow-sm ring ring-black/5 transition duration-100 starting:scale-0 starting:opacity-0"
              >
                <img
                  height="32"
                  width="32"
                  alt="Leia"
                  class="aspect-square w-8 object-cover"
                  src="src/assets/images/3.jpg"
                />
                <p class="px-3 text-sm text-slate-800">Leia</p>
                <button
                  class="group h-full border-l border-slate-100 px-2 hover:bg-slate-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-x size-4 stroke-slate-400 group-hover:stroke-red-400"
                  >
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </shortlist>
     );
}