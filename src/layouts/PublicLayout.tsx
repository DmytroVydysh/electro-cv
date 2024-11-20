import { MoonStars, SignIn, Sun, UserCircleCheck, UserCirclePlus } from "@phosphor-icons/react";
import React, { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';


import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../store";


import { setLanguage } from '../store/src/langSlice';
import { setTheme } from '../store/src/themeSlice';


interface PublicLayoutProps {
  children: React.ReactNode;
}
export const PublicLayout: React.FC<PublicLayoutProps> = ({ children }) => {
  const { t, i18n: { language, changeLanguage } } = useTranslation();
  const dispatch = useDispatch();
  const [sidebarDisplay, setSidebarDisplay] = useState<'none' | 'block'>('none');
  const currentPageName = useSelector((state: RootState) => state.page.name);

  const handleToggleSidebar = () => {
    setSidebarDisplay(sidebarDisplay === 'none' ? 'block' : 'none');
  };

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme) {
      const $theme = document.querySelector('.theme-controller') as HTMLInputElement;
      $theme.checked = theme === 'dark';
    }
    return () => {
    };
  }, []);

  function _changeTheme(event: React.ChangeEvent<HTMLInputElement>) {
    const theme = event.target.checked ? 'dark' : 'light';
    dispatch(setTheme(theme));
  }

  function _changeLanguage(lang: 'it' | 'en' | 'ua') {
    dispatch(setLanguage(lang));
    changeLanguage(lang);
  }

  const classNameActivePage = 'border-b-4 border-accent border-solid';
  const classNameHoverPage = 'hover:border-b-4 hover:border-accent hover:border-solid';

  return (
    <>
      <header className="sticky top-0 w-full bg-primary shadow-md z-50 hidden" style={{ height: '3.5rem' }}>
        <div className="px-2 flex items-center justify-between w-full h-full">

          {/* Logo o Titolo - cambia a seconda delle dimensioni */}
          <div className="inline-flex items-center no-select py-2">
            <kbd className="kbd inline-flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="currentColor" version="1.1" id="Capa_1" viewBox="0 0 490 490" xmlSpace="preserve" className="h-6 w-6 mr-2"><g><path d="M245,169.144c27.118,0,49.1-21.984,49.1-49.102S272.118,70.94,245,70.94c-27.118,0-49.104,21.984-49.104,49.102S217.882,169.144,245,169.144z M245,86.252c18.632,0,33.788,15.157,33.788,33.79c0,18.632-15.156,33.789-33.788,33.789s-33.791-15.157-33.791-33.789C211.208,101.41,226.368,86.252,245,86.252z" /><path d="M195.234,180.425c0,0-49.766,0.664-49.766,46.448c0,45.784,0,56.401,0,56.401s96.873,0,97.206,0L195.234,180.425z M160.781,226.873c0-20.502,14.669-27.52,25.216-29.915l32.752,71.003h-57.968V226.873z" /><path d="M344.531,283.274c0,0,0-10.617,0-56.401c0-45.784-49.766-46.448-49.766-46.448l-47.444,102.849H344.531z M304.003,196.958c10.546,2.395,25.216,9.411,25.216,29.915v41.089h-57.971L304.003,196.958z" /><polygon points="210.826,180.425 244.999,256.068 279.171,180.425 244.999,180.425" /><path d="M367.5,0H53.594v490h382.813V76.563L367.5,0z M367.818,23.242l48.85,54.277h-48.85V23.242z M68.906,474.688V15.313h283.599v77.52h68.589v381.855H68.906z" /><rect x="130.16" y="336.307" width="229.687" height="15.312" /><rect x="130.16" y="375.44" width="229.687" height="15.313" /><rect x="130.16" y="414.574" width="229.687" height="15.313" /></g></svg>
              <span className="hidden md:inline text-2xl font-bold">
                Electro CV
              </span>
              <span className="md:hidden text-l font-semibold">
                El CV
              </span>
            </kbd>
          </div>

          {/* Menu di Navigazione - Dropdown fino a lg */}
          <div className="md:hidden dropdown dropdown-end">
            <button tabIndex={0} className="btn btn-accent lg:hidden lg:btn-md btn-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-primary rounded-box w-52 mt-3 absolute left-0">
              <li><a href="/" className={`${currentPageName === '/' ? classNameActivePage : ''} ${classNameHoverPage} text-primary-900 hover:text-accent`}>{t('header_home')}</a></li>
              <li><a href="/about-us" className={`${currentPageName === '/about-us' ? classNameActivePage : ''} ${classNameHoverPage} text-primary-900 hover:text-accent`}>{t('header_about')}</a></li>
              <li><a href="/services" className={`${currentPageName === '/services' ? classNameActivePage : ''} ${classNameHoverPage} text-primary-900 hover:text-accent`}>{t('header_services')}</a></li>
              <li><a href="/contacts" className={`${currentPageName === '/contacts' ? classNameActivePage : ''} ${classNameHoverPage} text-primary-900 hover:text-accent`}>{t('header_contacts')}</a></li>
            </ul>
          </div>

          {/* Menu di Navigazione - Navbar per schermi grandi */}
          <nav className="hidden md:inline-flex items-center  h-full">
            <a href="/" className={`${currentPageName === '/' ? classNameActivePage : ''}                 ${classNameHoverPage} px-3 hover:text-accent transition-colors duration-200 h-full inline-flex justify-center items-center`}>{t('header_home')}</a>
            <a href="/about-us" className={`${currentPageName === '/about-us' ? classNameActivePage : ''} ${classNameHoverPage} px-3 hover:text-accent transition-colors duration-200 h-full inline-flex justify-center items-center`}>{t('header_about')}</a>
            <a href="/services" className={`${currentPageName === '/services' ? classNameActivePage : ''} ${classNameHoverPage} px-3 hover:text-accent transition-colors duration-200 h-full inline-flex justify-center items-center`}>{t('header_services')}</a>
            <a href="/contacts" className={`${currentPageName === '/contacts' ? classNameActivePage : ''}   ${classNameHoverPage} px-3 hover:text-accent transition-colors duration-200 h-full inline-flex justify-center items-center`}>{t('header_contacts')}</a>
          </nav>

          {/* Pulsante Azione */}
          <div className="inline-flex items-center">
            <label className="swap swap-rotate me-5">
              {/* this hidden checkbox controls the state */}
              <input type="checkbox" className="theme-controller" name="themechange" onChange={_changeTheme} />

              {/* sun icon */}
              <Sun className="swap-off h-10 w-10 fill-current" />

              {/* moon icon */}
              <MoonStars className="swap-on h-10 w-10 fill-current" />
            </label>

            <div className="inline-flex items-center">

              <div className="dropdown">
                <button tabIndex={0} role="button" className="btn lg:btn-md btn-sm rounded-r-none"><img src={`/images/flags/${language}.svg`} alt="" style={{ maxWidth: '24px', maxHeight: '24px' }} /></button>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow absolute right-0">
                  <li><a href="/" onClick={(event: React.MouseEvent<HTMLAnchorElement> | React.TouchEvent<HTMLAnchorElement>) => { event.preventDefault(); _changeLanguage('en'); }}><img src={`/images/flags/en.svg`} alt="" />English</a></li>
                  <li><a href="/" onClick={(event: React.MouseEvent<HTMLAnchorElement> | React.TouchEvent<HTMLAnchorElement>) => { event.preventDefault(); _changeLanguage('it'); }}><img src={`/images/flags/it.svg`} alt="" />Italiano</a></li>
                  <li><a href="/" onClick={(event: React.MouseEvent<HTMLAnchorElement> | React.TouchEvent<HTMLAnchorElement>) => { event.preventDefault(); _changeLanguage('ua'); }}><img src={`/images/flags/ua.svg`} alt="" />Українська</a></li>
                </ul>
              </div>

              <div className="dropdown">
                <button tabIndex={0} role="button" className="btn lg:btn-md btn-sm rounded-l-none"><SignIn size={24} /></button>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow absolute right-0">
                  <li><a href="/sign-in"><UserCircleCheck size={24} />{t('header_signin')}</a></li>
                  <li><a href="/sign-up"><UserCirclePlus size={24} />{t('header_signup')}</a></li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </header>

      <header className='flex border-b py-4 px-4 sm:px-10 bg-primary font-[sans-serif] min-h-[70px] tracking-wide relative z-50' style={{height:'80px', maxHeight: '80px'}}>
        <div className='flex flex-wrap items-center gap-5 w-full'>
          <a href="/"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" className='w-36' /> </a>

          <div id="collapseMenu" className='max-lg:hidden lg:!block max-lg:w-full max-lg:fixed max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50' style={{ display: sidebarDisplay }}>
            <button id="toggleClose" className='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3'  onClick={handleToggleSidebar}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-black" viewBox="0 0 320.591 320.591">
                <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" data-original="#000000"></path>
                <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" data-original="#000000"></path>
              </svg>
            </button>

            <ul className='lg:flex lg:ml-14 lg:gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
              <li className='mb-6 hidden max-lg:block'>
                <a href="/">
                  <img src="https://readymadeui.com/readymadeui.svg" alt="logo" className='w-36' />
                </a>
              </li>
              <li className='max-lg:border-b max-lg:py-3 px-3'>
                <a href='/' className='lg:hover:text-[#007bff] text-[#007bff] block font-semibold text-[15px]'>Home</a>
              </li>
              <li className='max-lg:border-b max-lg:py-3 px-3'>
                <a href='/' className='lg:hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]'>Team</a>
              </li>
              <li className='max-lg:border-b max-lg:py-3 px-3'>
                <a href='/' className='lg:hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]'>Feature</a>
              </li>
              <li className='max-lg:border-b max-lg:py-3 px-3'>
                <a href='/' className='lg:hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]'>Blog</a>
              </li>
              <li className='max-lg:border-b max-lg:py-3 px-3'>
                <a href='/' className='lg:hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]'>About</a>
              </li>
            </ul>
          </div>
          <div className="dropdown">
            <button tabIndex={0} role="button" className="btn lg:btn-md btn-sm bg-transparent border-0"><img src={`/images/flags/${language}.svg`} alt="" style={{ maxWidth: '24px', maxHeight: '24px' }} /></button>
            <ul tabIndex={0} className="dropdown-content menu z-[1] w-52 p-2 shadow absolute right-0 bg-primary">
              <li><a href="/" onClick={(event: React.MouseEvent<HTMLAnchorElement> | React.TouchEvent<HTMLAnchorElement>) => { event.preventDefault(); _changeLanguage('en'); }}><img src={`/images/flags/en.svg`} alt="" />English</a></li>
              <li><a href="/" onClick={(event: React.MouseEvent<HTMLAnchorElement> | React.TouchEvent<HTMLAnchorElement>) => { event.preventDefault(); _changeLanguage('it'); }}><img src={`/images/flags/it.svg`} alt="" />Italiano</a></li>
              <li><a href="/" onClick={(event: React.MouseEvent<HTMLAnchorElement> | React.TouchEvent<HTMLAnchorElement>) => { event.preventDefault(); _changeLanguage('ua'); }}><img src={`/images/flags/ua.svg`} alt="" />Українська</a></li>
            </ul>
          </div>
          <label className="swap swap-rotate me-5">
              {/* this hidden checkbox controls the state */}
              <input type="checkbox" className="theme-controller" name="themechange" onChange={_changeTheme} />

              {/* sun icon */}
              <Sun className="swap-off h-10 w-10 fill-current" />

              {/* moon icon */}
              <MoonStars className="swap-on h-10 w-10 fill-current" />
            </label>
          <button id="toggleOpen" className='lg:hidden ml-auto' onClick={handleToggleSidebar}>
            <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"></path>
            </svg>
          </button>


        </div>
      </header>
      {children}
    </>
  );
}