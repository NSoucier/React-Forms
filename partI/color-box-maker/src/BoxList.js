import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

function BoxList() {
    const [ id, setId ] = useState(1);
    const [ boxList, setBoxList ] = useState([{
        backgroundColor: 'salmon',
        width: 100, 
        height: 100,
        id
    }]);

    const addbox = (backgroundColor, width, height) => {       
        setBoxList([...boxList, {backgroundColor, width: parseInt(width), height: parseInt(height), id: id+1}]);
        setId(id + 1);
    }

    const removeBox = (id) => {
        alert(`removing box ${id}`)
        setBoxList(boxList.filter(box => box.id !== id))
    };

    return (
        <>
            <NewBoxForm addbox={addbox} />
            {boxList.map(box => (
                <Box backgroundColor={box.backgroundColor} width={box.width} height={box.height} key={box.id} id={box.id} removeBox={removeBox}/>
            ))}
        </>
    )
}

export default BoxList;