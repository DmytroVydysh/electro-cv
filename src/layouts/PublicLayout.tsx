import { MoonStars, SignIn, Sun, UserCircleCheck, UserCirclePlus } from "@phosphor-icons/react";
import React, { useEffect } from "react";
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
  const currentPageName = useSelector((state: RootState) => state.page.name);

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
      <header className="sticky top-0 w-full bg-primary shadow-md z-50" style={{ height: '3.5rem' }}>
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
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-primary rounded-box w-52 mt-3">
              <li><a href="/" className="text-primary-900 hover:text-accent">{t('header_home')}</a></li>
              <li><a href="/about-us" className="text-primary-900 hover:text-accent">{t('header_about')}</a></li>
              <li><a href="/services" className="text-primary-900 hover:text-accent">{t('header_services')}</a></li>
              <li><a href="/contact" className="text-primary-900 hover:text-accent">{t('header_contacts')}</a></li>
            </ul>
          </div>

          {/* Menu di Navigazione - Navbar per schermi grandi */}
          <nav className="hidden md:inline-flex items-center  h-full">
            <a href="/" className={`${currentPageName === '/' ? classNameActivePage : ''}                 ${classNameHoverPage} px-3 hover:text-accent transition-colors duration-200 h-full inline-flex justify-center items-center`}>{t('header_home')}</a>
            <a href="/about-us" className={`${currentPageName === '/about-us' ? classNameActivePage : ''} ${classNameHoverPage} px-3 hover:text-accent transition-colors duration-200 h-full inline-flex justify-center items-center`}>{t('header_about')}</a>
            <a href="/services" className={`${currentPageName === '/services' ? classNameActivePage : ''} ${classNameHoverPage} px-3 hover:text-accent transition-colors duration-200 h-full inline-flex justify-center items-center`}>{t('header_services')}</a>
            <a href="/contact" className={`${currentPageName === '/contact' ? classNameActivePage : ''}   ${classNameHoverPage} px-3 hover:text-accent transition-colors duration-200 h-full inline-flex justify-center items-center`}>{t('header_contacts')}</a>
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
                <button tabIndex={0} role="button" className="btn lg:btn-md btn-sm rounded-r-none"><img src={`/images/flags/${language}.svg`} alt="" /></button>
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
      {children}
    </>);
}