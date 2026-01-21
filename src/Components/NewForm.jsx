export function NewForm() {
    return (
        <div>
            

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
        </div>
    );
}