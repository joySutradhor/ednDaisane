import Access from "./Access";
import HeroSeciton from "./HeroSeciton";
// import Myplatfrom from "./Myplatfrom";
import Youtube from "./Youtube";


const Home = () => {
    return (
        <div>
            <HeroSeciton></HeroSeciton>
            {/* <Myplatfrom></Myplatfrom> */}
            <Access></Access>
            <Youtube></Youtube>
        </div>
    );
};

export default Home;