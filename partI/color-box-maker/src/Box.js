import './Box.css'

function Box({backgroundColor, width, height, id, removeBox}) {

    const remove = () => {
        removeBox(id);
    };

    return (
        <>
            <div className="Box" style={{backgroundColor, width, height}}>
                <button className='Remove' onClick={remove}>x</button>
            </div>
        </>
    )
}

export default Box;