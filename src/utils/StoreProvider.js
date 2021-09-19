import React, { useReducer } from 'react';
import { reducer } from "./Reducer.js";
import { Store } from "./Store.js";
import { initialState } from "./initialState.js";

export const StoreProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);


    return <Store.Provider value={{ state, dispatch }}>
        {children}
    </Store.Provider>;

};
