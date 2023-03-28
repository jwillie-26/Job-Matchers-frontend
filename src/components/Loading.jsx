import React from 'react'
// import image from '../components/Image/image1.jpeg'



const Loading = () => {
  return (
    <div className='loading'>
      <h2>Welcome to Career Connect...... Please Wait ⏳ </h2>
      <img
      alt="loading"
      src="https://media.tenor.com/UnFx-k_lSckAAAAM/amalie-steiness.gif"
      class="h-5 w-full object-contain sm:h-half"
    />
    <div className='image_container'> 
        <img src='Image/image1.jpeg' />
       </div>
          
     </div>
  );
};

export default Loading
