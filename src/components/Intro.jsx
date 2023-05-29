import {React, Link, useState} from 'react';
import { useDisclosure } from '@mantine/hooks';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

import { Modal, Button, Group } from '@mantine/core';



const Intro = () => {
  const [opened, { open, close }] = useDisclosure(false);



  return (
    <div className="flex items-center justify-center flex-col text-center md:text-start pt-20 pb-6">
      <h1 className="text-4xl md:text-5xl mb-1 md:mb-3 font-bold">
        Xiaokun Li
      </h1>
      <h3 className="text-sm md:text-xl mb-3 md:mb-6 font-normal">
        Software Engineer Intern
      </h3>
      <p className="text-sm md:text-lg max-w-xl mb-6 font-semibold">
        I am a dedicated and hardworking computer science student who is
        currently on the hunt for an internship opportunity. I am in third year
        of my computer science program with a minor in mathematics and have
        always been passionate about technology and its applications. As I
        approache graduation, I am keen to gain industry experience through an
        internship program. I am looking for an opportunity to apply my skills
        and knowledge in a real-world setting, work alongside experienced
        professionals, and contribute to meaningful projects.
        <br />{" "}
        <a
          className="font-bold hover:text-stone-500 underline cursor-pointer"
          onClick={open}
        >
          Click here to Download Resume{" "}
          <DownloadForOfflineIcon sx={{ "&:hover": { color: "gray" } }} />
        </a>{" "}
        <br />
        (To be Graduated in May 2024).
      </p>
      <br />
      <div className="flex flex-row items-center gap-3 mx-auto">
        <a href="https://github.com/Xiaokun-Li518" target="_blank" rel="noreferrer">
          <GitHubIcon
            sx={{ fontSize: { xs: 30, md: 35 }, "&:hover": { color: "gray" } }}
          />
        </a>
        <a href="https://linkedin.com/in/xiaokunli" target="_blank" rel="noreferrer">
          <LinkedInIcon
            sx={{
              fontSize: { xs: 35, md: 40 },
              "&:hover": { color: "black" },
              color: "#0A66C2",
            }}
          />
        </a>
      </div>

      <Modal opened={opened} onClose={close} title="Confirm Download">
        <p className='mb-3'>Are you sure you want to download the Resume?</p>
        <img className='mb-3' src="/assets/xiaokunli_snapshot.png" alt="Resume Snapshot" />
        <Group position="center">
          <Button className="font-normal text-center inline-block px-8 py-1 w-max text-base rounded-xl text-white border-2 bg-black dark:border-stone-500 hover:bg-stone-600 dark:hover:bg-black dark:hover:border-white" onClick={close}>Cancel</Button>
          <Button
            className="font-normal text-center inline-block px-8 py-1 w-max text-base rounded-xl text-white border-2 bg-black dark:border-stone-500 hover:bg-stone-600 dark:hover:bg-black dark:hover:border-white"
            component="a"
            href="/assets/XiaokunLi.pdf"
            download
            onClick={close}
          >
            Confirm
          </Button>
        </Group>
      </Modal>
    </div>
  );
};


export default Intro;