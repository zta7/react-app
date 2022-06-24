import { MusicItem } from './components/MusicItem';

const music = new Music();

const App = () => (
    <div className="App">
      <MusicItem {...music} />
    </div>
);

export default App;
