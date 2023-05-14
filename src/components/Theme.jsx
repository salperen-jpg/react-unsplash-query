import { MdSunny } from 'react-icons/md';
import { HiMoon } from 'react-icons/hi';
import { useImagesContext } from '../context';
const Theme = () => {
  const { isDarkTheme, toggleTheme } = useImagesContext();
  return (
    <section className='section-center toggle-section'>
      <button className='btn toggle-btn' onClick={toggleTheme}>
        {isDarkTheme ? <MdSunny /> : <HiMoon />}
      </button>
    </section>
  );
};
export default Theme;
