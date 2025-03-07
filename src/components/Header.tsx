
import {styled} from "styled-components";

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    padding: 1vh 1vw;
    background-color: #ffd3b5;
    color: #ff8c94;

    @media screen and (max-width: 900px) {
        align-items: center;
    }
`;

    
        
//change style of title later
const Title = styled.h1`
padding: 0.5rem;
margin: 1rem;
`;


export default function Header(){
    return(
        <StyledHeader>
            <Title>Mia Jolie Batista</Title>
            //add second one  in HEADER
        </StyledHeader>
    );
}