import { createContext, useContext, useState } from "react";

const jsonContext = createContext(null);

export function JsonContext({ children }) {
  const [jsonData, setData] = useState({
    name: "Ankan Roy",
    subHeading: "sub-heading",
    country: "india",
    city: "asansol",
    phoneNumber: "8768204119",
    twitter: "cu8code",
    github: "cu8code",
    description: "dsU4plEotgQozLdudsU4plEotgQozLdudsU4plEotgQozLdudsU4plEotgQozLdudsU4plEotgQozLdudsU4plEotgQozLdudsU4plEotgQozLdudsU4plEotgQozLdudsU4plEotgQozLdudsU4plEotgQozLdudsU4plEotgQozLdudsU4plEotgQozLdudsU4plEotgQozLdudsU4plEotgQozLdudsU4plEotgQozLdudsU4plEotgQozLdudsU4plEotgQozLdudsU4plEotgQozLdudsU4plEotgQozLdudsU4plEotgQozLdudsU4plEotgQozLdudsU4plEotgQozLdudsU4plEotgQozLdudsU4plEotgQozLdudsU4plEotgQozLdudsU4plEotgQozLdudsU4plEotgQozLdudsU4plEotgQozLdudsU4plEotgQozLdudsU4plEotgQozLdudsU4plEotgQozLdudsU4plEotgQozLdudsU4plEotgQozLdudsU4plEotgQozLdudsU4plEotgQozLdudsU4plEotgQozLdudsU4plEotgQozLdu",
    education: [{
      intitution: "Alta",
      description:"RYY6R5lYro38felcP9tRYY6R5lYro38felcP9tRYY6R5lYro38felcP9tRYY6R5lYro38felcP9tRYY6R5lYro38felcP9t",
      url: [
        "http://afcirti.ly/iwrewus"
      ],
      initData: "8/27/2120",
      endDate: "11/15/2078"
    }, {
      intitution: "Joel",
      description:"tw4bz0OijswqycDZtw4bz0OijswqycDZtw4bz0OijswqycDZtw4bz0OijswqycDZtw4bz0OijswqycDZtw4bz0OijswqycDZ",
      url: [
        "http://di.cn/keglozek"
      ],
      initData: "8/27/2120",
      endDate: "11/15/2078"
    }, {
      intitution: "Birdie",
      description:"ZhpMsjqZhpMsjqZhpMsjqZhpMsjqZhpMsjqZhpMsjqZhpMsjq",
      url: [
        "http://da.cu/umobcej"
      ],
      initData: "8/27/2120",
      endDate: "11/15/2078"
    },
    ],
    workExperience: [{
      intitution: "Ian",
      url: [
        "http://he.cu/zenfipgaz"
      ],
      initData: "8/27/2120",
      endDate: "11/15/2078"

    }, {
      intitution: "Ian",
      url: [
        "http://he.cu/zenfipgaz"
      ],
      initData: "8/27/2120",
      endDate: "11/15/2078"

    }, {
      intitution: "Ian",
      url: [
        "http://he.cu/zenfipgaz"
      ],
      initData: "8/27/2120",
      endDate: "11/15/2078"
    }],
  });
  return (
    <jsonContext.Provider value={[jsonData, setData]}>
      {children}
    </jsonContext.Provider>
  )
}
export function useJsonContext() {
  return useContext(jsonContext)
}
