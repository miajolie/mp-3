import {styled} from 'styled-components';


// const HomeContainer = styled.div`
//     display: flex;
//     flex-direction: column;
//     width:100%;
//     background-color: #dcedc2;

//     @media screen and (max-width: 900px) {
//         max-width: 100%;
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//     }
// `;
//main #

const Title = styled.h2`
    margin: 2vw 0;
    text-align: center;
    font-size: calc(2px + 2vw);
    color: #ff8c94;

    @media screen and (max-width: 900px) {
        text-align: center;
        color: #ff8c94;
    }   
`;
//DONE

const IntroSection = styled.div`
    align-self: center;
    width: 50%;
    margin: 1vh 1vw;
    font-size: calc(1px + 1.5vw);

    @media screen and (max-width: 900px){
        align-self: center;
        margin: 0;
        font-size: calc(2px + 3vw);
        width: 100%;

`;


const ProfileImg = styled.img`
    max-width: 100%;
    border: 4px solid #b6cdbd;
`;


const WelcomeMessage = styled.div`
    font-size: calc(1px + 1.5vw);
    margin: 1 1vw;
    line-height: 1.5;
    align-self: center;
    margin-left : 2.5%;
    margin-right : 2.5%;

    @media screen and (max-width: 900px) {
        margin: 2% 2%;
        font-size: calc(2px + 3vw);

    }
`;
const Main = styled.div`
    // width: 100%;
    display: flex;
    flex-direction: row;
    padding: 2vh 2vw;

    @media screen and (max-width: 900px) {
        display: flex;
        flex-direction: column;
        // height: 100vh;
        background-color: #dcedc2;

    }
`;
const MainImage = styled.div`
    width: 40%;
    margin: 1vh 1vw;

    @media screen and (max-width: 900px) {
        margin: 1vh auto;
        }
`;



export default function Home() {
  return (
<>
      <Title>Home</Title>
        <Main>
            <MainImage>
                <ProfileImg src= {"/ProfilePic.jpeg"} alt="Mia Jolie Batista" />
            </MainImage>
                <IntroSection>
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
                
        </Main>
        <WelcomeMessage>
                <p>
                Welcome to my Resume Website! Looking through, you will find some
                information on my <strong>Educational</strong> background as well as 
                any <strong>Work Experience</strong>; and maybe even some of my art!
                </p>
            </WelcomeMessage>
    </>
  );
}

