
import { useEffect, useState } from "react";
const useCustoHook = (initialValue) => {
    
    console.log("madhanuuu");
    const [value,setValue] = useState(initialValue);
    useEffect(() => {
        changevalue();   
    }, [])
    const changevalue = () => {
        setValue(true);
    }
    return value;

}
export default useCustoHook;