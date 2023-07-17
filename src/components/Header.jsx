import { Navbar } from "./Navbar"
import { Socials } from "./Socials"
import { CiPlay1 } from "react-icons/ci";

export const Header = () => {
  return (
    <div className='heroSection'>
        <Navbar />
        <Socials />
        <div className="heroSideBox p-3">
          <div className="title">
            <div className="play">
              <p><CiPlay1 /></p>
            </div>
            <h3 className="text-xl text-white font-semibold"> A Story to Tell</h3>
          </div>
            <p className="text-sm text-white font-thin p-3"> From Nollywood to politics. Watch Funke Akindele`s journey into runneing for the office of the Deputy Govrnor</p>
        </div>
    </div>
  )
}
