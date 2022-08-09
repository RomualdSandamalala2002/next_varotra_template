/// Vous pouvez créer des React Component ici, elle doit utiliser JavaScript pour
/// pouvoir marcher dans un navigateur

import { useState } from "react";

function Component(props){
    const [mofo,setMofo] = useState(0);
    function handleClick() {
        setMofo(mofo+1);
    }
    return <div onClick={handleClick}> {mofo}</div>
}

export default Component;