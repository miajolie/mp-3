import {styled} from 'styled-components';
import pic from "../assets/ProfilePic.jpeg";

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    width:70%;
    background-color: #dcedc2;
`;
//done

const Title = styled.h2`
    margin: 2vw 0;
    text-align: center;
    font-size: calc(2px + 2vw);
    color: #ff8c94;
`;
//DONE

const IntroSection = styled.div`
    align-self: center;
    width: 60%;
    margin: 1vh 1vw;
    font-size: calc(1px + 1.5vw);
`;
// display: flex;
// gap: 1.5rem;
// align-items: flex-start;
// font-size: calc(1px + 1.5vw);
// margin: 1vh 1vw;

const ProfileImg = styled.img`
    width: 40%;
    margin: 1vh 1vw;
`;
// width: 200px;
//   height: auto;
//   border: 2px solid #999;
//   border-radius: 4px;

const WelcomeMessage = styled.p`
  font-size: calc(1px + 1.5vw);
  margin: 1vh 1vw;
  line-height: 1.5;
`;


export default function Home() {
  return (
    <HomeContainer>
      <Title>Home</Title>
      <IntroSection>
        <ProfileImg src= {pic} alt="Mia Jolie Batista" />
        <p>
          My name is Mia Jolie Batista, and I am a driven and
          passionate college student working towards a B.A. in Computer Science
          with a minor in Advertisement at Boston University.  I am looking for 
          an opportunity at a reputable corporation to benefit my educational 
          background and undergo hands-on experience to further my work experience.
          I firmly believe my creativity, willingness to learn, attention to detail, 
          leadership, and collaboration skills would be an asset to any organization.
        </p>
      </IntroSection>
      <WelcomeMessage>
        Welcome to my Resume Website! Looking through, you will find some
        information on my <strong>Educational</strong> background as well as 
        any <strong>Work Experience</strong>; and maybe even some of my art!
      </WelcomeMessage>
    </HomeContainer>
  );
}

