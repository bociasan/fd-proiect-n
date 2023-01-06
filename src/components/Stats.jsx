import Stat from "./Stat";

export default function Stats({state, forces, setForces, recalc}){
console.log(forces['a'])
    // forceZero={forces[key].forceZero} forceOne={forces[key].forceOne}
    return Object.keys(state).map(key => <Stat name ={key}  value={state[key]} forces={forces} setForces={setForces} recalc={recalc}/>)
}