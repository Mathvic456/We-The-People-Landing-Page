import { Navbar } from "./Navbar"
import { Socials } from "./Socials"
import { CiPlay1 } from "react-icons/ci";

export const Header = () => {
  return (
    <div className='heroSection'>
        <Navbar />
        <Socials />
        <div className="wrapper">
          <div className="heroSideBox p-3">
            <div className="title">
              <div className="play">
                <p><CiPlay1 /></p>
              </div>
              <h3 className="text-xl text-white font-semibold"> A Story to Tell</h3>
            </div>
              <p className="text-sm text-white font-thin p-3"> From Nollywood to politics. Watch Funke Akindele`s journey into runneing for the office of the Deputy Govrnor</p>
          </div>

          <div className="heroRightText">
            <h2>
              For the People <br /> and By <span>The People</span>
            </h2>
            <p>Know your leaders, stay informed on current updates, <br /> create and share polls, and join online town halls to <br /> stay updated about the Nigerian political spaceå</p>
          </div>
        </div>
    </div>
  )
}
