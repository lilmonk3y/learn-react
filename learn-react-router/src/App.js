import {HashRouter, Routes, Route} from "react-router-dom";
import {Menu} from "./Menu";
import {Home} from "./Home";
import {Blog} from "./Blog";
import {NotFound} from "./NotFound";
import {BlogPost} from "./BlogPost";

function App() {
  return (
    <HashRouter>
      <Menu/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/blog/:slug" element={<BlogPost/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
