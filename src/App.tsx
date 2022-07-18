import './App.css';
import { Four } from './assets/blockFour';
import { One } from './assets/blockOne';
import { Three } from './assets/blockThree';
import { Twe } from './assets/brockTwe';

function App() {
  return (
    <div>
      <Twe text="Organization Logo" />
      <One text="Sorry, the upload failed." />
      <Three text="Crop" />
      <Four text="Organization Logo" />
    </div>
  );
}

export default App;
