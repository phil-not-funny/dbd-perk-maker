import { Disclosure } from "@headlessui/react";
import Logo from "./Logo";
import Link from "next/link";
import { NavBar } from "./RichText";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar: React.FC<{}> = ({}) => {
  let navigation = [{ name: "Solo Perk", href: "/perkcreator?amount=1" }];

  return (
    <Disclosure as="nav" className={`bg-hoverDark text-`}>
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 content-center flex flex-row items-center">
            <div className="relative flex flex-row items-center justify-between h-24">
              <div className="absolute inset-y-0 left-0 flex flex-row items-center sm:hidden">
                <Disclosure.Button
                  className={`transition ease-in-out duration-150 inline-flex items-center justify-center p-2 rounded-md focus:outline-none text-white hover:bg-hoverDark`}
                >
                  <span className="sr-only">Open Main Menu</span>
                  {open ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                {
                  <div className="flex-shrink-0 flex items-center">
                    <Link href={"/"} className="no-underline">
                      <Logo
                        className="block lg:hidden border-0"
                        rounded={false}
                      />
                    </Link>
                    <Link href={"/"} className="no-underline">
                      <Logo
                        className="hidden lg:block border-0"
                        rounded={false}
                      />
                    </Link>
                  </div>
                }
                <div className="hidden sm:flex items-center sm:ml-6 pt-1">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          "text-white hover:bg-dark",
                          "transition ease-in-out duration-150 px-3 py-2 rounded-md text-md self-center text-white sm:tracking-wider text-base md:text-lg font-medium uppercase"
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    "text-white hover:bg-hoverDark hover:text-white",
                    "transition ease-in-out duration-150 block px-3 py-2 rounded-md text-white sm:tracking-wider text-base md:text-lg font-medium uppercase"
                  )}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
