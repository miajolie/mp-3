import {styled} from 'styled-components';
import Bubble from "../assets/FinalPortfolio /BubbleQueen.jpg";
import Soccer from "../assets/Soccer.jpg";
import Fruit from "../assets/FinalPortfolio /Fruits Basket 1 .jpg";
import Clown from "../assets/FinalPortfolio /clown 1 no eyebrows (10).jpg";
import Kake from "../assets/FinalPortfolio /Kakegurui (6).jpg";
import Candy from "../assets/FinalPortfolio /Candy Land (15).jpg";
import Butter from "../assets/FinalPortfolio /Yellow Saturated 4(3).jpg";
import Sun from "../assets/FinalPortfolio /sunflower com 1.jpg"
import Climb from "../assets/climbing.jpeg";
import StudioPic from "../assets/photo.jpg";

const Portfolio = styled.div`

`;
const Soccer = styled.div`

`;
const RockClimbing = styled.div`

`;

const Title = styled.h2`
    font-family: Times;
`;
const SubTitle = styled.h3`
margin: 0;
font-family: Times;
`;

const HobText = styled.div`

`;
const Img = styled.img`

`
const Playing = styled.img`
`;
const Climbing = styled.img`
`;
const StudioPic = styled.img`
`;

export default function ActivitiesHobbies(){
    return (
        <>
            <HobText>
                <Title>Women's Club Soccer Team | Boston Univeristy / University of California, Irvine </Title>
                <SubTitle>Aug, 2021 - Present</SubTitle>
            </HobText>
            <Soccer>
                <Playing src={Soccer} alt= "me playing soccer"/> 
            </Soccer>
            <HobText>
                <h3>Rock Climbing Club | Boston Univeristy</h3>
                <h5>Aug, 2022 - Present</h5>
            </HobText>
            <RockClimbing>
                <Climbing src={Climb} alt="Life's a Climb!"/>
            </RockClimbing>
            <HobText>
                <h3>Studio Photography | Passion Projects, 30+ completed</h3>
                <h5>Some of My Portfolio!</h5>
            </HobText>
            <Photography>
                <StudioPic src={StudioPic} alt="Me and my friend!"/>
            </Photography>
                <Portfolio>
                    <Img src={Bubble} alt="bubbles!">
                    <Img src={Fruit} alt="fruits!">
                    <Img src={Clown} alt="IT!">
                    <Img src={Kake} alt="wrapped!">
                    <Img src={Candy} alt="candy land!">
                    <Img src={Butter} alt="butterfly eyes!">
                    <Img src={Sun} alt="dark flowers!">
                </Portfolio>
        </>
    );
}