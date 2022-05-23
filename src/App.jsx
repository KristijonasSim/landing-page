import Header from "./Header/navbar";
import Sidebar from "./components/sidebar/sidebar";
import Content from "./Content/content";
import './App.css'
import { useGlobalContext } from "./components/context/context";
function App() {

  const { isSidebarOpen } = useGlobalContext()

  return (
    <div className="style">
        <Sidebar/>
      <div className={`${isSidebarOpen ? 'background shadow': 'background'}`}>
                  <Header/>

                  <Content/>
      </div>
    </div>
  );
}

export default App;
