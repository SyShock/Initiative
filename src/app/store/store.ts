import createStore from "redux-zero";
import { applyMiddleware } from "redux-zero/middleware";
import { connect } from "redux-zero/devtools";
import { composeWithDevTools } from 'redux-devtools-extension';

export interface IStore {
    history?: IMap<Array<string>>,
    roulette_items?: Array<string>,
    templates?: IMap<Array<string>>
}

const defaultState: IStore = {
    history: {},
    roulette_items: [],
    templates: {}
};

interface IMap<valType> {
    [key: string]: {
        id: string,
        value: valType
    }
}

const state = {
    ...defaultState,
    ...JSON.parse(localStorage.getItem('store'))
}

const middlewares = connect ? applyMiddleware(
    connect(state)
) : [];
const store$ = createStore(state, middlewares);

window.onunload = () => {
    const string = JSON.stringify(store$.getState())
    localStorage.setItem('store', string);
}


export { store$ };
