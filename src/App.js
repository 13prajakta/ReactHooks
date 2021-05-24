import logo from './logo.svg';
import './App.css';
import State from './State.js'
import Effect from './Effect.js'
import Memo from './Memo.js'
import Ref from './Ref.js'
import Reducer from './Reducer.js'
import Context from './Context.js'
import CustomHook from './CustomHook.js'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { createContext,React} from 'react';

const theam={
  background:"blue",
  fontsize:"32px",
  name:"prajakta"
}
export const BioData=createContext();
function App() {
  
  return (
    <div className="App">
     
      <Router>
        <Switch>
          <Route path="/" exact component={State}></Route>
          <Route path="/hook/effect" exact component={Effect}></Route>
          <Route path="/hook/memo" exact component={Memo}></Route>
          <Route path="/hook/ref" exact component={Ref}></Route>
          <Route path="/hook/reducer" exact component={Reducer}></Route>
          <Route path="/hook/custom" exact component={CustomHook}></Route>
          <BioData.Provider value={{...theam}}>
          <Route path="/hook/context" exact component={Context}></Route>
          </BioData.Provider>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App

