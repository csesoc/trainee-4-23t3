import { useState } from "react"

const SampleComponent = () => {
    const[list, setList] = useState(["item1", "item2", "item3"]);

    const renderList = list.map(x => <p>{x}</p>)

    return(
        <div>
            <p>hellooooo</p>
            <button>add task</button>
            {renderList}
        </div>
    )
}

export default SampleComponent;