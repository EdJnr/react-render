import './App.css';
import { ArrayUseState } from './render/components/arrayUseState/arrayUseState';
import { ObjectUseState } from './render/components/objectUseState/objectUseState';
import { ChildOne } from './render/components/optimization/child1';
import { GrandParentOne } from './render/components/optimization/grandParent';
import { ParentOne } from './render/components/optimization/parent1';
import { Parent } from './render/components/parent child/parent';
import { UseReducer } from './render/components/useReducer/useReducer';
import { UseState } from './render/components/useState/useState';

function App() {
  return (
    <div className="App">
      {/* <UseState/> 
      <UseReducer/>
      <ObjectUseState/>
      <ArrayUseState/> */}
      <GrandParentOne/>

    </div>
  );
}

export default App;
