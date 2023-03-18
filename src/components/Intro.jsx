import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Intro = () => {
  return (
    <div className="flex items-center justify-center flex-col text-center md:text-start pt-20 pb-6">
        <h1 className="text-4xl md:text-5xl mb-1 md:mb-3 font-bold">Xiaokun Li</h1>
        <h3 className="test-sm md:text-xl mb-6 font-normal">Software Engineer Intern</h3>
        <p className="test-sm max-w-xl mb-6 font-semibold"> I am a dedicated and hardworking computer science student who is currently on the hunt for an internship opportunity. I am in third year of my computer science program with a minor in mathematics and have always been passionate about technology and its applications. As I approache graduation, I am keen to gain industry experience through an internship program. I am looking for an opportunity to apply my skills and knowledge in a real-world setting, work alongside experienced professionals, and contribute to meaningful projects.  <br />(To be Graduated in May 2024).</p>
        <br />
        <div className="flex flex-row items-center align-middle gap-3 mx-auto">
           <a href="https://github.com/Xiaokun-Li518" target="_blank">
             <GitHubIcon sx={{ fontSize:37, "&:hover": { color: "gray" } }} /> 
            </a>
           <a href="https://www.linkedin.com/in/xiaokun-li-177378209/" target="_blank">
            <LinkedInIcon sx={{ fontSize:40, "&:hover": { color: "black" } , color: "#0A66C2"}}/>
           </a>
        </div>
    </div>
  )
}

export default Intro;