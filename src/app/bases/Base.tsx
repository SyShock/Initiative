import { h, Component } from "preact";
import { IStore } from "../store/store";
import { ActionTypes } from "../store/actions";

export type AltType = { actions: typeof ActionTypes, store: IStore }
export type Type = IStore & typeof ActionTypes

export abstract class Base<props, state> extends Component<AltType & props, state> {

    constructor() {
        super();
    }

    setState(obj: {}) {
        const promise = new Promise(resolve => {
            super.setState(obj, () => resolve())
        })
        return promise
    }

    render() {
        return (<div />)
    }
}