import {Routes, Route, createBrowserRouter, RouterProvider} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Education from "./components/Education";
import Skills from "./components/Skills"
import WorkExperience from "./components/WorkExperience";
import ActivitiesHobbies from "./components/ActivitiesHobbies";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    position: relative;
    background-color: #dcedc2;

    min-height: 100vh;

    @media (max-width: 900px){
      flex-direction: column;
      // width: 100%;
    }
`;

const PageWrapper = styled.div`
    width: 80vw;
    margin: auto;

    // @media (max-width: 900px){
    //   width: 100%;
    // }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  width:70%;
  /* height: 100vh; */
  background-color: #dcedc2;

   @media (max-width: 900px){
      width: 100%;
    }
`;

function Root() {
  return (
    <>
      <PageWrapper>
        <Header/>
          <Container>
            <Nav/>
            <Main>
              <Routes>
                <Route path= {`/`} element = {<Home/>}/>
                <Route path= {`/Education`} element = {<Education/>}/>
                <Route path= {`/Skills`} element = {<Skills/>}/>
                <Route path= {`/WorkExperience`} element = {<WorkExperience/>}/>
                <Route path= {`/ActivitiesHobbies`} element = {<ActivitiesHobbies/>}/>
                <Route path= {`/Projects`} element = {<Projects/>}/>
              </Routes>
            </Main>
          </Container>
        <Footer/> 
      </PageWrapper>
    </>
  );
}

const router = createBrowserRouter([{path : "*", Component: Root}])

export default function App() {
  return <RouterProvider router = {router}/>
}