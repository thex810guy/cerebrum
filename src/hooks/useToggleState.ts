import { useState } from "react";

export default function useToggleState(initialValue: boolean = false): [boolean, () => void] {
    const [state, setState] = useState(initialValue);

    const toggle = () => {
        setState((state) => !state);
    };

    return [state, toggle];
}