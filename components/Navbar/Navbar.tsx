import Link from 'next/link';

interface Links {
  id: number;
  title: string;
  href: string;
}

const Navbar = () => {
  const links: Links[] = [
    { id: 1, title: 'Varjupaigad', href: '/' },
    { id: 2, title: 'Leia koduloom', href: '/' },
    { id: 3, title: 'Anneta', href: '/' },
  ];

  return (
    <nav className="rounded border-gray-200 bg-white px-2 py-4 sm:px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link href="/">
          <a className="flex items-center">
            <span
              id="navbar_logo"
              className="self-center whitespace-nowrap text-xl font-semibold text-indigo-600"
            >
              Unimal
            </span>
          </a>
        </Link>
        <div className="flex md:order-2">
          <button
            id="navbar_cta_button"
            type="button"
            className="mr-2 mb-2 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            <a href="http://65.108.153.196:1337/admin" target="_blank" rel="noreferrer">
              Infosüsteem
            </a>
          </button>

          <button
            data-collapse-toggle="mobile-menu-4"
            type="button"
            className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
            aria-controls="mobile-menu-4"
            aria-expanded="false"
          >
            <span className="sr-only">Ava menüü</span>
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden h-6 w-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
          id="mobile-menu-4"
        >
          <ul className="2lg:text-lg flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
            {links.map((link) => (
              <li key={link.id}>
                <Link href={link.href}>
                  <a className="block rounded py-2 pr-4 pl-3 text-stone-600 text-white dark:text-white md:bg-transparent md:p-0">
                    {link.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
