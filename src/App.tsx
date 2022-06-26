import "./App.css";
import Desktop from "./components/Desktop";

// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Home from "./pages/home";
import Layout from "./components/Layout";

const App = (): JSX.Element => {
  return (
    <Layout>
      <Desktop />
      {/* <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/about" element={<About />}></Route>
            <Route path="/users" element={<Users />}></Route>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </div>
      </Router> */}
    </Layout>
  );
};

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }
export default App;
