import React from 'react';
import * as Icons from '../../assets';

const NavItems = ({item, location, index}) => {
  return (<>
      {item.children
        ? (
          <>
            <button
              type="button"
              className="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              aria-controls="dropdown-pages"
              data-collapse-toggle="dropdown-pages"
            >
              <item.icon isActive={false} />
              <span className="flex-1 ml-3 text-left whitespace-nowrap">{item.label}</span>
              <Icons.ArrowDown isActive={false}/>
            </button>
            <ul id="dropdown-pages" className="hidden py-2 space-y-2">
              {item.children.map((child, index) => (
                <li key={index}>
                  <a
                    href={child.path}
                    className={`
                      flex items-center p-2 pl-11 w-full text-base font-medium ${location.pathname === item.path ? 'text-primary' : 'text-gray-900'} 
                      rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700
                    `}
                  >
                    {child.label}
                  </a>
                </li>
              ))}
            </ul>
          </>
        ) 
        : (
            <a href={item.path}
              className={`
                flex items-center p-2 text-base font-medium ${location.pathname === item.path ? 'text-primary' : 'text-gray-900'} 
                rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group
              `}
            >
              <item.icon
                isActive={location.pathname === item.path} 
              />
              <span className="ml-3">{item.label}</span>
            </a>
          
        )
      }
    </>
  );
}

export default NavItems;