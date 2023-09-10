
import React from 'react';
import NavBar from './NavBar';
import './Components/NavBar/App.css'
import Banner from './Components/banner/banner';
import RawPost from './Components/RawPost/RawPost';
import {Originals,Action,ComedyMovies,HorrorMovies} from './urls'



function App() {
  return (<div>
    <div className='navbar'>
    <NavBar/>
    </div>
    <div>
    <Banner/>
    </div>
    <div>
    <RawPost url={Originals}  title='NetFlix Originals'/>
    </div>
    <div>
    <RawPost url={Action} title='Action' isSmall/>
    </div>
    <div>
    <RawPost url={ComedyMovies} title='ComedyMovies' isSmall/>
    </div>
    <div>
    <RawPost url={HorrorMovies} title='HorrorMovies' isSmall/>
    </div>
    </div>

  );
}

export default App;
