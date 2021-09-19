import Form from "./components/Form";
import {StoreProvider} from './utils/StoreProvider.js'
import CarList from "./components/CarList";

function App() {
  return (
    <StoreProvider>
      <div className="container mt-5">
        <Form/>
        <CarList/>
      </div>
    </StoreProvider>
  );
}

export default App;
