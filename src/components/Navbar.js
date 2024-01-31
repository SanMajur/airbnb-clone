import airbnbLogo from "../images/airbnb-logo.png";

export default function Navbar() {
  return (
    <div className="py-5 pl-9 h-[70px] shadow-md flex">
      <img src={airbnbLogo} alt="airbnb logo" className="cursor-pointer max-w-[100px]" />
    </div>
  );
}
