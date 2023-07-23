import { Intro, Footer, DarkMode, MainPage } from './components';

import { Analytics } from '@vercel/analytics/react';


function App() {
  return (
    <div>
      <DarkMode />
      <div className="flex flex-col items-center justify-center my-20 px-20 font-inter w-11/12 mx-auto">
        <Intro />
        <MainPage />
        <Footer />
      </div>
      <Analytics />
    </div>
  );
}

export default App;
