import React from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { NavLink } from "react-router-dom";

const navigation = [
  { name: "Men", href: "/Men" },
  { name: "Women", href: "/Women" },
  { name: "Child", href: "/child" },
];

export default function TheNavbar() {
  return (
    <Disclosure as="nav" className="bg-teal-500 ">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2  sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex flex-1 items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 
                 hover:text-white focus:outline-none"
                >
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden items-center flex-1 justify-center md:flex md:items-stretch md:justify-start">
                <div className="md:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={({ isActive }) =>
                          isActive
                            ? "border-b-2  text-white text-sm px-4 py-2"
                            : "text-gray-100 transform hover:-translate-y-0.5 hover:text-white block px-4 py-2 text-sm transition-all duration-500"
                        }
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0 flex items-center">
                <NavLink
                  to="/"
                  className="flex items-center justify-center text-white font-semibold font-logo h-8 w-auto text-center
                     transform hover:-translate-y-1 hover:text-white text-2xl px-4 py-2 transition-all duration-300 rounded"
                >
                  SyarDev
                </NavLink>
              </div>

              <div className="flex flex-1 flex-shrink-0 items-center justify-end pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className=" relative z-10">
                  <div>
                    <Menu.Button className="flex text-gray-200 rounded-full focus:outline-none focus:ring-white">
                      {/* <span className="sr-only">Open user menu</span> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <NavLink
                            to="/profile"
                            className={({ isActive }) =>
                              isActive
                                ? "bg-gray-100 block px-4 py-2 text-sm text-gray-700"
                                : "block px-4 py-2 text-sm text-gray-700"
                            }
                          >
                            Your Profile
                          </NavLink>
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                          <button
                            // onClick={() => {
                            //   dispatch(logOut());
                            //   navigate("/login");
                            // }}
                            className={
                              (({ isActive }) =>
                                isActive ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700")
                            }
                          >
                            Sign out
                          </button>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-gray-900 text-white text-sm rounded px-4 py-2"
                      : "text-gray-200 hover:bg-teal-700 hover:text-white block px-4 py-2 text-sm transition-all duration-300 rounded "
                  }
                  // aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
