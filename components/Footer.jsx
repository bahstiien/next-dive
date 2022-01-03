import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 pt-4 pb-8 xl:pt-8">
      <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 text-gray-400 dark:text-gray-300">
        <ul className="text-lg border-t border-gray-200 mb-8 flex-row font-light pb-8 flex flex-wrap justify-center">
          <li className="w-1/2 md:w-1/3 lg:w-1/3">
            <div className="text-center mt-6">
              <h2 className="text-gray-500 dark:text-gray-200 text-md uppercase mb-4">
                Coté plongeurs
              </h2>
              <ul>
                <li className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                  <Link href="#">Elements</Link>
                </li>
                <li className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                  <Link href="#">Forms</Link>
                </li>
                <li className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                  <Link href="#">Commerces</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="w-1/2 md:w-1/3 lg:w-1/3">
            <div className="text-center mt-6">
              <h2 className="text-gray-500 dark:text-gray-200 text-md uppercase mb-4">
                Coté club
              </h2>
              <ul>
                <li className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                  <Link href="#">Github</Link>
                </li>
                <li className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                  <Link href="#">Facebook</Link>
                </li>
                <li className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                  <Link href="#">Twitter</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="w-1/2 md:w-1/3 lg:w-1/3">
            <div className="text-center mt-6">
              <h2 className="text-gray-500 dark:text-gray-200 text-md uppercase mb-4">
                Infos
              </h2>
              <ul>
                <li className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                  <Link href="/about">A propos</Link>
                </li>

                <li className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                  <Link href="/contact">Contact</Link>
                </li>
                <li className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                  <Link href="/mentions">Mentions légales</Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <div className="pt-8 flex border-t border-gray-200 max-w-xs mx-auto items-center justify-between">
          <Link href="#">
            <LinkedInIcon fontSize="large" color="primary" />
          </Link>
          <Link href="#">
            <FacebookIcon fontSize="large" color="primary" />
          </Link>
          <Link href="#">
            <InstagramIcon fontSize="large" color="primary" />
          </Link>
          <Link href="#">
            <TwitterIcon fontSize="large" color="primary" />
          </Link>
        </div>
        <div className="text-center pt-10 sm:pt-12 font-light flex items-center justify-center">
          <form className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
            <div className=" relative ">
              <input
                type="text"
                id='"form-subscribe-Subscribe'
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                placeholder="Email"
              />
            </div>
            <button
              className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-purple-200"
              type="submit"
            >
              Newsletter
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
