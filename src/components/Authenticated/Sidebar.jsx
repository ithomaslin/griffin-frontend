import react, { useContext } from "react";
import { logo, dashboard, bot, positions, exchange, cart } from "../../assets";
import PageContext from "../../context/LocationContext";

const Sidebar = () => {
  const { page } = useContext(PageContext);

  return (
    <>
      {/* <!-- Sidebar Toggle --> */}
      <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center py-4">
          {/* <!-- Navigation Toggle --> */}
          <button type="button" className="text-gray-500 hover:text-gray-600" data-hs-overlay="#application-sidebar" aria-controls="application-sidebar" aria-label="Toggle navigation">
            <span className="sr-only">Toggle Navigation</span>
            <svg className="w-5 h-5" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
          </button>
          {/* <!-- End Navigation Toggle --> */}

          {/* <!-- Breadcrumb --> */}
          <ol className="ml-3 flex items-center whitespace-nowrap min-w-0" aria-label="Breadcrumb">
            <li className="flex items-center text-sm text-gray-800 dark:text-gray-400">
              <img src={logo} className="pr-3 w-9 h-9" alt="TradingLab Logo" />
              TradingLab
              <svg className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-400 dark:text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </li>
            <li className="text-sm font-semibold text-gray-800 truncate dark:text-gray-400" aria-current="page">
              Dashboard
            </li>
          </ol>
          {/* <!-- End Breadcrumb --> */}
        </div>
      </div>
      {/* <!-- End Sidebar Toggle --> */}

      {/* <!-- Sidebar --> */}
      <div 
        id="application-sidebar" 
        className="
          hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 
          transform hidden fixed top-0 left-0 bottom-0 z-[60] w-64 bg-tertiary 
          pt-7 pb-10 overflow-y-auto scrollbar-y 
          lg:block lg:translate-x-0 lg:right-auto lg:bottom-0"
        >
        <div className="px-6 flex">
          <img src={logo} className="pr-3" alt="TradingLab Logo" />
          <a className="flex-none text-xl font-semibold align-middle text-white dark:text-white" href="/" aria-label="Brand">TradingLab</a>
          <span className="w-16 h-5 ml-2 inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-[10px] font-light bg-orange-100 text-orange-800">
            <svg class="w-2.5 h-2.5 text-orange-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 21">
              <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M7.24 7.194a24.16 24.16 0 0 1 3.72-3.062m0 0c3.443-2.277 6.732-2.969 8.24-1.46 2.054 2.053.03 7.407-4.522 11.959-4.552 4.551-9.906 6.576-11.96 4.522C1.223 17.658 1.89 14.412 4.121 11m6.838-6.868c-3.443-2.277-6.732-2.969-8.24-1.46-2.054 2.053-.03 7.407 4.522 11.959m3.718-10.499a24.16 24.16 0 0 1 3.719 3.062M17.798 11c2.23 3.412 2.898 6.658 1.402 8.153-1.502 1.503-4.771.822-8.2-1.433m1-6.808a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"/>
            </svg>
            alpha
          </span>
        </div>

        <nav className="hs-accordion-group p-6 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
          <ul className="space-y-1.5">
            {/* Dashboard */}
            <li>
              <a className={`${ page == 'dashboard'? 'bg-shadow' : ''} flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white rounded-md hover:bg-shadow`} 
                href="/dashboard"
              >
                <img src={dashboard} alt="dashboard" className="w-3.5 h-3.5" />
                Dashboard
              </a>
            </li>

            {/* My Bots */}
            <li>
              <a className={`${ page == 'my-bot'? 'bg-shadow' : ''} flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white rounded-md hover:bg-shadow`} 
                href="/my-bots"
              >
                <img src={bot} alt="dashboard" className="w-4 h-4" />
                My Bots
              </a>
            </li>

            {/* Positions */}
            <li>
              <a className={`${ page == 'positions'? 'bg-shadow' : ''} flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white rounded-md hover:bg-shadow`} 
                href="/positions"
              >
                <img src={positions} alt="dashboard" className="w-4 h-4" />
                Positions
              </a>
            </li>

            {/* My Exchanges */}
            <li>
              <a className={`${ page == 'my-exchanges'? 'bg-shadow' : ''} flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white rounded-md hover:bg-shadow`} 
                href="/my-exchanges"
              >
                <img src={exchange} alt="dashboard" className="w-4 h-4" />
                My Exchanges
              </a>
            </li>

            {/* Marketplace */}
            <li>
              <a className={`${ page == 'marketplace'? 'bg-shadow' : ''} flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white rounded-md hover:bg-shadow`} 
                href="/marketplace"
              >
                <img src={cart} alt="dashboard" className="w-4 h-4" />
                Marketplace
              </a>
            </li>
          </ul>

          {/* Side menu second section */}
          <ul className="inline-flex pt-5 mt-5 border-t border-gray-200">
            <li className="flex">
              <a href="#" className="items-center p-2 text-xs font-medium text-white rounded-lg transition duration-75 hover:text-secondary">
                Docs
              </a>
            </li>
            <li className="flex text-xs items-center font-medium text-white">&#183;</li>
            <li className="flex">
              <a href="#" className="items-center p-2 text-xs font-medium text-white rounded-lg transition duration-75 hover:text-secondary">
                Help
              </a>
            </li>
            <li className="flex text-xs items-center font-medium text-white">&#183;</li>
            <li className="flex">
              <a href="#" className="items-center p-2 text-xs font-medium text-white rounded-lg transition duration-75 hover:text-secondary">
                Forum
              </a>
            </li>
          </ul>
          {/* End of side menu second section */}
        </nav>
      </div>
      {/* <!-- End Sidebar --> */}
    </>
  );
}

export default Sidebar;