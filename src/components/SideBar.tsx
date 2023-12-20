type SideBarProps = {};
const SideBar: React.FC<SideBarProps> = () => {
  return (
    <>
      <button
        type="button"
        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold text-white hover:text-grey-200 disabled:opacity-50 disabled:pointer-events-none"
        data-hs-overlay="#hs-overlay-right"
      >
        <svg
          className="block h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      <div
        id="hs-overlay-right"
        className="hs-overlay hs-overlay-open:translate-x-0 hidden translate-x-full fixed top-0 end-0 transition-all duration-300 transform h-full max-w-xs w-full z-[60] bg-white border-s"
      >
        <div className="flex justify-end items-center py-3 px-4 border-b">
          <button
            type="button"
            className="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
            data-hs-overlay="#hs-overlay-right"
          >
            <span className="sr-only">Close modal</span>
            <svg
              className="flex-shrink-0 w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
        <div className="p-4 z-[65]">
          <p className="text-gray-800 dark:text-gray-400">
            Some text as placeholder. In real life you can have the elements you have chosen. Like,
            text, images, lists, etc.
          </p>
        </div>
      </div>
    </>
  );
};
export default SideBar;
