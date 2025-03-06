import {Routes, Route, createBrowserRouter, RouterProvider} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Education from "./components/Education";
import Skills from "./components/Skills"
import WorkExperience from "./components/WorkExperience";
import ActivitiesHobbies from "./components/ActivitiesHobbies";
import Projects from "./components/Projects";
import Footer from "./components/Footer"


function Root() {
  return (
    <div>
      <Header/>
      <Nav/>
      <Routes>
        <Route path= {`/`} element = {<Home/>}/>
        <Route path= {`/Education`} element = {<Education/>}/>
        <Route path= {`/Skills`} element = {<Skills/>}/>
        <Route path= {`/WorkExperience`} element = {<WorkExperience/>}/>
        <Route path= {`/ActivitiesHobbies`} element = {<ActivitiesHobbies/>}/>
        <Route path= {`/Projects`} element = {<Projects/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

const router = createBrowserRouter([{path : "*", Component: Root}])

export default function App() {
  return <RouterProvider router = {router}/>
}