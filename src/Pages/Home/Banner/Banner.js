import React from 'react';
import chair from '../../../assets/images/chair.png'

const Banner = () => {
  return (
    <div>
      <div className="hero  ">
  <div className="hero-content flex-col lg:flex-row-reverse flex justify-between">
    <img src={chair} className=" lg:w-1/2 rounded-lg shadow-2xl " alt=''/>
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary bg-gradient-to-r from-green-400 to-blue-700 hover:from-pink-500 hover:to-yellow-500 ...">Get Started</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default Banner;