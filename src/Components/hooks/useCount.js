import { useState } from "react";

export const useCount = (startCount = 1) => {
    const [count, setCount] = useState(startCount)

    const onChange = event => {
        setCount(event.target.value)
    }
    return { count, setCount, onChange }
}
