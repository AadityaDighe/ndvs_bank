import DigitalBankingServices from "./DigitalBankingServices "
import HomePageCarousel from "./HomePageCarousel"
import LoanCalculator from "./LoanCalculator"
import Spotlight from "./Spotlight"

const Home =()=>{
    return(
        <div>
            <HomePageCarousel />
            <DigitalBankingServices />
            <Spotlight />
            <LoanCalculator />
        </div>
    )
}

export default Home