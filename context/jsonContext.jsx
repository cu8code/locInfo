import { createContext, useContext, useState } from "react";

export const jsonContext = createContext(null);

export function JsonContext({ children }) {
  const [jsonData, setData] = useState({
    profile: {
      img: "",
      name: "",
    },
    education: {
      school: [],
      university: [],
    },
    workExperience: [],
  });
  return (
    <jsonContext.Provider value={[jsonData,setData]}>
      {children}
    </jsonContext.Provider>
  )
}
export function useJsonContext () {
  return useContext(jsonContext)
}
