import './App.css';
import ContactComponent from './components/ContactComponent';
import FooterComponent from './components/FooterComponent';
import HeaderNav from './components/HeaderNav';
import MainComponent from './components/MainComponent';
import ProjectsComponent from './components/ProjectsComponent';
import SkillsComponent from './components/SkillsComponent';

function App() {
  return (
    <div>
    <HeaderNav/>
    <MainComponent/>
    <ProjectsComponent/>
    <SkillsComponent/>
    <ContactComponent/>
    <FooterComponent/>
    </div>
  );
}

export default App;
