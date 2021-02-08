import './styles/App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './componets/Layout';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
        <Route exact path="/" component={Home} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
