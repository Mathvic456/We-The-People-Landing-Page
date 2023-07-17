import { Navbar } from "./Navbar"
import { Socials } from "./Socials"

export const Header = () => {
  return (
    <div className='heroSection'>
        <Navbar />
        <Socials />
        <div className="heroSideBox">
            <h3 className="text-2xl text-white font-semibold">A Story to Tell</h3>
            <p>From Nollywood to politics. Watch Funke Akindele`s journey into runneing for the office of the Deputy Govrnor</p>
        </div>
    </div>
  )
}
