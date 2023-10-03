import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Page/Home";
import Students from "./Components/Page/Students";
import Teacher from "./Components/Page/Teacher";
import About from "./Components/Page/About";
import News from "./Components/Page/News";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student" element={<Students />} />
          <Route path="/teachers" element={<Teacher />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
