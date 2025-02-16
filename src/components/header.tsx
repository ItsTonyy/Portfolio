export function Header() {
  return (
    <header className='flex justify-center items-center w-full py-4 fixed top-0 right-0 left-0'>
      <div className='flex w-1/4 justify-between py-2 px-4 rounded-2xl bg-gray-500 bg-opacity-10 backdrop-blur-sm'>
        <div className='dark:text-zinc-100 text-lg py-2 px-3 bg-gray-700 rounded-2xl bg-opacity-5 backdrop-blur-lg
        transition ease-in-out hover:scale-105 cursor-pointer'>
          About Me
        </div>
        <div className='dark:text-zinc-100 text-lg py-2 px-3 bg-gray-700 rounded-2xl bg-opacity-5 backdrop-blur-lg
        transition ease-in-out hover:scale-105 cursor-pointer'>
          Projects
        </div>
        <div className='dark:text-zinc-100 text-lg py-2 px-3 bg-gray-700 rounded-2xl bg-opacity-5 backdrop-blur-lg
        transition ease-in-out hover:scale-105 cursor-pointer'>
          Contact
        </div>
      </div>
    </header>
  );
}
