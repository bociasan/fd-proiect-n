export default function Stat({name, value, forces, setForces, recalc}) {
    function resetForces() {
        Object.keys(forces).forEach(el => {
            forces[el].forceZero = false;
            forces[el].forceOne = false;
        })
        setForces({...forces})
    }

    function handleF0() {
        const flag = forces[name].forceZero
        resetForces()
        if (!flag) {
            forces[name].forceZero = !forces[name].forceZero
            setForces({...forces})
        }
        console.log('f0')
        recalc()
    }

    function handleF1() {
        const flag = forces[name].forceOne
        resetForces()
        if (!flag) {
            forces[name].forceOne = !forces[name].forceOne
            setForces({...forces})
        }
        console.log('f1')
        recalc()
    }

    return <div key={name} style={{margin: 'auto', width: '120px', display: 'flex', justifyContent: 'space-between'}}>
        <div style={{width: '20px'}}>{name}</div>
        <div>{value}</div>
        {
            name === 'counter' ? '' :
                <div>
                    <button style={{backgroundColor: forces[name].forceZero ? 'red' : 'white'}}
                            onClick={() => handleF0()}>F0
                    </button>
                    <button style={{backgroundColor: forces[name].forceOne ? 'red' : 'white'}}
                            onClick={() => handleF1()}>F1
                    </button>
                </div>
        }
    </div>
}