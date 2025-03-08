import {styled} from 'styled-components';



const MainSkills = styled.div`
`;

const Peter = styled.div`
    margin-top: 2vh;
`;
const PeterImg = styled. img`
    width: 60%;      
    height: auto;
    margin: 0 auto;
    margin-bottom: 2vh auto;
    display: block;
    

    @media screen and (max-width: 900px) {
        width: 90%;      
        height: auto;
        margin: 0 auto;
        margin-bottom: 2vh auto;
        display: block;
    }
`
const Box = styled.div`
    background-color: #ffd3b5;
    border: 2px solid #ffaaa6;
    border-radius: 4vw;
    padding: 15%;
    text-align: center;
    font-size: calc(1px + 1vw);
    

    @media screen and (max-width: 900px) {
        background-color: #ffd3b5; 
        border: 2px solid #ffaaa6;
        border-radius: 4vw;
        padding: 5.5%;
        text-align: center; 
       
        overflow: hidden;
        font-size: calc(2px + 2vw);
    }
`;

const SkillCategories = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    gap: 1.5%;                  
    width: 80%;                           
    max-width: 800vw; 
    padding: 5.5%;
    margin: 0 auto;

    

    @media screen and (max-width: 900px) {
        grid-template-columns: 1fr; 
        width: 95%;
        overflow: hidden;
        padding: 2.5%;
        }

`;
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

export default function Skills(){
    return (
        <MainSkills>
            <Title>Skills</Title>
            <Peter>
                <PeterImg src = {"/Peter.gif"} alt = "Peter Dancing"/>
            </Peter>
                <SkillCategories>
                    <Box>
                        <h3>Programming</h3>
                        <p>Python, Java, C, LaTeX, GIT, HTML, JavaScript, MongoDB, SQL</p>
                    </Box>
                    <Box>
                        <h3>Languages</h3>
                        <p>English, Spanish</p>
                    </Box>
                    <Box>
                        <h3>Adobe</h3>
                        <p>Photoshop, Lightroom, AfterEffects</p>
                    </Box>
                    <Box>
                        <h3>Miscellaneous</h3>
                        <p>Advertising, B2B Marketing, Branding, Social media, Slide Deck Prep, Creative Campaign Creation</p>
                    </Box>
                </SkillCategories>
        </MainSkills>
    );
}