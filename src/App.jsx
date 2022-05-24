import Header from "./Header/navbar";
import Sidebar from "./components/sidebar/sidebar";
import Content from "./Content/HeadingContent/heeading_content";
import './App.css'
import { useGlobalContext } from "./components/context/context";
import WhitePaperContent from "./Content/WhitePaperContent/white_paper_content";
function App() {

  const { isSidebarOpen } = useGlobalContext()

  return (
    <div className="style">
        <Sidebar/>
      <div className={`${isSidebarOpen ? 'background shadow': 'background'}`}>
                  <Header/>
                  <Content/>
                  <WhitePaperContent/>
      </div>
    </div>
  );
}

export default App;
