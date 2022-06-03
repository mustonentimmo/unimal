import { IoMdPaw } from 'react-icons/io';

export const ScrollToTop = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      onClick={handleClick}
      className="fixed bottom-4 right-4 z-50 cursor-pointer rounded-lg bg-indigo-600 hover:bg-indigo-500 xl:right-7"
    >
      <IoMdPaw className="p-3 text-5xl text-white 2xl:p-4 2xl:text-6xl" />
    </div>
  );
};

export default ScrollToTop;
