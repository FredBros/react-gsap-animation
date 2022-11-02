import logo from './assets/logo.svg';
import styled from "styled-components"
import ParalaxHeroSection from "./components/ParalaxHeroSection"
import ContentSection from "./components/ContentSection";
import CrossRevealSection from "./components/CrossRevealSection"
import FaceOne from "./assets/images/faceOne.png"
import LandscapeOne from "./assets/images/landscapeOne.png"
import LandscapeTwo from "../src/assets/images/landscapeTwo.png";
import ProductSection from "./components/ProductSection"
import VideoSequenceSection from "./components/VideoSequenceSection"


const StylesHeroSection = styled.section`
position : relative;
height : 100vh;
width: 100vw;
display: flex;
flex-direction : column;
align-items: center;
justify-content: space-between;
img{
  height: 25vmin;
  pointer-events: none;
}
`
const StyledTitle = styled.h1`
color: black;
font-size: 2rem;
font-weight: 400;
letter-spacing: 4px;
text-align: center;
text-transform: uppercase;
padding-top: 4rem;
`


function App() {
  return (
    <>
      <StylesHeroSection>
        <img src={logo} alt="logo" />
        <StyledTitle>Back to smooth and firm skin</StyledTitle>
        <ParalaxHeroSection />
      </StylesHeroSection>
      <ProductSection />
      <ContentSection
        title={"Take Care"}
        text={
          "Irony twee literally, williamsburg prism XOXO kitsch taiyaki DSA snackwave."
        }
      />
      <CrossRevealSection
        face={FaceOne}
        landscape={LandscapeOne}
        name={"Cristian Guard"}
        job={"Founder"}
        sentenceOne={"We only launch"}
        sentenceTwo={"what we love"}
        crossreveal={"xPercent"}
      />
      <ContentSection
        title={"Take Care Two"}
        text={
          "Photo booth tofu praxis cronut pitchfork, austin art party poutine. Asymmetrical affogato shaman hell of big mood."
        }
      />
      <CrossRevealSection
        face={FaceOne}
        landscape={LandscapeTwo}
        name={"Cristian Guard"}
        job={"Founder"}
        sentenceOne={"We only launch"}
        sentenceTwo={"what we love"}
        crossreveal={"yPercent"}
      />
      <ContentSection
        title={"Take Care Three"}
        text={
          "Chartreuse leggings pop-up fit, lumbersexual tousled swag whatever pok pok copper mug activated charcoal butcher."
        }
      />
      <VideoSequenceSection />
    </>
  );
}

export default App;
