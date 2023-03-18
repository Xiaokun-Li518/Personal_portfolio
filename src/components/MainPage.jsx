import React from 'react';
import { Timeline, Intro, Contact, Footer, Portfolio, TechnicalSkills, Hobbies, DarkMode } from './';
import { Box, Stack} from '@mui/material';

const MianPage = () => {
  return (
    <Stack
      sx={{ flexDirection: { sx: "column", md: "row" } }}
      className="grid grid-cols-3 gap-20"
    >
      <Box sx={{ px: { sx: 0, md: 2 } }} className="col-span-1">
        <TechnicalSkills />
        <Hobbies />
      </Box>

      <Box sx={{ px: { sx: 0, md: 2 } }} className="col-span-2">
        <Portfolio />
        <Timeline />
        <Contact />
      </Box>
    </Stack>
  );
}

export default MianPage