import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { MdOutlineExplore } from "react-icons/md";
import { GoTag } from "react-icons/go";
import { MdOutlinePersonOutline } from "react-icons/md";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { auth } from "../firebase.config";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
          setUser(user);
      });
      return unsubscribe;
  }, []);

  const handleSignOut = () => {
      auth.signOut().then(() => {
          setUser(null);
          navigate("/sign-in");
      });
  };
  return (
      <Disclosure
          as="nav"
          className="bg-gray-800 fixed inset-x-0 bottom-0 md:relative md:bottom-auto z-40"
      >
          <div className="w-full px-2 sm:px-4 lg:px-8">
              <div className="relative w-full gap-8 flex h-16 items-center justify-center md:justify-between">
                  <div className="flex items-center px-2 lg:px-0 w-full md:w-auto">
                      <div className="flex-shrink-0 hidden md:flex mr-4">
                          <img
                              alt="Your Company"
                              src="/favicon.ico"
                              className="h-8 w-auto"
                          />
                      </div>
                      <div className="lg:ml-6 lg:block w-full md:w-auto">
                          <div className="flex space-x-4 justify-between">
                              {/* Explore Link */}
                              <NavLink
                                  to="/"
                                  className={({ isActive }) =>
                                      isActive
                                          ? "rounded-md px-3 py-2 text-sm font-medium bg-gray-700 text-white"
                                          : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                                  }
                              >
                                  <div className="flex flex-col md:flex-row items-center justify-center">
                                      <MdOutlineExplore className="text-xl mb-1 md:mr-[10px] md:mb-0" />
                                      <span>Explore</span>
                                  </div>
                              </NavLink>

                              {/* Offers Link */}
                              <NavLink
                                  to="/offers"
                                  className={({ isActive }) =>
                                      isActive
                                          ? "rounded-md px-3 py-2 text-sm font-medium bg-gray-700 text-white"
                                          : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                                  }
                              >
                                  <div className="flex flex-col md:flex-row items-center justify-center">
                                      <GoTag className="text-xl mb-1 md:mr-[10px] md:mb-0" />
                                      <span>Offers</span>
                                  </div>
                              </NavLink>

                              {/* Profile Link */}
                              <NavLink
                                  to="/profile"
                                  className={({ isActive }) =>
                                      isActive
                                          ? "rounded-md px-3 py-2 text-sm font-medium bg-gray-700 text-white"
                                          : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                                  }
                              >
                                  <div className="flex flex-col md:flex-row items-center justify-center">
                                      <MdOutlinePersonOutline className="text-xl mb-1 md:mr-[10px] md:mb-0" />
                                      <span>Profile</span>
                                  </div>
                              </NavLink>
                          </div>
                      </div>
                  </div>
                  <div className="hidden md:flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end w-full items-center gap-2">
                      <div className="w-full max-w-7xl">
                          <label htmlFor="search" className="sr-only">
                              Search
                          </label>
                          <div className="relative ">
                              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                  <MagnifyingGlassIcon
                                      aria-hidden="true"
                                      className="h-5 w-5 text-gray-400"
                                  />
                              </div>
                              <input
                                  id="search"
                                  name="search"
                                  type="search"
                                  placeholder="Search"
                                  className="block w-full rounded-md border-0 bg-gray-700 py-1.5 pl-10 pr-3 text-gray-300 placeholder:text-gray-400 focus:bg-white focus:text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
                              />
                          </div>
                      </div>
                      <button
                          onClick={() => {
                              user ? handleSignOut() : navigate("/sign-in");
                          }}
                          className="text-white  bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg px-6 py-1.5 text-center whitespace-nowrap"
                      >
                          {user ? "Sign Out" : "Sign In"}
                      </button>
                  </div>
              </div>
          </div>
      </Disclosure>
  );
}