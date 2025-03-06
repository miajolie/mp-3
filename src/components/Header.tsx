
import {styled} from "styled-components";

const StyledHeader = styled.header`
    display:flex;
    justify-content: space-between;
    align-items: center;
    width: 100%
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