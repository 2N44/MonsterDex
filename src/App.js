import './App.css';
import LastCardAdded from './pages/home/LastCardAdded';
import {Menu, FavoriteDecks, CardOfTheDay} from './pages/home/index'

const App = () => {
  return (
    <div className="app">
      <header>
      
      </header>
      <div className="container">
        <Menu />
        <div className='main-container'>
          <main className="content">
            <FavoriteDecks />
            <CardOfTheDay />
            <LastCardAdded />
          </main>
        </div>
      </div>
      
            
    </div>
  );
}

export default App;
