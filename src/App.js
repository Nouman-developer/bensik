
import './App.css';
import logo from "./assets/Logo.png"
import heroImg from "./assets/hero image.png"
import firstComp from "./assets/image 527.png"
import secComp from "./assets/image 528.png"
import thiComp from "./assets/image 529.png"
import forComp from "./assets/image 530.png"
import Button from './components/button';
import FindCards from './components/findCards';
import icon01 from "./assets/icon 01.png"
import icon02 from "./assets/icon 02.png"
import icon03 from "./assets/icon 03.png"
import vector from "./assets/Vector 1394.png"
import PropartyCard from './components/propartyCard';
import firstProparty from "./assets/proparty1.png"
import Bed from "./assets/Bed.png"
import Tub from "./assets/Tub.png"
import secondProparty from "./assets/proparty2.png"
import thirdProparty from "./assets/proparty3.png"
import forthProparty from "./assets/proparty4.png"
import backGround from "./assets/BG.png"
import topi from "./assets/topi.png"
import rect from "./assets/rect.png"
import stars from "./assets/stars.png"
import searchIcon from "./assets/searchIcon.png"
import lastLogo from "./assets/lastLogo.png"
function App() {

  return (
    <div className="App">
      <div className='first-row'>

        <img src={logo} className="logo" alt="" />
        <p className='home'>Home</p>
        <p className='about'> About us</p>
        <p className='feat'>Features</p>
        <p className='contact'>Contact</p>
        {/* <p className='in'>Sign in</p> */}
        <Button text={"Sign in"} bgColor={"#fff"} color={"#2289FF"} mgLeft={60} />
        <Button text={"Sign up"} bgColor={'#2289FF'} color={"#fff"} mgLeft={18} />
        {/* <p className='up'>Sign up</p> */}
      </div>
      <div className='mainDiv'>
        <div>

          <p className='heading'>Search for Homes in your Neighborhood</p>
          <p className='secondLine'>Online Estate Agency, the modern way to sell your own home. You can use griffin residential to market your property.</p>
          <div className='thirdLine'>
            <div>
              <p className='add'>Address</p>
              <p className='road'>587 Bridgeton Road</p>
            </div>
            <div>
              <p className='city'>City</p>
              <p className='paso'>El Paso, Texas</p>
            </div>
            <div>
              <button className='search'>Search</button>
            </div>

          </div>

        </div>


        <div><img src={heroImg} alt="" /></div>


      </div>
      <div className='fourthLine'>
        <div className='firstComp'><img src={firstComp} alt="" /></div>
        <div className='secComp'><img src={secComp} alt="" /></div>
        <div className='thiComp'><img src={thiComp} alt="" /></div>
        <div className='forComp'><img src={forComp} alt="" /></div>
      </div>
      <div className='fifthLine'><p>What Can We Help You Find?</p></div>
      <div className='icons'>
        <FindCards imgSrc={icon01} text={"Buy a home"} desc={"With over 1 million+ homes for sale available on the website, Trulia can match you with a house."} />
        <FindCards imgSrc={icon02} text={"Rent a home"} desc={"With 35+ filters and custom keyword search, Trulia can help you find a home."} />
        <FindCards imgSrc={icon03} text={"See neighborhoods"} desc={"With more neighborhood insights than any other real estate website."} />


      </div>
      <div>
        <div className='trending'>
          <div><p className='our'>Our trending latest proparty</p>
            <p className='unique'>Our unique process gives you peace of mind from home rent to services</p></div>
          <button className='type'>Property type <img className='vector' src={vector} alt="" /></button>
          <button className='seeAll'>See All Property</button>
        </div>
        <div className='snaps'>
          <div className='snaps1'>

            <PropartyCard img={firstProparty}
              Bed={Bed} Tub={Tub} price={"$259,000"} heading={"Case Alda"} detail={"Co Rd Tribune Tribune"} />
            <PropartyCard img={secondProparty}
              Bed={Bed} Tub={Tub} price={"$229,000"} heading={"Langes Beach House"} detail={"375 Highland Ave NE UNIT 1002"} />
          </div>
          <div className='snaps1'>

            <PropartyCard img={thirdProparty}
              Bed={Bed} Tub={Tub} price={"$289,000"} heading={"Supper Delax Home"} detail={"1398 Lynford Dr SW, Atlanta"} />
            <PropartyCard img={forthProparty}
              Bed={Bed} Tub={Tub} price={"$329,000"} heading={"Clinton Villa"} detail={"675 Albert St NW, Atlanta"} />
          </div>
        </div>
      </div>
      <div style={{
        backgroundColor: "#F9FBFE", width: "100%", height: 870,
      }}>
        <div className='testimonial BG' style={{ backgroundImage: "url(" + backGround + ")", backgroundRepeat: "no-repeat", display: 'flex', justifyContent: "center", marginTop: 198, }}>
          <div style={{
            display: "flex", marginTop: -100, flexDirection: "column", alignItems: "center", width: 571,
          }} > <p className='headingTest'>TESTIMONIALS</p> <p className='underHeading'>Our Clients send us bunch of smilies with our services and we love them</p>
            <img className='topi' src={topi} alt="" />
            <div style={{ backgroundImage: "url(" + rect + ")", backgroundRepeat: "no-repeat", display: 'flex', marginTop: -80, width: 571, backgroundSize: "cover", height: 240, borderRadius: 6, marginLeft: 0, flexDirection: 'column', alignItems: 'center' }}> <p className='underTopi'>"We are very pleased with the way Besnik handled our purchase of a lake home. He was prompt, friendly, and very knowledgeable. He followed up on any and all concerns.</p>
              <p className='Becky'>Becky Nelson</p> <img className='stars' src={stars} alt="" />
            </div>

          </div>

        </div>

      </div>
      <div className='newsLetter'>
        <div><p className='redfin'>Talk to a Redfin Agent</p>
          <p className='underRedfin'>Start your search with an expert local agent—there’s no pressure or obligation.</p>
        </div>

        <div className='where'>
          <p>Where are you searching for homes?</p>
          <div style={{
            display: 'flex'
          }}>

            <input className='input' type="text" placeholder='City, Address, ZIP' /><img className='searchIcon' src={searchIcon} alt="" /></div>
        </div>
      </div>
      <div lastOne>
        <p className='popular'>Popular Searches</p>
        <ul className='ul1'><li>Apartment for Rent</li>
        <li>Apartment Low to hide</li>
        <li>Offices for Buy</li>
        <li>Offices for Rent</li>
        </ul>
        <p className='aboutUs'>About Us</p>
        <ul className='ul2'>
          <li>Our Story</li>
          <li>Team Members</li>
          <li>Careers</li>
          <li>Contact Us</li>
        </ul>
        <p className='quick'>Quick links</p>
        <ul className='ul3'>
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
          <li>Contact Support</li>
          <li>FAQs</li>

        </ul>
        <p className='support'>Support</p>
        <ul className='ul4'>
          <li>Help Center</li>
          <li>Loan Support</li>
          <li>Managment</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className='lastDiv'>
        <img className='lastLogo' src={lastLogo} alt="" />
        <p className='lastLine'>© 2021 Besnik. All Rights Reserved</p>
      </div>
    </div>
  );
}

export default App;
