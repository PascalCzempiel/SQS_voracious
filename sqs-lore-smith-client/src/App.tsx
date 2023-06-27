import './App.css';
import TestElement from './components/TestElement';
import { AppDataProvider } from './AppData/AppDataProvider';
import NewEntityPanel from './components/NewEntityPanel';
import ResetWorldButton from './components/ResetWorldButton';
import EntityList from './components/EntityList';
import WorldTime from './components/WorldTime';

function App() {
  return (
    <AppDataProvider>
      <div className='App'>
        <h1>Voracious</h1>
        <div id='Controlpanel'>
          <NewEntityPanel/>
          <ResetWorldButton/>
          <WorldTime/>
        </div>
        <EntityList/>
      </div>
    </AppDataProvider>
  );
}

export default App;
