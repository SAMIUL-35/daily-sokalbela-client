import { createContext } from "react";

export const MyContext=createContext(null);
const ContexApi = ({children}) => {
  return (
    <MyContext.Provider value={'sami'}>
      {children}
    </MyContext.Provider>
  );
};

export default ContexApi;