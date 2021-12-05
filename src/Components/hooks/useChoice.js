import { useState } from "react";

export function useChoice(openItem) {
    const [choice, setChoice] = useState()

    function changeChoices(e) {
        setChoice(e.target.value);
    }

    return { choice, changeChoices }
}