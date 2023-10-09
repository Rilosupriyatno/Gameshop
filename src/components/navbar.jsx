//import { Link } from "react-router-dom";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    // <nav id="Navbar" className="fixed w-full pt-3 pl-7">
    //   <div className="flex items-center justify-between">
    //     {/* div1 */}
    //     <div className="flex items-center">
    //       <div id="logo">
    //         <Link className="Gameshop" to="/">
    //           <h1 className="font-black text-3xl text-white">Gameshop</h1>
    //         </Link>
    //       </div>

    //       <div id="search-container" className="pl-5 mr-10 pt-2">
    //         <form action="/" className="searchform flex items-center">
    //           <i className="icon pl-2 mr-3">
    //             <svg
    //               width="26"
    //               height="26"
    //               viewBox="0 0 26 26"
    //               fill="none"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <g id="icons8-search-64 1">
    //                 <path
    //                   id="Vector"
    //                   d="M10.6336 2.92505C8.65817 2.92505 6.68286 3.67653 5.17974 5.17966C2.17349 8.18591 2.17349 13.0811 5.17974 16.0873C6.68286 17.5904 8.65325 18.3423 10.6439 18.3423C12.6345 18.3423 14.6049 17.5904 16.108 16.0873C19.094 13.0811 19.0936 8.18591 16.0874 5.17966C14.5843 3.67653 12.609 2.92505 10.6336 2.92505ZM10.6236 4.12357C12.2893 4.12357 13.9548 4.75294 15.2142 6.03262C17.7533 8.57169 17.7532 12.6953 15.2344 15.2343C12.6954 17.7734 8.57176 17.7734 6.0327 15.2343C3.49364 12.6953 3.49364 8.57169 6.0327 6.03262C7.29208 4.77325 8.95802 4.12357 10.6236 4.12357ZM10.6236 5.34232C9.22208 5.34232 7.90161 5.89059 6.9063 6.90622C5.95161 7.86091 5.42357 9.10005 5.36263 10.4407C5.34232 10.786 5.60646 11.05 5.95177 11.0703H5.972C6.297 11.0703 6.56107 10.8061 6.58138 10.4811C6.622 9.4452 7.04833 8.49044 7.75926 7.75919C8.53114 6.98731 9.54708 6.56107 10.6236 6.56107C10.969 6.56107 11.233 6.297 11.233 5.95169C11.233 5.60638 10.969 5.34232 10.6236 5.34232ZM7.10942 13C6.94781 13 6.79281 13.0642 6.67853 13.1785C6.56425 13.2927 6.50005 13.4477 6.50005 13.6093C6.50005 13.771 6.56425 13.926 6.67853 14.0402C6.79281 14.1545 6.94781 14.2187 7.10942 14.2187C7.27104 14.2187 7.42604 14.1545 7.54032 14.0402C7.6546 13.926 7.7188 13.771 7.7188 13.6093C7.7188 13.4477 7.6546 13.2927 7.54032 13.1785C7.42604 13.0642 7.27104 13 7.10942 13ZM16.9332 16.3515C16.7783 16.3515 16.626 16.4125 16.5143 16.5344C16.2705 16.7782 16.2705 17.164 16.5143 17.3874L17.0221 17.8952C16.9002 18.139 16.8392 18.4031 16.8392 18.6875C16.8392 19.175 17.0219 19.6422 17.3672 19.9875L19.9674 22.5468C20.333 22.9125 20.7999 23.0951 21.2671 23.0951C21.7343 23.0951 22.2015 22.9124 22.5672 22.5671C23.2781 21.8561 23.2781 20.6985 22.5672 19.9875L19.9674 17.3874C19.6221 17.0421 19.1548 16.8593 18.6673 16.8593C18.3829 16.8593 18.1188 16.9204 17.875 17.0422L17.3672 16.5344C17.2454 16.4125 17.0881 16.3515 16.9332 16.3515ZM18.6673 18.0579C18.8298 18.0579 18.9922 18.1189 19.0938 18.2408L21.6733 20.8203C21.9171 21.064 21.9171 21.4498 21.6733 21.6732C21.4296 21.917 21.0438 21.917 20.8204 21.6732L18.2408 19.114C18.119 18.9921 18.0579 18.8297 18.0579 18.6672C18.0579 18.5047 18.119 18.3423 18.2408 18.2408C18.3627 18.1189 18.5048 18.0579 18.6673 18.0579Z"
    //                   fill="#FB9830"
    //                 />
    //               </g>
    //             </svg>
    //           </i>
    //           <input
    //             className="searchbar"
    //             type="text"
    //             placeholder="Search..."
    //             autoComplete="off"
    //             name="search"
    //           />
    //         </form>
    //       </div>
    //     </div>

    //     {/* div2 */}
    //     <div className="flex justify-center pl-32">
    //       <div id="MenuList" className="text-base">
    //         <ul className="flex items-center gap-5">
    //           <li className="textlinkhover transition-transform">
    //             <Link className="Home" to="/">
    //               Home
    //             </Link>
    //           </li>
    //           <li className="textlinkhover transition-transform">
    //             <Link className="About-us" to="/About-us">
    //               About us
    //             </Link>
    //           </li>
    //           <li className="textlinkhover transition-transform">
    //             <Link className="How to buy" to="/Howtobuy">
    //               Shop
    //             </Link>
    //           </li>
    //           <li className="textlinkhover transition-transform">
    //             <Link className="News" to="/News">
    //               News
    //             </Link>
    //           </li>
    //           <li className="textlinkhover transition-transform">
    //             <Link className="Contact-us" to="/Contact-us">
    //               Contact us
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>

    //       <div id="Login" className="w-auto pl-10 pr-10">
    //         <ul className="flex items-center gap-2">
    //           <li>
    //             <a
    //               className="bg-[#FA9021] rounded-lg p-2 px-7 loginbuttonhover"
    //               href="/Login"
    //             >
    //               Login
    //             </a>
    //           </li>
    //           <span>|</span>
    //           <li>
    //             <a
    //               className="border border-solid rounded-lg border-[#FA9021] p-2 px-5 hover:bg-darkorange"
    //               href="/register"
    //             >
    //               Register
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
    <header>
      <nav class="bg-gray-800 p-2 fixed w-full z-10">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="/" class="flex items-center">
            <div id="logo">
              <Link className="Gameshop" to="/">
                <h1 className="font-black text-3xl text-white">Gameshop</h1>
              </Link>
            </div>
          </a>
          <div id="search-container" className="pl-5 mr-10 pt-2">
            <form action="/" className="searchform flex items-center">
              <i className="icon pl-2 mr-3">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="icons8-search-64 1">
                    <path
                      id="Vector"
                      d="M10.6336 2.92505C8.65817 2.92505 6.68286 3.67653 5.17974 5.17966C2.17349 8.18591 2.17349 13.0811 5.17974 16.0873C6.68286 17.5904 8.65325 18.3423 10.6439 18.3423C12.6345 18.3423 14.6049 17.5904 16.108 16.0873C19.094 13.0811 19.0936 8.18591 16.0874 5.17966C14.5843 3.67653 12.609 2.92505 10.6336 2.92505ZM10.6236 4.12357C12.2893 4.12357 13.9548 4.75294 15.2142 6.03262C17.7533 8.57169 17.7532 12.6953 15.2344 15.2343C12.6954 17.7734 8.57176 17.7734 6.0327 15.2343C3.49364 12.6953 3.49364 8.57169 6.0327 6.03262C7.29208 4.77325 8.95802 4.12357 10.6236 4.12357ZM10.6236 5.34232C9.22208 5.34232 7.90161 5.89059 6.9063 6.90622C5.95161 7.86091 5.42357 9.10005 5.36263 10.4407C5.34232 10.786 5.60646 11.05 5.95177 11.0703H5.972C6.297 11.0703 6.56107 10.8061 6.58138 10.4811C6.622 9.4452 7.04833 8.49044 7.75926 7.75919C8.53114 6.98731 9.54708 6.56107 10.6236 6.56107C10.969 6.56107 11.233 6.297 11.233 5.95169C11.233 5.60638 10.969 5.34232 10.6236 5.34232ZM7.10942 13C6.94781 13 6.79281 13.0642 6.67853 13.1785C6.56425 13.2927 6.50005 13.4477 6.50005 13.6093C6.50005 13.771 6.56425 13.926 6.67853 14.0402C6.79281 14.1545 6.94781 14.2187 7.10942 14.2187C7.27104 14.2187 7.42604 14.1545 7.54032 14.0402C7.6546 13.926 7.7188 13.771 7.7188 13.6093C7.7188 13.4477 7.6546 13.2927 7.54032 13.1785C7.42604 13.0642 7.27104 13 7.10942 13ZM16.9332 16.3515C16.7783 16.3515 16.626 16.4125 16.5143 16.5344C16.2705 16.7782 16.2705 17.164 16.5143 17.3874L17.0221 17.8952C16.9002 18.139 16.8392 18.4031 16.8392 18.6875C16.8392 19.175 17.0219 19.6422 17.3672 19.9875L19.9674 22.5468C20.333 22.9125 20.7999 23.0951 21.2671 23.0951C21.7343 23.0951 22.2015 22.9124 22.5672 22.5671C23.2781 21.8561 23.2781 20.6985 22.5672 19.9875L19.9674 17.3874C19.6221 17.0421 19.1548 16.8593 18.6673 16.8593C18.3829 16.8593 18.1188 16.9204 17.875 17.0422L17.3672 16.5344C17.2454 16.4125 17.0881 16.3515 16.9332 16.3515ZM18.6673 18.0579C18.8298 18.0579 18.9922 18.1189 19.0938 18.2408L21.6733 20.8203C21.9171 21.064 21.9171 21.4498 21.6733 21.6732C21.4296 21.917 21.0438 21.917 20.8204 21.6732L18.2408 19.114C18.119 18.9921 18.0579 18.8297 18.0579 18.6672C18.0579 18.5047 18.119 18.3423 18.2408 18.2408C18.3627 18.1189 18.5048 18.0579 18.6673 18.0579Z"
                      fill="#FB9830"
                    />
                  </g>
                </svg>
              </i>
              <input
                className="searchbar"
                type="text"
                placeholder="Search..."
                autoComplete="off"
                name="search"
              />
            </form>
          </div>

          <div class="flex items-center lg:order-2">
            <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-2 lg:mt-0">
              <li>
                <a
                  className="bg-[#FA9021] rounded-lg p-2 px-7 loginbuttonhover"
                  href="/Login"
                >
                  Login
                </a>
              </li>
              <li>
                {" "}
                <a
                  className="border border-solid rounded-lg border-[#FA9021] p-2 px-5 hover:bg-darkorange"
                  href="/register"
                >
                  Register
                </a>
              </li>
            </ul>

            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                class="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div class="hidden pl-72 w-full lg:flex lg:w-auto" id="mobile-menu-2">
            <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  News
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
