import React from 'react';

const Intro = () => {
  return (
    <div className="flex items-center justify-center flex-col text-center md:text-start pt-20 pb-6">
        <h1 className="text-4xl md:text-5xl mb-1 md:mb-3 font-bold">Xiaokun Li</h1>
        <h3 className="test-sm md:text-xl mb-6 font-normal">Software Engineer Intern</h3>
        <p className="test-sm max-w-xl mb-6 font-semibold"> I am a dedicated and hardworking computer science student who is currently on the hunt for an internship opportunity. I am in third year of my computer science program with a minor in mathematics and have always been passionate about technology and its applications. As I approache graduation, I am keen to gain industry experience through an internship program. I am looking for an opportunity to apply my skills and knowledge in a real-world setting, work alongside experienced professionals, and contribute to meaningful projects.  <br />(To be Graduated in May 2024).</p>
        <br />
        <div className="flex flex-row items-center align-middle gap-3 mx-auto">
           <a href="https://github.com/Xiaokun-Li518" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 640 640"><path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z"/>
            </svg>
            </a>
           <a href="https://www.linkedin.com/in/xiaokun-li-177378209/" target="_blank">
           <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
           </a>
        </div>
    </div>
  )
}

export default Intro;