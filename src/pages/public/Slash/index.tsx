import React from 'react';

export const Slash: React.FC = () => {
  function changeTheme(event: React.ChangeEvent<HTMLInputElement>) {
    document.documentElement.setAttribute('data-theme', event.target.checked ? 'dark' : 'light');
  }
  return <>

<header className="sticky top-0 w-full bg-primary shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo o Titolo - cambia a seconda delle dimensioni */}
        <div className="inline-flex items-center">
          <span className="hidden lg:inline text-2xl font-bold"><kbd className="kbd inline-flex items-center"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="currentColor" version="1.1" id="Capa_1" viewBox="0 0 490 490" xmlSpace="preserve" className="h-6 w-6 mr-2"><g><path d="M245,169.144c27.118,0,49.1-21.984,49.1-49.102S272.118,70.94,245,70.94c-27.118,0-49.104,21.984-49.104,49.102S217.882,169.144,245,169.144z M245,86.252c18.632,0,33.788,15.157,33.788,33.79c0,18.632-15.156,33.789-33.788,33.789s-33.791-15.157-33.791-33.789C211.208,101.41,226.368,86.252,245,86.252z"/><path d="M195.234,180.425c0,0-49.766,0.664-49.766,46.448c0,45.784,0,56.401,0,56.401s96.873,0,97.206,0L195.234,180.425z M160.781,226.873c0-20.502,14.669-27.52,25.216-29.915l32.752,71.003h-57.968V226.873z"/><path d="M344.531,283.274c0,0,0-10.617,0-56.401c0-45.784-49.766-46.448-49.766-46.448l-47.444,102.849H344.531z M304.003,196.958c10.546,2.395,25.216,9.411,25.216,29.915v41.089h-57.971L304.003,196.958z"/><polygon points="210.826,180.425 244.999,256.068 279.171,180.425 244.999,180.425"/><path d="M367.5,0H53.594v490h382.813V76.563L367.5,0z M367.818,23.242l48.85,54.277h-48.85V23.242z M68.906,474.688V15.313h283.599v77.52h68.589v381.855H68.906z"/><rect x="130.16" y="336.307" width="229.687" height="15.312"/><rect x="130.16" y="375.44" width="229.687" height="15.313"/><rect x="130.16" y="414.574" width="229.687" height="15.313"/></g></svg>Electro CV</kbd></span>
          <span className="lg:hidden text-xl font-semibold"><kbd className="kbd inline-flex items-center"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="currentColor" version="1.1" id="Capa_1" viewBox="0 0 490 490" xmlSpace="preserve" className="h-5 w-5 mr-1"><g><path d="M245,169.144c27.118,0,49.1-21.984,49.1-49.102S272.118,70.94,245,70.94c-27.118,0-49.104,21.984-49.104,49.102S217.882,169.144,245,169.144z M245,86.252c18.632,0,33.788,15.157,33.788,33.79c0,18.632-15.156,33.789-33.788,33.789s-33.791-15.157-33.791-33.789C211.208,101.41,226.368,86.252,245,86.252z"/><path d="M195.234,180.425c0,0-49.766,0.664-49.766,46.448c0,45.784,0,56.401,0,56.401s96.873,0,97.206,0L195.234,180.425z M160.781,226.873c0-20.502,14.669-27.52,25.216-29.915l32.752,71.003h-57.968V226.873z"/><path d="M344.531,283.274c0,0,0-10.617,0-56.401c0-45.784-49.766-46.448-49.766-46.448l-47.444,102.849H344.531z M304.003,196.958c10.546,2.395,25.216,9.411,25.216,29.915v41.089h-57.971L304.003,196.958z"/><polygon points="210.826,180.425 244.999,256.068 279.171,180.425 244.999,180.425"/><path d="M367.5,0H53.594v490h382.813V76.563L367.5,0z M367.818,23.242l48.85,54.277h-48.85V23.242z M68.906,474.688V15.313h283.599v77.52h68.589v381.855H68.906z"/><rect x="130.16" y="336.307" width="229.687" height="15.312"/><rect x="130.16" y="375.44" width="229.687" height="15.313"/><rect x="130.16" y="414.574" width="229.687" height="15.313"/></g></svg>El CV</kbd></span>
        </div>
        
        {/* Menu di Navigazione - Dropdown fino a lg */}
        <div className="lg:hidden dropdown dropdown-end">
          <button tabIndex={0} className="btn btn-accent lg:hidden lg:btn-md btn-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-accent rounded-box w-52 mt-3">
            <li><a href="#home" className="text-black hover:text-accent">Home</a></li>
            <li><a href="#about" className="text-neutral hover:text-accent">Chi Siamo</a></li>
            <li><a href="#services" className="text-neutral hover:text-accent">Servizi</a></li>
            <li><a href="#contact" className="text-neutral hover:text-accent">Contatti</a></li>
          </ul>
        </div>

        {/* Menu di Navigazione - Navbar per schermi grandi */}
        <nav className="hidden lg:inline-flex items-center space-x-4">
          <a href="#home" className="text-primary-900 hover:text-accent transition-colors duration-200">Home</a>
          <a href="#about" className="text-neutral hover:text-accent transition-colors duration-200">Chi Siamo</a>
          <a href="#services" className="text-neutral hover:text-accent transition-colors duration-200">Servizi</a>
          <a href="#contact" className="text-neutral hover:text-accent transition-colors duration-200">Contatti</a>
        </nav>

        {/* Pulsante Azione */}
        <div className="inline-flex items-center">
          <button className="btn btn-accent lg:btn-md btn-sm">Accedi</button>
        </div>
      </div>
    </header>



    <label className="swap swap-rotate">
      {/* this hidden checkbox controls the state */}
      <input type="checkbox" className="theme-controller" value="synthwave" onChange={changeTheme} />

      {/* sun icon */}
      <svg
        className="swap-off h-10 w-10 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24">
        <path
          d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
      </svg>

      {/* moon icon */}
      <svg
        className="swap-on h-10 w-10 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24">
        <path
          d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
      </svg>
    </label>

    {
      (
        (() => {
          let a = []; for (let i = 0; i < 50; i++) a.push(null); return a;
        })().map((_, i) => <br />)
      )
    }










  </>
}