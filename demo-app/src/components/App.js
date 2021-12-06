import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';

import { ColorToolStoreProvider } from '../contexts/colorToolStoreContext';
import { CarToolStoreProvider } from '../contexts/carToolStoreContext';

import { colorToolStore } from '../stores/colorToolStore';

import { Layout } from './Layout';
import { ToolHeader } from './ToolHeader';
import { ToolFooter } from './ToolFooter';
import { ColorTool } from './ColorTool';
import { CarTool } from './CarTool';

const colorList = [
  { id: 1, name: 'red', hexcode: 'ff0000' },
  { id: 2, name: 'green', hexcode: '00ff00' },
  { id: 3, name: 'blue', hexcode: '0000ff' },
];

const carList = [
  { id: 1, make: 'Ford', model: 'Fusion', year: 2018, color: 'blue', price: 45000 },
  { id: 2, make: 'Tesla', model: 'S', year: 2019, color: 'red', price: 120000 },
];

export const App = () => {

  return (
    <Router>
      <Layout>
        <ToolHeader headerText="The Tools" />
        <nav>
          <ul className="menu">
            <li className="menu-item"><Link to="/">Home</Link></li>
            <li className="menu-item"><Link to="/color-tool">Color Tool</Link></li>
            <li className="menu-item"><Link to="/car-tool">Car Tool</Link></li>
          </ul>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/color-tool" element={
              <Provider store={colorToolStore}>
                <ColorTool />
              </Provider>
            } />
            <Route path="/car-tool" element={
              <CarToolStoreProvider cars={carList}>
                <CarTool />
              </CarToolStoreProvider>
            } />
          </Routes>
        </main>
        <aside>Sidebar</aside>
        <ToolFooter companyName="A Cool Company, Inc." />
      </Layout>
    </Router>    
  );

};
