

function ImagenAncla(props) {
    return ( // codigo JSX
        <a href={props.liga} target="_blank">
            <img src={props.imgLogo} className="logo" alt={props.texto} />
        </a>
    )
}

export default ImagenAncla