
import {styled} from "styled-components";

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    padding: 1vh 1vw;
    background-color: #ffd3b5;
    color: #ff8c94;
`;

//change style of title later
const Title = styled.h2`
padding: 0.5rem;
margin: 1rem;
`;


export default function Header(){
    return(
        <StyledHeader>
            <Title>Mia Jolie Batista</Title>
            
        </StyledHeader>
    );
}