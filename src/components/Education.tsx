import {styled} from "styled-components";


const MainEducation = styled.div`
text-align: center; 
`;

const Courses = styled.p`
    font-size: calc(1.5px + 1.5vw);

    @media screen and (max-width: 900px){
        font-size: calc(3px + 3vw);
    }
`;

const Edu = styled.div`
    text-decoration: none;
`;

const TwoColumns = styled.div`
    column-count: 2;     
    column-gap: 20px;   
    font-size: calc(1.25px + 1.25vw);

    @media screen and (max-width: 900px){
        column-count: 1;
        
        font-size: calc(2.5px + 2.5vw);
    }
`;

const UCIPic = styled.div`

`;
const BUPic = styled.div`

`;
const UCIImg = styled.img`
    width: 40%;
    margin: 1vh 1vw;
`;

const BUImg = styled.img`
    width: 40%;
    margin: 1vh 1vw;
`;

const UCITitle = styled.h2`

`;
const BUTitle = styled.h2`

`;
const UText = styled.div`
font-size: calc(1px + 1vw);

    @media screen and (max-width: 900px){
        font-size: calc(3px + 3vw);
    }
`;
const BText = styled.div`
font-size: calc(1px + 1vw);

    @media screen and (max-width: 900px){
        font-size: calc(3px + 3vw);
    }
`;
const CourseTitle = styled.h3`
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
export default function Education(){
    return(
        
        <MainEducation>
            <Title>Education</Title>
            <Edu>
                <UCIPic>
                    <UCIImg src= {"/UCI.png"} alt="UCI Mascot" />
                </UCIPic>
                <UText>
                    
                        <UCITitle>University of California, Irvine</UCITitle>
                        <strong>B.S in Biology<br></br> 2021-2022 </strong>
                    
                </UText>
            </Edu>
            <Edu>
                <BUPic>
                    <BUImg src= {"/BU.png"} alt="BU Mascot" />
                </BUPic>
                <BText>
                    
                        <BUTitle>Boston University</BUTitle>
                        <strong>B.A in Computer Science / Minor in Advertising <br></br>2022-Current </strong>
                    
                </BText>
            </Edu>
            <br></br>
            <Courses> 
                <CourseTitle><u>Courses:</u></CourseTitle>
                    <TwoColumns>
                        
                    Data Structures<br></br>
                    Comuter Systems<br></br>
                    Combinatronic Structures<br></br>
                    Probability<br></br>
                    Algorithms<br></br>
                    Software Engineering<br></br>
                    Databases<br></br>
                    Distributed Systems<br></br>
                    Web Application Developement<br></br>
                    Business Experiments<br></br>
                    Advertisement<br></br>
                    AdLab<br></br>
                        
                    </TwoColumns>

            </Courses>
        </MainEducation>
    );
}