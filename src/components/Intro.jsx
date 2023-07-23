import { React, Link, useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";

import { Modal, Button, Group } from "@mantine/core";

import { ConfirmDownload } from "./utils.jsx";
const Intro = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div className="flex items-center justify-center flex-col text-center md:text-start pt-20 pb-6">
      <h1 className="text-4xl md:text-5xl mb-1 md:mb-3 font-bold">
        Xiaokun Li
      </h1>
      <h3 className="text-xl md:text-2xl mb-1 md:mb-3 font-semibold">
        Software Engineer 
      </h3>
      <a
        className="text-xs md:text-sm font-semibold cursor-pointer mb-3 md:mb-6"
        onClick={open}
        
      >
        RESUME <DownloadForOfflineIcon sx={{ transition: "color 0.3s ease", // Added line for transition
                                          '&:hover': {  // Added lines for hover effect
                                            transform: 'scale(1.1)',
                                            // boxShadow: '5px 5px 15px rgba(0,0,0,0.3)',
                                          }}} />
      </a>{" "}
      <p className="text-sm md:text-lg max-w-xl mb-6 font-semibold">
        I am a dedicated and hardworking computer science student who is
        currently on the hunt for an entry-level software development opportunity. I am in last year
        of my computer science program with a minor in mathematics and have
        always been passionate about technology and its applications. As I
        approache graduation, I am keen to gain industry experience through an entry-level software development role, work alongside experienced
        professionals, and contribute to meaningful projects.
        <br /> (Graduating in May 2024).
        <br />
      </p>
      <br />
      <div className="flex flex-row items-center gap-3 mx-auto">
        <a
          href="https://github.com/Xiaokun-Li518"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon
            sx={{
              fontSize: { xs: 30, md: 35 },
              transition: "color 0.3s ease", // Added line for transition
              '&:hover': {  // Added lines for hover effect
                transform: 'scale(1.1)',
                // boxShadow: '5px 5px 15px rgba(0,0,0,0.3)',
              }
            }}
          />
        </a>
        <a
          href="https://linkedin.com/in/xiaokunli"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon
            sx={{
              fontSize: { xs: 35, md: 40 },
              color: "#0A66C2",
              transition: "color 0.3s ease", // Added line for transition
              '&:hover': {  // Added lines for hover effect
                transform: 'scale(1.1)',
                // boxShadow: '5px 5px 15px rgba(0,0,0,0.3)',
              }
            }}
          />
        </a>
      </div>
      <ConfirmDownload opened={opened} close={close} />
    </div>
  );
};

export default Intro;
