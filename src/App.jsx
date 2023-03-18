import { useEffect, useState } from 'react'
import { Timeline, Intro, Contact, Footer, Portfolio, TechnicalSkills, Hobbies } from './components';
import { Box, Stack, Typography } from '@mui/material'


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

  const sun = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="black"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      />
    </svg>
  );
  
  const moon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="white"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
      />
    </svg>
  );

  return (
    <div className="bg-white dark:bg-stone-900 text-black dark:text-white">
      <button
        type="button"
        onClick={handleThemeSwitch}
        className="fixed p-2 z-10 top-4 right-20 bg-black dark:bg-white text-xl rounded-md"
      >
        {theme === "dark" ? sun : moon}
      </button>
      <div className="flex flex-col items-center justify-center my-20 px-20 min-h-screen font-inter w-11/12 mx-auto">
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

            <Box sx={{ px: {sx: 0, md: 2}}} className="col-span-2">
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
