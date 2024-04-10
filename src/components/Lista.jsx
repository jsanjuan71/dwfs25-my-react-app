

function Lista(props) { // componente funcional
    return ( // codigo JSX
       <ul>
            <li>UCampers</li>
            { // codigo JS
                props.elementos.map( elem => {
                    return ( // codigo JSX
                        <li key={elem} style={{color: "white"}}>{elem}</li>
                    )
                })
            }
       </ul>
    )
}

export default Lista