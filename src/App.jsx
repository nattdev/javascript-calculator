import { useEffect, useState } from 'react';
import Calculator from './components/Calculator';
import darkModeIcon from './assets/dark-mode.svg';
import lightModeIcon from './assets/light-mode.svg';

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode === false) {
      document.querySelector('html').classList.add('dark')
    } else {
      document.querySelector('html').classList.remove('dark')
    }
  }, [isDarkMode]);

  return (
    <>
      <Calculator />
      <div onClick={() => {setIsDarkMode(!isDarkMode)}} className="absolute right-0
      bottom-0 bg-white rounded-full p-4 m-6 cursor-pointer"><img src={isDarkMode ? darkModeIcon : lightModeIcon}></img></div>
    </>
  )
}

export default App