import {styled} from 'styled-components';
import TA from "../assets/TA.jpg";
import Ryder from "../assets/ryder.jpeg";
import Blue from "../assets/blue.png";

const BlueImage = styled.div`
    display: flex;
    justify-content: center;
`;

const TAImage = styled.div`
    display: flex;
    justify-content: center;
    margin: 2%
`;

const RyderImage = styled.div`
    display: flex;
    justify-content: center;
`;

const TAPic = styled.img`
    max-width: 80%;
    border: 4px solid #b6cdbd;
    justify-content: center;
`;

const RyderPic = styled.img`
    max-width: 80%;
    border: 4px solid #b6cdbd;
`;
const BluePic = styled.img`
    max-width: 80%;
    border: 4px solid #b6cdbd;
    justify-content: center;
`;

const Work = styled.div`
font-family: Times;
font-size: calc(0.75vh + 1vw);
`;

const WorkText= styled.div`
`;

const Title = styled.h2`
    font-family: Times;
`;
const SubTitle = styled.h3`
margin: 0;
font-family: Times;
`;
export default function WorkExperience(){
    return (
        <>
        <TAImage>
            <TAPic src= {TA} alt= "Picture of Me being a TA"/>
        </TAImage>
                <Title>Boston University Computer Science Department | Boston, MA </Title>
                <SubTitle>Aug. 2023 - Present</SubTitle>
                <Work>  
                        <WorkText>
                            <p>
                                <em>Teaching Assistant</em> <br></br>
                                Selected by the BU computer science faculty to join their teaching assistant cohort to provide insight <br></br>
                                and mentorship during weekly office hours ranging from coding problems in python to possible career tracks <br></br>
                                in computer or data science.
                            </p>
                            <ul>
                                <li>Instructed 1200+ students with Python related problems, providing meaningful and constructive feedback.</li>
                                <li>Led 3-hour weekly office hours to go over difficult coding concepts over the entire semester.</li>
                                <li>Participated in weekly meetings between faculty and fellow TAs to gauge students’ current knowledge <br></br>
                                    set and to address any gaps that need to be filled for upcoming course work.</li>
                                <li>Handled grading students work, ensuring high quality of code, accuracy, and mastery of concepts. <br></br>
                                    Recognized any use of outside assistance such as common AI phrases and sophisticated techniques.</li>
                            </ul>
                        </WorkText>
                </Work>
                    <RyderImage>
                        <RyderPic src= {Ryder} alt= "Picture of Me at Ryder HQ"/>
                    </RyderImage>
                        <Title>Ryder System, Inc | Miami, FL </Title>
                        <SubTitle>June 2024 - July 2024</SubTitle>
                <Work>
                    <WorkText>
                        <p>
                            <em>Change Enablement Intern</em> <br></br>
                            Strategy focused IT internship centered on cross-functional operational alignment to drive new<br></br>
                            business strategy around a recent company acquisition to bolster competitive advantages and to identify <br></br>
                            synergies within the IT organization.
                        </p>
                        <ul>
                            <li>Engaged in the Quarterly Business Review and supported IT leadership to improve operational tactics and business strategy.</li>
                            <li>Collaborated with a 7-person change team in orchestrating the onboarding process of a company acquisition, with system<br></br>
                                integration of new employees reaching 70% within 24 hours.</li>
                            <li>Met with 6 teams across the IT organization to generate fundamental insights and conduct data analysis on their metrics to<br></br>
                                construct a mock dashboard and strengthen awareness campaign.</li>
                            <li>Presented final project to 30 people within the IT organization, including executive management, on how to streamline the<br></br>
                                Objective and Key Result (OKR) creation process by proposing the making of a dashboard and awareness campaign.</li>
                        </ul>
                    </WorkText>
                </Work>
                <BlueImage>
                    <BluePic src= {Blue} alt= "BMG"/>
                </BlueImage>
                    <Title>Blue Man Group | Boston, MA </Title>
                    <SubTitle>Aug. 2023 - Dec 2023</SubTitle>
                <Work>
                    <WorkText>
                        <p>
                            <em>Creative Copywriter</em> <br></br>
                            Wanting to mix the linear focus of CS with the creative liberty of design for clients; I was selected to be a creative copywriter from<br></br>
                            AdLab staff for my ability to illicit emotion out of the written language.
                        </p>
                        <ul>
                            <li>Generated design concepts and ideas to be used in the real world on a 7-person team to create value for our business partners.</li>
                            <li>Coordinated logistics for our executables with Blue Man Group’s corporate team to be presented as a cohesive ad campaign.</li>
                            <li>Responsible for creation of visuals, mocking, and color to satisfy the Blue Man Group of reaching a Gen-Z audience.</li>
                        </ul>
                    </WorkText>
                </Work>
        </>
    );
}