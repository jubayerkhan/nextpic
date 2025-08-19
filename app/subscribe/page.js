import Navbar from "../components/Navbar";
import movie_icon from "@/public/assets/movie_icon.png";
import series from "@/public/assets/series.png";
import book from "@/public/assets/book.png";
import li_icon from "@/public/assets/li_icon.png";
import Image from "next/image";


export default function Home() {
  return (
    <div className="container_fluid md:pb-20 pb-10">
      <Navbar />
      {/* heading section */}
      <div className="max-w-[993px] mx-auto px-4 md:px-0">
        <div className="subscribe_page_icon_cards_div">
          <div className="subscribe_page_icon_cards">
            <div className='filter_option_img_div bg-[#8A38F5]'>
              <Image src={movie_icon} alt='movie_icon' />
            </div>
          </div>
          <div className="subscribe_page_icon_cards">
            <div className='filter_option_img_div bg-[#F316B0]'>
              <Image src={series} alt='series' />
            </div>
          </div>
          <div className="subscribe_page_icon_cards">
            <div className='filter_option_img_div bg-[#0C8CE9]'>
              <Image src={book} alt='book' />
            </div>
          </div>
        </div>
        <h1 className="subscribe_page_title">
          Unlock Unlimited Entertainment with <span className="subscribe_page_title_nextpic">NextPick</span>
        </h1>
        <p className="subscribe_page_subtitle">Movies, Series & Books in one place. Personalized just for you. <a href="" className="subscribe_page_subtitle_link">Start Free Trial</a></p>
      </div>
      {/* pricing section */}
      <div className="pricing_section px-4 md:px-0">
        <div className="pricing_section_top_div">
          <p className="subscribe_page_monthly">Monthly</p>
          <input
            type="checkbox"
            className="toggle border-[#7E8598] bg-[#7E8598] checked:border-[#7E8598] checked:bg-[#7E8598] checked:text-white"
          />
          <p className="subscribe_page_yearly">Yearly</p>
          <p className="subscribe_page_off">
            30% Off
          </p>
        </div>
        <div className="pricing_card_body">
          <h3 className="pricing_card_title">NextPick Premium</h3>
          <p className="pricing_card_price">$90.99<span className="text-2xl text-[#7E8598]">/year</span> </p>
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
          <button className="subscrive_page_trial_btn">
            Start Free Trial
          </button>
          <p className="subscrive_page_pricing_bottom_text">Join 70,000+ satisfied subscribers</p>
        </div>
      </div>
      {/* question section */}
      <div className="px-4 md:px-0 max-w-[1128px] mx-auto">
        <h2 className="question_section_title">Frequently Asked Questions</h2>
        <div className="collapse collapse-arrow bg-[#2d304c] border-2 border-[#384056] mb-6">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title font-semibold text-lg">Can I cancel my subscription anytime?</div>
          <div className="collapse-content">Yes, you can cancel your subscription at any time. No questions asked, no cancellation fees. Your subscription will remain active until the end of your current billing period.</div>
        </div>
        <div className="collapse collapse-arrow bg-[#2d304c] border-2 border-[#384056] mb-6">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold text-lg">What's included in my subscription?</div>
          <div className="collapse-content">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
        </div>
        <div className="collapse collapse-arrow bg-[#2d304c] border-2 border-[#384056] mb-6">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold text-lg">How does the recommendation system work?</div>
          <div className="collapse-content">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
        </div>
        <div className="collapse collapse-arrow bg-[#2d304c] border-2 border-[#384056] mb-6">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold text-lg">Can I use Nextpick on multiple devices?</div>
          <div className="collapse-content">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
        </div>
        <div className="collapse collapse-arrow bg-[#2d304c] border-2 border-[#384056] mb-6">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold text-lg">Is there a free trial?</div>
          <div className="collapse-content">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
        </div>
      </div>
    </div>
  );
}
