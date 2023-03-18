import { Intro, Footer, DarkMode, MainPage } from './components';


function App() {
  return (
    <div>
      <DarkMode />
      <div className="flex flex-col items-center justify-center my-20 px-20 font-inter w-11/12 mx-auto">
        <Intro />
        <MainPage />
        <Footer />
      </div>
    </div>
  );
}

export default App;
