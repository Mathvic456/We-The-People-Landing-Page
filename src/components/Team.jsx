import './team.css'
import team1 from '../images/team1.png'
import team2 from '../images/team2.png'
import team3 from '../images/team3.png'
import team4 from '../images/team4.png'
export const Team = () => {
  return (
    <div className='team-wrapper'>
        <div className="team-details">
            <img src={team1}/>
            <img src={team2}/>
            <img src={team3}/>
            <img src={team4}/>
        </div>
        <div className="team-text">
        <h1 className='text-[#E3902B] text-left font-bold text-5xl mt-10'>The Team</h1>
        <p className='details'>Our team comprises a young urban generation of people 
            with a passion to strengthen our democracy and give a voice to the young generation.
             Over the years, we have watched various policies, 
             strategies, and actions which have caused damage 
             to the youth, and the country as a whole. It is time for our 
             leaders to hear us and we have put together a team of zealots 
             who will bring the unfiltered voices of Nigerians directly to the leaders.</p>
        </div>
    </div>
  )
}
