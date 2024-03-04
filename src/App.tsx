import './App.css';
import { Layout } from './ui/layout/Layout';
import { Button } from './ui/button/Button';

function App() {
  return (
    <Layout>
      <Button>Wine map</Button>
      <Button color="danger">Tasting</Button>
    </Layout>
  );
}

export default App;