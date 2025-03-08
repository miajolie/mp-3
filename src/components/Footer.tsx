import { Link } from 'react-router-dom';
import {styled} from 'styled-components';

const FooterText = styled.div`
    background-color: #ffd3b5;
    color: #ff8c94;
    padding: 1vh 1vw;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;      
`;
export default function Footer(){
    return (
        <>
            <FooterText>
                <p>All rights reserved by Mia Jolie Batista: <Link to= "Credits">Credits</Link> &#169; </p>
            </FooterText>
        </>
    );
}