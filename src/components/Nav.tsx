import {Link} from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
padding: 0.25rem;
margin: 1rem;
`;

const StyledNav = styled.nav`
    width: 30%;
    background-color: #ffd3b5;
`;

const NavList = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    
    font-size: calc(2px + 2vw);
    text-align: center;
    list-style: none;
    padding-left: 0;
`;

const NavItem = styled.li`
    font-size: calc(1px + 2vw);
    width: 90%;
    background-color:#ffaaa6;
    border: 2px solid #dcedc2 ;
    border-radius: 10px;
    padding: 2vh 0;
    margin: 5vh auto;
`;
//add hover featureeee
//media 

export default function Nav(){
    return(
        <StyledNav>
            <NavList>
                <NavItem>
                    <StyledLink to={"/"}> Home </StyledLink>
                </NavItem>
                <NavItem>
                    <StyledLink to={"/Education"}> Education </StyledLink>
                </NavItem>
                <NavItem>
                    <StyledLink to={"/Skills"}>Skills</StyledLink>
                </NavItem>
                <NavItem>
                    <StyledLink to={"/WorkExperience"}>Work Experience</StyledLink>
                </NavItem>
                <NavItem>
                    <StyledLink to={"/ActivitiesHobbies"}>Activities & Hobbies</StyledLink>
                </NavItem>
                <NavItem>
                    <StyledLink to={"/Projects"}>Projects</StyledLink>
                </NavItem>
            </NavList>
        </StyledNav>
        
    );  
}