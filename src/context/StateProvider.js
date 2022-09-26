import {createContext, useContext, useReducer} from 'react';

// dataLayer
export const StateContext = createContext();

// Wrap our app and provide the Data layer
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value = {useReducer(reducer, initialState)}>
        {/* gives access of state to all children in stateContext.provider */}
        {children}
    </StateContext.Provider>
);

// Pull information from the data layer
export const useStateValue = () =>useContext(StateContext);