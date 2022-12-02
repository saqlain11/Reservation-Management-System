import { allReservation } from "state-management/actions";
import useAppDispatch from "hooks/useAppDisptach";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import NotFound from "templates/NotFound";
import AllReservation from "templates/AllReservations";

function App() {
  const dispatch=useAppDispatch();
  dispatch(allReservation());
  return (
    <Router>
      <Routes>
        <Route index element={<AllReservation/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>

    </Router>
    
  );
}

export default App;
