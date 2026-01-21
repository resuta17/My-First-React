import './App.css'
import { Header } from './Components/Header';


function App() {

  return (
    <>    
    <PageWrapper>
       <Container> 
         <Header />
          <div class="mt-24 grid gap-8 sm:grid-cols-2">
  
           {/* Search */}
          <div>
            <label for="search" class="font-medium">
              Search for a character trait
            </label>
            <div class="mt-2 flex items-center gap-4">
              <input
                placeholder="playful..."
                name="search"
                id="search"
                type="text"
                class="w-full max-w-80 bg-white px-4 py-2 ring ring-black/5 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
              />
              <button
                class="inline-block rounded bg-cyan-300 px-4 py-2 !pr-3 !pl-2.5 font-medium text-cyan-900 hover:bg-cyan-200 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
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
                  class="lucide lucide-delete"
                >
                  <path
                    d="M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z"
                  ></path>
                  <path d="m12 9 6 6"></path>
                  <path d="m18 9-6 6"></path>
                </svg>
              </button>
            </div>
          </div>
          
           {/* Shortlist */} 
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

      </div>
      
      { /* list */}
      <ul class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <li
            class="overflow-clip rounded-lg bg-white shadow-md ring ring-black/5 hover:-translate-y-0.5"
          >
            <img
              class="aspect-square object-cover"
              alt="Frisket"
              src="src/assets/images/1.jpg"
            />
            <div class="gap flex items-center justify-between p-4 text-sm">
              <div class="flex items-center gap-2">
                <p class="font-semibold">Frisket</p>
                <span class="text-slate-300">·</span>
                <p class="text-slate-500">Mother of all pups</p>
              </div>
              <button class="group">
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
                  class="lucide lucide-heart stroke-slate-200 group-hover:stroke-slate-300"
                >
                  <path
                    d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                  ></path>
                </svg>
              </button>
            </div>
          </li>
          <li
            class="overflow-clip rounded-lg bg-white shadow-md ring ring-black/5 hover:-translate-y-0.5"
          >
            <img
              class="aspect-square object-cover"
              alt="Chase"
              src="src/assets/images/2.jpg"
            />
            <div class="gap flex items-center justify-between p-4 text-sm">
              <div class="flex items-center gap-2">
                <p class="font-semibold">Chase</p>
                <span class="text-slate-300">·</span>
                <p class="text-slate-500">Very good boi</p>
              </div>
              <button class="group">
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
                  class="lucide lucide-heart fill-pink-500 stroke-none"
                >
                  <path
                    d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                  ></path>
                </svg>
              </button>
            </div>
          </li>
          <li
            class="overflow-clip rounded-lg bg-white shadow-md ring ring-black/5 hover:-translate-y-0.5"
          >
            <img
              class="aspect-square object-cover"
              alt="Leia"
              src="src/assets/images/3.jpg"
            />
            <div class="gap flex items-center justify-between p-4 text-sm">
              <div class="flex items-center gap-2">
                <p class="font-semibold">Leia</p>
                <span class="text-slate-300">·</span>
                <p class="text-slate-500">Enjoys naps</p>
              </div>
              <button class="group">
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
                  class="lucide lucide-heart fill-pink-500 stroke-none"
                >
                  <path
                    d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                  ></path>
                </svg>
              </button>
            </div>
          </li>
          <li
            class="overflow-clip rounded-lg bg-white shadow-md ring ring-black/5 hover:-translate-y-0.5"
          >
            <img
              class="aspect-square object-cover"
              alt="Pupi"
              src="src/assets/images/4.jpg"
            />
            <div class="gap flex items-center justify-between p-4 text-sm">
              <div class="flex items-center gap-2">
                <p class="font-semibold">Pupi</p>
                <span class="text-slate-300">·</span>
                <p class="text-slate-500">Loves cheese</p>
              </div>
              <button class="group">
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
                  class="lucide lucide-heart stroke-slate-200 group-hover:stroke-slate-300"
                >
                  <path
                    d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                  ></path>
                </svg>
              </button>
            </div>
          </li>
          <li
            class="overflow-clip rounded-lg bg-white shadow-md ring ring-black/5 hover:-translate-y-0.5"
          >
            <img
              class="aspect-square object-cover"
              alt="Russ"
              src="src/assets/images/5.jpg"
            />
            <div class="gap flex items-center justify-between p-4 text-sm">
              <div class="flex items-center gap-2">
                <p class="font-semibold">Russ</p>
                <span class="text-slate-300">·</span>
                <p class="text-slate-500">Ready to save the world</p>
              </div>
              <button class="group">
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
                  class="lucide lucide-heart stroke-slate-200 group-hover:stroke-slate-300"
                >
                  <path
                    d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                  ></path>
                </svg>
              </button>
            </div>
          </li>
          <li
            class="overflow-clip rounded-lg bg-white shadow-md ring ring-black/5 hover:-translate-y-0.5"
          >
            <img
              class="aspect-square object-cover"
              alt="Yoko"
              src="src/assets/images/6.jpg"
            />
            <div class="gap flex items-center justify-between p-4 text-sm">
              <div class="flex items-center gap-2">
                <p class="font-semibold">Yoko</p>
                <span class="text-slate-300">·</span>
                <p class="text-slate-500">Ready for anything</p>
              </div>
              <button class="group">
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
                  class="lucide lucide-heart stroke-slate-200 group-hover:stroke-slate-300"
                >
                  <path
                    d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                  ></path>
                </svg>
              </button>
            </div>
          </li>
        </ul>


        {/*  New Puppy form  */}
        <div
          class="mt-12 flex items-center justify-between bg-white p-8 shadow ring ring-black/5"
        >
          <form class="mt-4 flex w-full flex-col items-start gap-4">
            <div class="grid w-full gap-6 md:grid-cols-3">
              <fieldset class="flex w-full flex-col gap-1">
                <label for="name">Name</label
                ><input
                  class="max-w-96 rounded-sm bg-white px-2 py-1 ring ring-black/20 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                  id="name"
                  type="text"
                  name="name"
                />
              </fieldset>
              <fieldset class="flex w-full flex-col gap-1">
                <label for="trait">Personality trait</label
                ><input
                  class="max-w-96 rounded-sm bg-white px-2 py-1 ring ring-black/20 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                  id="trait"
                  type="text"
                  name="trait"
                />
              </fieldset>
              <fieldset
                disabled
                class="col-span-2 flex w-full cursor-not-allowed flex-col gap-1 opacity-50"
              >
                <label for="avatar_url">Profile pic</label
                ><input
                  class="max-w-96 rounded-sm bg-white px-2 py-1 ring ring-black/20 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                  id="avatar_url"
                  type="file"
                  name="avatar_url"
                />
              </fieldset>
            </div>
            <button
              class="mt-4 inline-block rounded bg-cyan-300 px-4 py-2 font-medium text-cyan-900 hover:bg-cyan-200 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
              type="submit"
            >
              Add puppy
            </button>
          </form>
        </div>

      </Container>
    </PageWrapper>  
    </>
  )
}

function PageWrapper( {children}) {
  return (
         <main class="min-h-dvh bg-gradient-to-b from-cyan-200 to-white to-[60vh]"> 
          {children}
         </main>
  );
}

function Container( { children } ) {
  return (
    <div className="mx-auto max-w-5xl p-4 md:p-8"> 
      { children }
    </div>
  );
}


export default App
