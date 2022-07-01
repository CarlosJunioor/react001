import React from 'react';

function Comment (props) {
    return (
        <div>
            <section className='comment'>
                <p className='title'>{props.title}</p>
                <p className='text'>{props.text}</p>
                <p className='author'>Author</p>
            </section>
           
        </div>
    )
}
export default Comment