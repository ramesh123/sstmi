export default function TopInfo() {
  return (
    <header className="bg-headerBg text-white py-2 px-4">
      <div className="container mx-auto max-w-7xl flex justify-between items-center">
        <div className="flex flex-col text-left">
          &nbsp;
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <img
            src="https://sstmi-website.s3.us-east-1.amazonaws.com/assets/logo/logo-mobile.png"
            alt="Sri Subramanya Swamy Cultural Center Logo"
            className="h-auto w-8 sm:w-10 md:w-12"
          />
          <div className="bg-gradient-to-r from-darkRed to-brightRed bg-clip-text text-transparent leading-tight">
            <div className="text-sm font-bold sm:text-base md:text-lg lg:text-xl">
              Sri Subramanya Swamy Cultural Center
            </div>
            <div className="text-xs sm:text-sm md:text-base">
              501(C)(3) Non-profit Organization
            </div>
          </div>
        </div>

        <div className="flex flex-col text-right">
          &nbsp;
        </div>
      </div>
    </header>
  );
}