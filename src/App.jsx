import './Style Sheets/App.css';
import './Style Sheets/padding.css';
import Intro from './components/Intro'
import NavLrg from './components/NavbarLarge'
import ProjectCards from './components/projects/ProjectCards'

function App() {
  return (
    <div className="App">
      <section className='section1'>
        <Intro />
        < NavLrg />
      </section>
      <section className='section2'>
        <ProjectCards />
      </section>
    </div>
  );
}

export default App;
