import './Style Sheets/App.css';
import './Style Sheets/padding.css';

// Component Imports
import Navbar from './components/nav/Navbar'
import Intro from './components/Intro'
import NavLrg from './components/NavbarLarge'
import ProjectCards from './components/projects/ProjectCards'
import ProjectSection from './components/projects/ProjectSection'

function App() {
  return (
    <div className="App">
      <Navbar />
      <section className='section1'>
        <Intro />
        < NavLrg />
      </section>
      <section className='section2'>
        <ProjectSection />
      </section>
    </div>
  );
}

export default App;
