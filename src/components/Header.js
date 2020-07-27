import React from 'react';
import {motion} from 'framer-motion';



const Header = () => {
  return (
    <header>
      <div className="logo">
      {/* <svg className="pizza-svg" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m408.635 409.475-408.635 102.525 102.525-408.635s95.892-116.128 258.854 46.834 47.256 259.276 47.256 259.276z" fill="#fed841"/><path d="m0 512 408.635-102.525s115.603-96.23-47.046-259.064z" fill="#fdb118"/><path d="m188.963 397.908c-34.544 8.889-55.427 43.905-46.972 78.457l126.194-31.662c-8.955-34.798-44.424-55.75-79.222-46.795z" fill="#ff1f2e"/><path d="m392.636 119.365c-71.347-71.348-164.344-113.18-264.177-119.365l-25.934 103.365c28.552 0 59.612-21.829 85.965-14.762 27.241 7.304 43.154 41.975 67.021 55.806 24.195 14.021 62.125 10.654 81.775 30.305 19.65 19.65 16.284 57.58 30.305 81.775 13.831 23.867 48.502 39.78 55.806 67.021 7.067 26.353-14.762 57.414-14.762 85.966l103.365-25.935c-6.185-99.833-48.018-192.83-119.364-264.176z" fill="#bf5c15"/><path d="m392.636 119.364-55.35 55.349c19.65 19.65 16.284 57.58 30.305 81.775 13.831 23.867 48.502 39.78 55.806 67.021 7.067 26.353-14.762 57.414-14.762 85.966l103.365-25.934c-6.185-99.833-48.018-192.83-119.364-264.177z" fill="#994910"/><ellipse cx="235.859" cy="276.141" fill="#ff4d55" rx="62.982" ry="62.982" transform="matrix(.099 -.995 .995 .099 -62.179 483.642)"/><path d="m191.324 320.676c11.398 11.398 27.143 18.447 44.535 18.447 34.784 0 62.982-28.198 62.982-62.982 0-17.392-7.049-33.138-18.447-44.535z" fill="#ff1f2e"/><path d="m65.73 250.016-26.951 107.42c29.733 7.182 59.658-11.1 66.84-40.833 7.105-29.415-10.719-59.002-39.889-66.587z" fill="#ff4d55"/><path d="m82.649 400.373h28.978v28.987h-28.978z" fill="#7ad425"/><path d="m82.649 429.351v.008h28.979v-28.986z" fill="#6ebd21"/><path d="m310.241 343.483h28.978v28.987h-28.978z" fill="#6ebd21"/><path d="m145.225 167.085h28.978v28.987h-28.978z" fill="#7ad425"/></g></svg> */}
        {/* <svg className="pizza-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <path
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          />
          <path
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
          />
        </svg> */}
      </div>
      <div className="title">
        <motion.h1
        
        animate={{ x: 1200  }}
        transition={{ duration: 7, loop: Infinity, }}
        >
          Pizza Joint
          </motion.h1>
      </div>
    </header>
  )
}

export default Header;