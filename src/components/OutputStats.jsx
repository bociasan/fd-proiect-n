export default function OutputStats({outputState}){
    return <div style={{margin:'10px'}}>
        {
            outputState.map(el => <div><p>{el.number}<span style={{marginLeft:'10px'}}>{el.value}</span></p></div>)
        }
    </div>
}