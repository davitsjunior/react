import { Posts } from '../../components/Posts';
import { CounterProvider } from '../../context/CounterProvider';
import { PostsProvider } from '../../context/PostsProvider';
import './styles.css';
//eslint-disable-next-line

// App.jsx
function App() {
  return (
    <CounterProvider>
      <PostsProvider>
        <div>
          <Posts />
        </div>
      </PostsProvider>
    </CounterProvider>
  );
}

export default App;
