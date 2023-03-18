import { useEffect, useState } from 'react'
import { Timeline, Intro, Contact, Footer, Portfolio, TechnicalSkills, Hobbies } from './components';
import { Box, Stack, Typography } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Brightness2Icon from '@mui/icons-material/Brightness2';


function App() {
  const [theme, setTheme] = useState(null);

	useEffect(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	}, []);

	const handleThemeSwitch = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [theme]);



  return (
    <div>
      <div className="flex items-end">
        <button
          type="button"
          onClick={handleThemeSwitch}
          className=" p-5 z-10 top-4 fixed bg-white dark:bg-stone-900 text-xl rounded-full"
        >
          {theme === "dark" ? <WbSunnyIcon sx={{"&:hover": { color: "gray" }}}/> : <Brightness2Icon sx={{"&:hover": { color: "gray" }}}/>}
        </button>
      </div>
      <div className="flex flex-col items-center justify-center my-20 px-20 font-inter w-11/12 mx-auto">
        <div>
          <Intro />
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
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App
