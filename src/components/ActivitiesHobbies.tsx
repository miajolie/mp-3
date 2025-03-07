import {styled} from 'styled-components';
import Bubble from "../assets/FinalPortfolio /BubbleQueen.jpg";
import Soccer from "../assets/Soccer.jpg";
import Fruit from "../assets/FinalPortfolio /Fruits Basket 1 .jpg";
import Clown from "../assets/FinalPortfolio /clown 1 no eyebrows (10).jpg";
import Kake from "../assets/FinalPortfolio /Kakegurui (6).jpg";
import Candy from "../assets/FinalPortfolio /Candy Land (15).jpg";
import Butter from "../assets/FinalPortfolio /Yellow Saturated 4(3).jpg";
import Climb from "../assets/climbing.jpeg";
import StudioPic from "../assets/StudioPic.jpg";

const Portfolio = styled.div`
    width: auto;
    margin: 1vh 1vw;
    margin: 2vh auto; 
    display:flex;

    flex-wrap: wrap;
`;
const SoccerDiv = styled.div`
width: 40%;
    margin: auto;
`;
const RockClimbing = styled.div`
width: 40%;
    margin: auto;
`;
const StudioPicture = styled.img`
    max-width: 100%;
    border: 4px solid #b6cdbd;
    align-items: center;
`;

const Title = styled.h2`
    font-family: Times;
`;
const SubTitle = styled.h3`
margin: 0;
font-family: Times;
`;

const HobText = styled.div`
    text-align: center;
`;
const Img = styled.img`
    border: 4px solid #b6cdbd;
    overflow:hidden;
    flex:1 1 calc(33.333% - 1rem);
    display:block;
    object-fit: contain;
    max-width: 100%;

`;
const Playing = styled.img`
max-width: 100%;
    border: 4px solid #b6cdbd;
    align-items: center;
`;
const Climbing = styled.img`
    max-width: 100%;
    border: 4px solid #b6cdbd;
    align-items: center;
`;

const Photography = styled.div`
`;
export default function ActivitiesHobbies(){
    return (
        <>
            <HobText>
                <Title>Women's Club Soccer Team | Boston Univeristy / University of California, Irvine </Title>
                <SubTitle>Aug, 2021 - Present</SubTitle>
            </HobText>
            <SoccerDiv>
                <Playing src={Soccer} alt= "me playing soccer"/> 
            </SoccerDiv>
            <HobText>
                <Title>Rock Climbing Club | Boston Univeristy</Title>
                <SubTitle>Aug, 2022 - Present</SubTitle>
            </HobText>
            <RockClimbing>
                <Climbing src={Climb} alt="Life's a Climb!"/>
            </RockClimbing>
            <HobText>
                <Title>Studio Photography | Passion Projects, 30+ completed</Title>
                <SubTitle>Some of My Portfolio!</SubTitle>
            </HobText>
            <Photography>
                <StudioPicture src={StudioPic} alt="Me and my friend!"/>
            </Photography>
                <Portfolio>
                    <Img src={Bubble} alt="bubbles!"/>
                    <Img src={Fruit} alt="fruits!"/>
                    <Img src={Clown} alt="IT!"/>
                    <Img src={Kake} alt="wrapped!"/>
                    <Img src={Candy} alt="candy land!"/>
                    <Img src={Butter} alt="butterfly eyes!"/>
                    
                </Portfolio>
        </>
    );
}