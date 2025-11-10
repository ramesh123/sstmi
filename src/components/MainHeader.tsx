export default function MainHeader() {
  return (
    <header className="bg-headerBg py-4 px-4 md:px-8 shadow-lg relative">
      <div className="container mx-auto max-w-screen-xl flex flex-col md:flex-row items-center md:justify-between">
        {/* Logo */}
        <div className="flex-shrink-0 text-center md:text-left">
          <img
            src="https://sstmi-website.s3.us-east-1.amazonaws.com/assets/logo/logo-mobile.png"
            alt="Sri Subramanya Swamy Cultural Center Logo"
            className="w-16 md:w-28 lg:w-36 h-auto mx-auto md:mx-0 md:ml-4 transition-transform duration-300 hover:scale-110"
          />
        </div>

        {/* Text Section */}
        <div className="mt-4 md:mt-0 md:ml-6 flex-grow text-center md:text-left">
          {/* Title */}
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-wide bg-gradient-to-r from-darkRed to-brightRed bg-clip-text text-transparent text-shadow-md leading-tight md:leading-snug">
            Sri Subramanya Swamy Cultural Center
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg lg:text-xl font-semibold text-darkGreen tracking-wide text-shadow-sm text-center">
            MURUGAR KOVIL
          </p>

          {/* Address */}
          <p className="text-xs md:text-sm lg:text-base text-darkRed font-medium mt-2 leading-normal text-center">
            31618 Grand River Ave, Farmington, MI 48336
          </p>

          {/* Non-Profit Info */}
          <p className="text-xs md:text-sm lg:text-base font-medium text-darkGreen mt-2 leading-normal text-center">
            501(C)(3) Non-profit Organization
          </p>
        </div>
      </div>


      {/* Scrolling Text */}
      <div id="main-header-scrolling" className="mt-2">
        <div className="scrolling-text">
          | Temple Timings: Sat & Sun 9 AM–8:30 PM | Mon - Fri 9 AM–12 PM, 5:30–8:30 PM 
          | Temple Timings: Sat & Sun 9 AM–8:30 PM | Mon - Fri 9 AM–12 PM, 5:30–8:30 PM 
          | Temple Timings: Sat & Sun 9 AM–8:30 PM | Mon - Fri 9 AM–12 PM, 5:30–8:30 PM 
          | Temple Timings: Sat & Sun 9 AM–8:30 PM | Mon - Fri 9 AM–12 PM, 5:30–8:30 PM 
        </div>
      </div>

    </header>
  );
}
