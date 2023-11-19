import { Provider } from "react-redux";
import store from "./redux/strore";

import TodoApp from "./component/todoApp";

const App = () => {
  return (
    <Provider store={store}>
      <TodoApp></TodoApp>
    </Provider>
  );
};

export default App;
