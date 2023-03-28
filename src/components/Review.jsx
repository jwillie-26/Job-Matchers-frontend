import React from "react";

function Review() {
  return (
    <>
      <section class="bg-white">
        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div class="mx-auto max-w-xl text-center">
            <h2 class="text-xl font-bold tracking-tight sm:text-xl">
              Read trusted reviews from our customers
            </h2>

            <p class="text-sm mx-auto mt-4 max-w-lg text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          <div class="mt-16 flex gap-8 justify-center sm:grid-cols-2 sm:gap-16 lg:grid-cols-3">
            <div className="w-52">
              <img
                alt="Woman"
                src="https://images.unsplash.com/photo-1599566219227-2efe0c9b7f5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                class="mx-auto h-24 w-24 rounded-full object-cover shadow-xl"
              />

              <blockquote class="-mt-6 flex flex-col justify-between rounded-lg p-8 text-center shadow-xl">
                <p class="text-base font-bold text-gray-700">Sophie Lennon</p>
                <p class="mt-1 text-xs font-medium text-gray-500">
                  Digital Marketing
                </p>
                <p class="mt-4 text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </blockquote>
            </div>
            <div className="w-52">
              <img
                alt="Woman"
                src="https://images.unsplash.com/photo-1599566219227-2efe0c9b7f5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                class="mx-auto h-24 w-24 rounded-full object-cover shadow-xl"
              />

              <blockquote class="-mt-6 flex flex-col justify-between rounded-lg p-8 text-center shadow-xl">
                <p class="text-base font-bold text-gray-700">Sophie Lennon</p>
                <p class="mt-1 text-xs font-medium text-gray-500">
                  Digital Marketing
                </p>
                <p class="mt-4 text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </blockquote>
            </div>
            <div className="w-52">
              <img
                alt="Woman"
                src="https://images.unsplash.com/photo-1599566219227-2efe0c9b7f5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                class="mx-auto h-24 w-24 rounded-full object-cover shadow-xl"
              />

              <blockquote class="-mt-6 flex flex-col justify-between rounded-lg p-8 text-center shadow-xl">
                <p class="text-base font-bold text-gray-700">Sophie Lennon</p>
                <p class="mt-1 text-xs font-medium text-gray-500">
                  Digital Marketing
                </p>
                <p class="mt-4 text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Review;
