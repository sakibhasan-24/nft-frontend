import Logo from "../../assets/logo/Logo";
import WalletButton from "../Button/WalletButton";

function Navbar() {
  return (
    <div className="max-w-full h-[73px] bg-[#000000CC] p-2 flex items-center justify-between md:px-10 px-4">
      <div className="flex-shrink-0">
        <Logo />
      </div>

      <div className="flex items-center gap-4 bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] px-4 py-2 rounded-full">
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6"
          viewBox="0 0 17 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.09375 0C0.990625 0 0.09375 0.896875 0.09375 2V12C0.09375 13.1031 0.990625 14 2.09375 14H14.0938C15.1969 14 16.0938 13.1031 16.0938 12V5C16.0938 3.89687 15.1969 3 14.0938 3H2.59375C2.31875 3 2.09375 2.775 2.09375 2.5C2.09375 2.225 2.31875 2 2.59375 2H14.0938C14.6469 2 15.0938 1.55313 15.0938 1C15.0938 0.446875 14.6469 0 14.0938 0H2.09375ZM13.0938 7.5C13.359 7.5 13.6133 7.60536 13.8009 7.79289C13.9884 7.98043 14.0938 8.23478 14.0938 8.5C14.0938 8.76522 13.9884 9.01957 13.8009 9.20711C13.6133 9.39464 13.359 9.5 13.0938 9.5C12.8285 9.5 12.5742 9.39464 12.3866 9.20711C12.1991 9.01957 12.0938 8.76522 12.0938 8.5C12.0938 8.23478 12.1991 7.98043 12.3866 7.79289C12.5742 7.60536 12.8285 7.5 13.0938 7.5Z"
            fill="white"
          />
        </svg>

        <WalletButton />
      </div>
    </div>
  );
}

export default Navbar;
