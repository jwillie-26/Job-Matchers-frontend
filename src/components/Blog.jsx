import React from "react";


function Blog() {
 
  return (
    <div class="bg-slate-50">
      <h2 className="font-semibold flex justify-center mb-4">Latest News</h2>
      <p className="flex justify-center font-normal text-sm text-gray-500 mb-6 ">
        Keep everything update, from entrepreneur from all around the world.
      </p>
      <div className="flex gap-10 justify-center pb-10 ">
        <div className="w-60 bg-white" >
          <img
            src="https://neojb.brickthemes.com/wp-content/uploads/2018/08/happy-colleagues-in-office-using-computer-1024x683.jpg"
            alt=""
            className=""
          />
          <h4 className="text-gray-700 my-2 ml-2">Tips For Relocating For A Job</h4>
          <p className="text-xs text-gray-400 mb-2 ml-2">
            Education & E-learning, Information Technology, Job hunt Nulla ut
            tortor
          </p>
          <button className="text-sm font-bold mb-2 ml-2">Read More</button>
        </div>
        <div className="w-60 bg-white">
          <img
            src="https://neojb.brickthemes.com/wp-content/uploads/2018/08/cozy-studio-apartment-1024x683.jpg"
            alt=""
            className=""
          />
          <h4 className="text-gray-700 my-2 ml-2">Tips For Relocating For A Job</h4>
          <p className="text-xs text-gray-400 mb-2 ml-2">
            Education & E-learning, Information Technology, Job hunt Nulla ut
            tortor
          </p>
          <button className="text-sm font-bold mb-2 ml-2">Read More</button>
        </div>
        <div className="w-60 bg-white">
          <img
            src="https://neojb.brickthemes.com/wp-content/uploads/2018/08/happy-friends-eating-fruits-and-drinking-on-a-min-1024x683.jpg"
            alt=""
            className=""
          />
          <h4 className="text-gray-700 my-2 ml-2">Tips For Relocating For A Job</h4>
          <p className="text-xs text-gray-400 mb-2 ml-2">
            Education & E-learning, Information Technology, Job hunt Nulla ut
            tortor
          </p>
          <button className="text-sm font-bold mb-2 ml-2">Read More</button>
        </div>
      </div>
    </div>
  );
}

export default Blog;
