import li_icon from "@/public/assets/li_icon_2.png";
import sign_in from "@/public/assets/sign_in.png";
import logo from "@/public/assets/logo.svg";
import Image from "next/image";


export default function Home() {
  return (
    <div className="relative bg-[url('/assets/bg_sign_in.svg')] bg-no-repeat 2xl:py-[125px] py-20 h-screen md:h-auto">
      <div className="absolute inset-0 bg-black/60"></div>
      {/* pricing section */}
      <div className="relative pricing_section px-4 md:px-0">
        <div className="border-2 border-[#384056] bg-white/10 backdrop-blur-[10px] md:py-12 py-6 md:px-6 px-5 rounded-[40px]">
          <Image src={logo} alt="logo" className="md:w-[280px] w-[200px] mx-auto md:pb-12 pb-5"/>
          <h4 className="text-center text-2xl font-semibold pb-[5px]">Get Started</h4>
          <p className="text-center md:pb-6 pb-4">Sign in or create your account to continue</p>
          <button className="subscrive_page_signin_btn text-white bg-gradient-to-l from-[#6C3DF0] to-[#FF4F6D] flex gap-2.5 items-center justify-center mx-auto md:mb-12 mb-5 py-3 w-full rounded-[10px] cursor-pointer hover:opacity-90 transition duration-300 ease-in-out">
            <Image src={sign_in} alt="sign_in"/>
            <span>Join NextPick</span>
          </button>
          <p className="text-2xl font-semibold md:pb-6 pb-4">Benefits of Subscription</p>
          <ul>
            <li className="subscrive_page_ul_li">
              <span className="ul_li_span">
                <Image src={li_icon} alt="li_icon" />
              </span>
              Unlimited access to Movies, Series & Books
            </li>
            <li className="subscrive_page_ul_li">
              <span className="ul_li_span">
                <Image src={li_icon} alt="li_icon" />
              </span>
              AI-powered personalized recommendations
            </li>
            <li className="subscrive_page_ul_li">
              <span className="ul_li_span">
                <Image src={li_icon} alt="li_icon" />
              </span>
              Save unlimited Watchlists & Reading Lists
            </li>
            <li className="subscrive_page_ul_li">
              <span className="ul_li_span">
                <Image src={li_icon} alt="li_icon" />
              </span>
              Premium ad-free experience
            </li>
            <li className="subscrive_page_ul_li">
              <span className="ul_li_span">
                <Image src={li_icon} alt="li_icon" />
              </span>
              Sync across all devices
            </li>
            <li className="subscrive_page_ul_li">
              <span className="ul_li_span">
                <Image src={li_icon} alt="li_icon" />
              </span>
              Cancel anytime
            </li>
          </ul>
          <p className="sigh_in_page_pricing_bottom_text">Join 70,000+ satisfied subscribers</p>
        </div>
      </div>
    </div>
  );
}
