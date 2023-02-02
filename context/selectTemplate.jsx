import { createContext, useContext, useState } from "react";

const selectTemplate = createContext(null)

export function TemplateContext({ children }) {
    const [template, setTemplate] = useState(null)
    return (<selectTemplate.Provider value={[template, setTemplate]}>
        {children}
    </selectTemplate.Provider>)
}

export default function useSelectTemplateContext() {
    return useContext(selectTemplate)
}