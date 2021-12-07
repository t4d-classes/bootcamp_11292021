import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';

import { colorToolStore } from '../stores/colorToolStore';
import { carToolStore } from '../stores/carToolStore';

import { Layout } from './Layout';
import { ToolHeader } from './ToolHeader';
import { ToolFooter } from './ToolFooter';
import { ColorTool } from './ColorTool';
import { CarTool } from './CarTool';


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
              <Provider store={carToolStore}>
                <CarTool />
              </Provider>
            } />
          </Routes>
        </main>
        <aside>Sidebar</aside>
        <ToolFooter companyName="A Cool Company, Inc." />
      </Layout>
    </Router>    
  );

};
