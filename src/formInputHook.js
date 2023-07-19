import { useState } from "react";

export function useHandleInput (initialValue){
    const [value, setValue] = useState();

    function handlechange(e){
        setValue(e.target.value);
    }

    return {
        value,
        onChange: handlechange
    };
}