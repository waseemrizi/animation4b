import React from 'react';
//import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';



    

const Home = () => {
  return (
    <div className="home container">
      <motion.svg className="pizza-svg" enable-background="new 0 0 512 512"
        initial={{opacity: 0.75}}
        animate={{
          opacity: 1.5,
          scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"]
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          loop: Infinity,
          repeatDelay: 1
        }}
        
        height="100" viewBox="0 0 512 512" width="100"

        xmlns="http://www.w3.org/2000/svg"><g>
          <path d="m408.635 409.475-408.635 102.525 102.525-408.635s95.892-116.128 258.854 46.834 47.256 259.276 47.256 259.276z"
            fill="#fed841" />
          <path d="m0 512 408.635-102.525s115.603-96.23-47.046-259.064z"
            fill="#fdb118" /><path d="m188.963 397.908c-34.544 8.889-55.427 43.905-46.972 78.457l126.194-31.662c-8.955-34.798-44.424-55.75-79.222-46.795z"
              fill="#ff1f2e" /><path d="m392.636 119.365c-71.347-71.348-164.344-113.18-264.177-119.365l-25.934 103.365c28.552 0 59.612-21.829 85.965-14.762 27.241 7.304 43.154 41.975 67.021 55.806 24.195 14.021 62.125 10.654 81.775 30.305 19.65 19.65 16.284 57.58 30.305 81.775 13.831 23.867 48.502 39.78 55.806 67.021 7.067 26.353-14.762 57.414-14.762 85.966l103.365-25.935c-6.185-99.833-48.018-192.83-119.364-264.176z"
                fill="#bf5c15" /><path d="m392.636 119.364-55.35 55.349c19.65 19.65 16.284 57.58 30.305 81.775 13.831 23.867 48.502 39.78 55.806 67.021 7.067 26.353-14.762 57.414-14.762 85.966l103.365-25.934c-6.185-99.833-48.018-192.83-119.364-264.177z"
                  fill="#994910" /><ellipse cx="235.859" cy="276.141" fill="#ff4d55" rx="62.982" ry="62.982" transform="matrix(.099 -.995 .995 .099 -62.179 483.642)" />
                  <path d="m191.324 320.676c11.398 11.398 27.143 18.447 44.535 18.447 34.784 0 62.982-28.198 62.982-62.982 0-17.392-7.049-33.138-18.447-44.535z" fill="#ff1f2e" /><path d="m65.73 250.016-26.951 107.42c29.733 7.182 59.658-11.1 66.84-40.833 7.105-29.415-10.719-59.002-39.889-66.587z" fill="#ff4d55" /><path d="m82.649 400.373h28.978v28.987h-28.978z" fill="#7ad425" /><path d="m82.649 429.351v.008h28.979v-28.986z" fill="#6ebd21" /><path d="m310.241 343.483h28.978v28.987h-28.978z" fill="#6ebd21" /><path d="m145.225 167.085h28.978v28.987h-28.978z"
                    fill="#7ad425" /></g></motion.svg>


      <motion.h2
       animate={{ x: -1000  }}
       transition={{ duration: 5, loop: Infinity, }}
      
      >
        Well come to pizza
      </motion.h2>
      
        <motion.button
      //   initial={{opacity: 0}}

      //  animate={{
         
      //   opacity: 1,
      //   scale: [1, 2, 2, 1, 1],
      // rotate: [0, 0, 270, 270, 0],
      // borderRadius: ["20%", "20%", "50%", "50%", "20%"]
      // }}
      // transition={{
      //   duration: 8,
      //   ease: "easeInOut",
      //   times: [0, 0.2, 0.5, 0.8, 1],
      //   iteration: 2,
      //   repeatDelay: 1
      // }}
      animate={{ scale: 1.2 }}
    transition={{ duration: 1, loop: Infinity,  }}
        >
          Create Your Pizza
        </motion.button>
      
    </div>
  )
}

export default Home;