
import {styled} from "styled-components";

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    padding: 1vw;
    background-color: #ffd3b5;
    color: #ff8c94;

    @media screen and (max-width: 900px) {
        align-items: center;
    }
`;

    
        
//change style of title later
const Title = styled.h1`
    font-size: 3rem;
    margin: 0;
`;
const SubTitle = styled.p`
    font-size: 1.2rem;

    margin-top: 0.25rem;

`;


export default function Header(){
    return(
        <StyledHeader>
            <Title>Mia Jolie Batista</Title>
            <SubTitle>My Online Resume</SubTitle>
        </StyledHeader>
    );
}