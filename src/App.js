import logo from './logo.svg';
import './App.css';
import Stats from "./components/Stats";
import {useEffect, useState} from "react";
import {mockValues, mockForces} from "./values";
import OutputStats from "./components/OutputStats";

function App() {
    const [state, setState] = useState(mockValues)
    const [forces, setForces] = useState(mockForces)
    const [outputState, setOutputState] = useState([])
    const [inputNumber, setInputNumber] = useState(Math.pow(2,4))
    const [counter, setCounter] = useState({value:0})
    useEffect(()=>{
        recalc()
    }, [])

    useEffect(()=>{
        let res = []
        // res[0].number = 1
        console.log(inputNumber)
        for (let i = 0; i < inputNumber; i++){
            res[i] = {number: i, value: -1}
            // res[i].number = i
            // res[i].value = -1
        }
        setOutputState(res)
    }, [inputNumber])


    function resetState(){
        state.a = -1
        state.b = -1
        state.c = -1
        state.d = -1
        state.e = -1
        state.g = -1
        state.i = -1
        state.j = -1
        state.h = -1
        state.m = -1
        state.l = -1
        state.f = -1
        state.n = -1
        state.k = -1

        // state.z = -1
        // console.log("state reset")
        setState({...state})
    }

    function assignForces(){
        Object.keys(forces).forEach(el => {
            if (forces[el].forceOne) {
                state[el] = 1
            }
            if (forces[el].forceZero) {
                state[el] = 0
            }
        })
    }

    function recalc() {

        outputState.forEach(el=>{

            resetState()
            assignForces()
            state.a = state.a ===-1 ? (el.number&8) > 0 ? 1 : 0 : state.a
            state.b = state.b ===-1 ? (el.number&4) > 0 ? 1 : 0 : state.b
            state.c = state.c ===-1 ? (el.number&2) > 0 ? 1 : 0 : state.c
            state.d = state.d ===-1 ? (el.number&1) > 0 ? 1 : 0 : state.d
            state.e = state.e ===-1 ? state.a : state.e
            state.g = state.g ===-1 ? state.a : state.g
            state.i = state.i ===-1 ? state.c : state.i
            state.j = state.j ===-1 ? state.c : state.j
            state.h = state.h ===-1 ? state.b : state.h
            state.m = state.m ===-1 ? state.j | state.d +1-1 : state.m
            state.l = state.l ===-1 ? !(state.g & state.h & state.i) +1-1 : state.l
            state.f = state.f ===-1 ? state.l : state.f
            state.n = state.n ===-1 ? state.l : state.n
            state.k = state.k ===-1 ? !(state.e & state.f) +1-1 : state.k
            el.value = state.k & state.n & state.m +1-1
        })

        setOutputState(outputState)

        // state.z = state.z ===-1 ? state.k & state.n & state.m +1-1 : state.z
        // console.log("state update")
        // setState({...state})
        // console.log(state.k & state.n & state.m +1-1)
    }

    return (
        <div className="App" style={{display:'flex', flexDirection:'row'}}>
            <Stats state={state} forces={forces} setForces={setForces} recalc={recalc}/>
            <OutputStats outputState={outputState} />
        </div>
    );
}

export default App;
