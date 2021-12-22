import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/solid";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import scubaLogo from "../public/images/scubaLogo.png";
import Link from "next/link";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";
import DarkMode from "./Layout/DarkMode";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Dashboard", href: "/" },
  { name: "Inscrption", href: "/registration" },
  { name: "Clubs", href: "/clubs" },
  { name: "Contact", href: "/contact" },
];
const userNavigation = [
  { name: "Dashboard", href: "/PrivateRoute/dashboardAdmin" },
  { name: "Paramètres", href: "#" },
  { name: "Deconnexion", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example(props) {
  const { data, status } = useSession();
  return (
    <div>
      <Head>
        <title>{props.name}</title>

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Disclosure as="header" className="bg-white shadow">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8">
              <div className="relative h-16 flex justify-between">
                <div className="relative z-10 px-2 flex lg:px-0">
                  <div className="flex-shrink-0 flex flex- items-center">
                    <Link href="/">
                      <img
                        className="block h-12 w-auto"
                        src="https://cdn-icons-png.flaticon.com/512/2972/2972069.png"
                        alt="ScubaLogo"
                      />
                    </Link>
                    <h2 className="text-md pl-4 italic font-round text-blue-400">
                      <Link href="/">ScubApp</Link>
                    </h2>
                    <DarkMode />
                  </div>
                </div>
                <div className="mt-4">
                  {status === "unauthenticated" && (
                    <div onClick={() => signIn()}>
                      {" "}
                      <PermContactCalendarIcon />
                    </div>
                  )}
                  {status === "authenticated" && (
                    <div onClick={() => signOut()}>
                      <ExitToAppIcon />
                    </div>
                  )}
                </div>
                <nav
                  className="hidden lg:py-2 lg:flex lg:space-x-8 font-round"
                  aria-label="Global"
                >
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-100 text-gray-900"
                          : "text-gray-900 hover:bg-gray-50 hover:text-gray-900",
                        "rounded-md py-2 px-3 inline-flex items-center text-sm font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>
                <div className="relative z-10 flex items-center lg:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="rounded-md mt-10 p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center mt-12">
                  {/* Profile dropdown */}
                  <Menu as="div" className="flex-shrink-0 relative ml-4">
                    {({ open }) => (
                      <>
                        <div>
                          <Menu.Button className="bg-white rounded-full flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-8 w-8 rounded-full"
                              src={user.imageUrl}
                              alt="photo of the user"
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items
                            static
                            className="origin-top-right  absolute  right-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none"
                          >
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block py-2 px-4 text-sm text-gray-700"
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </>
                    )}
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel
              as="nav"
              className="lg:hidden"
              aria-label="Global"
            >
              <div className="pt-2 pb-3 px-2 space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-100 text-gray-900"
                        : "text-gray-900 hover:bg-gray-50 hover:text-gray-900",
                      "block rounded-md py-2 px-3 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="border-t border-gray-200 pt-4 pb-3">
                <div className="px-4 flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={user.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-gray-800">
                      {user.name}
                    </div>
                    <div className="text-sm font-medium text-gray-500">
                      {user.email}
                    </div>
                  </div>
                </div>
                <div className="mt-3 px-2 space-y-1">
                  {userNavigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
// const Header = (props) => {
//   return (
//     <div className="font-inter  text-gray-600  p-10 ">
//       <Head>
//         <title>{props.name}</title>
//         <meta name="viewport" content="initial-scale=1.0, width=device-width" />
//       </Head>
//       <div className="flex">
//         <ul className="flex flex-row font-round">
//           <li className="pl-4 ">
//             <Link href="/"> Accueil </Link>
//           </li>
//           <li className="pl-4 ">
//             <Link href="/registration"> Inscription </Link>
//           </li>
//           <li className="pl-4 ">
//             <Link href="/clubs"> Nos clubs partenaires </Link>
//           </li>
//           <li className="pl-4 ">
//             <Link href="/contact"> Contact </Link>
//           </li>
//         </ul>
//         <div className="flex-end ml-24">
//           <AccountCircleIcon fontSize="large" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
