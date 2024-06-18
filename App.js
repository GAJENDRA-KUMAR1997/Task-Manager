import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import GetData from "./GetData.js";
import List from "./List.js";
import UpdateList from "./UpdateList.js";
import Description from "./Description.js";
function App() {
  return (
   <Router>
    <div>
      <Routes>
        <Route exact path="/" element={<List />}/>
        <Route exact path="/description/:id" element={<Description />}/>
        <Route exact path="/addList" element={<GetData />}/>
        <Route exact path="/updateList/:id" element={<UpdateList />} />
      </Routes>
    </div>
   </Router>
  );
}

export default App;
