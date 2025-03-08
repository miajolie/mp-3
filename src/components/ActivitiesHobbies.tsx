import {styled} from 'styled-components';


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
    max-width: 90%;
    border: 4px solid #b6cdbd;
    align-items: center;
    margin-left: 5%;
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
                <Playing src={"/Soccer.jpg"} alt= "me playing soccer"/> 
            </SoccerDiv>
            <HobText>
                <Title>Rock Climbing Club | Boston Univeristy</Title>
                <SubTitle>Aug, 2022 - Present</SubTitle>
            </HobText>
            <RockClimbing>
                <Climbing src={"/climbing.jpeg"} alt="Life's a Climb!"/>
            </RockClimbing>
            <HobText>
                <Title>Studio Photography | Passion Projects, 30+ completed</Title>
                <SubTitle>Some of My Portfolio!</SubTitle>
            </HobText>
            <Photography>
                <StudioPicture src={"/StudioPic.jpg"} alt="Me and my friend!"/>
            </Photography>
                <Portfolio>
                    <Img src={"/FinalPortfolio /BubbleQueen.jpg"} alt="bubbles!"/>
                    <Img src={"/FinalPortfolio /Fruits Basket 1 .jpg"} alt="fruits!"/>
                    <Img src={"/FinalPortfolio /clown 1 no eyebrows (10).jpg"} alt="IT!"/>
                    <Img src={"/FinalPortfolio /Kakegurui (6).jpg"} alt="wrapped!"/>
                    <Img src={"/FinalPortfolio /Candy Land (15).jpg"} alt="candy land!"/>
                    <Img src={"/FinalPortfolio /Yellow Saturated 4(3).jpg"} alt="butterfly eyes!"/>
                    
                </Portfolio>
        </>
    );
}