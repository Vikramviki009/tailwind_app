import { createContext, useContext, useMemo, useReducer } from "react";

const StoreContext = createContext({});
StoreContext.displayName = "appStore";

export const useStore = () => useContext(StoreContext);

export function StoreProvider({ children, initialState, reducer }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const storeState = useMemo(() => [state, dispatch], [state]);
  return (
    <StoreContext.Provider value={storeState}>{children}</StoreContext.Provider>
  );
}
