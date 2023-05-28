import { Provider } from "react-redux";
import "./App.css";
import { store } from "./store";
import { Calculator } from "./component/Calculator";

function AppContent() {
  return (
    <div className="App">

      <Calculator />
      
    </div>
  );
}

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <AppContent />
      </Provider>
    </div>
  );
};

export default App;
