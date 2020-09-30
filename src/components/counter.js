import React, {useContext, useReducer} from "react";
import Message from "./message";
import CounterContext from "./counterContextApi/counterContext";
import counterReducer from "../reducer/counter/counterReducer";


function Counter() {
    // let [counter, setCounter] = useState(1);
    let counterValue = useContext(CounterContext)
    console.log(counterValue);
    const people_data = [
        {name: 'Jay', alive: true},
        {name: 'Kailee', alive: true},
        {name: 'John', alive: true},
        {name: 'Mia', alive: true}
    ]
    const initialState = {count: 0, people: people_data}
    let [state, dispatch] = useReducer(counterReducer, initialState);


    return (
        <div className="App">
            <h1>Counter for using functional class and useState</h1>
            <Message counterValue={counterValue[0]}/>
            <button className="btn-margin btn" onClick={() => counterValue[1](++counterValue[0])}>
                Update Counter
            </button>
            <br/>
            <button className="btn-margin btn" onClick={() => counterValue[1](--counterValue[0])}>
                Decrease Counter
            </button>
            <br/>
            <button className="btn-margin btn" onClick={() => counterValue[1](0)}>
                Reset Counter
            </button>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1>use Reducer</h1>
            <Message counterValue={state.count}/>
            <button className="btn-margin btn" onClick={() => dispatch({action: 'INCREMENT'})}>
                Update Counter
            </button>
            <br/>
            <button className="btn-margin btn" onClick={() => dispatch({action: 'DECREMENT'})}>
                Decrease Counter
            </button>
            <br/>
            <button className="btn-margin btn" onClick={() => dispatch({action: 'RESET'})}>
                Reset Counter
            </button>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1>use Reducer</h1>
            {/*<div>{state.people.map((item) => {*/}
            {/*    return <h3 onClick={() => dispatch({action: 'REMOVE_ITEM', payload: item.id})}>{item.name}</h3>*/}
            {/*})}</div>*/}
        </div>
    );
}

export default Counter;
