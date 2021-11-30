import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Details from './pages/Home/Details/Details';
import Blog from './pages/Home/Home/Blog/Blog';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>

          </Route>
          <Route path="/home" element={<Home />}>

          </Route>
          <Route path="/details/:projectId" element={<Details />}>

          </Route>
          <Route path="/blog" element={<Blog />}>

          </Route>
          <Route path="*" element={<NotFound />}>

          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
