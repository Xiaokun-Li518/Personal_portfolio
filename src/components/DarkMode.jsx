import React from 'react';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import { useEffect, useState } from 'react';

import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

const DarkMode = () => {
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
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="flex flex-row justify-between">
      <button type="button" onClick={handleThemeSwitch} className="p-5">
        {theme === "dark" ? (
          <WbSunnyIcon sx={{ fontSize:{xs:25, md:35}, "&:hover": { color: "gray" } }} />
        ) : (
          <Brightness2Icon sx={{ fontSize:{xs:25, md:35}, "&:hover": { color: "gray" } }} />
        )}
      </button>
    </div>
  );
}

export default DarkMode