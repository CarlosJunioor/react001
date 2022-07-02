import React from 'react'

function Comment (props) {
    
    let num = 43523;
    num = Math.ceil(Math.random()*50);

    function Maiusculas(texto){
        return (
            texto.toUpperCase()
        )
    }

    return (
        <>
        <section className='comment'>
            <p className='title'>{Maiusculas(props.title)}</p>
            <p className='text'>{props.text}</p>
            <p className='author'>{props.author}</p>
            <p>{num}</p>
        </section>
        </>
    )
}
export default Comment