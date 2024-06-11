import Homedice from '../assets/dicesibg.png'

function Home(){
    return(
        <>
        <div className="home-container">
            <div className="dice-img">
               <img src={Homedice} alt="" />
            </div>
            <div className="dice-details">

            </div>
        </div>
        </>
    )
}

export default Home