import { h } from "preact";
import { Connect } from "redux-zero/preact";


// rather than using ref and ref.context
// just extend the connect component and flatout overwrite the wanted method
class ConnectExtended extends Connect {
    constructor(props, context) {
        super(props,context)
    }
    render({children}, state, { store }) {
        const child = (children && children[0]) || children
        return child({store: store.getState(), actions: this.actions, ...state})
    }
} 


export const ConnectStore = (actions = {}): any => {
    return Child => props => (
        <Connect mapToProps={state => ({ ...state })} actions={actions}>
            {mappedProps => <Child {...mappedProps} {...props} />}
        </Connect>
    )
}

export const ConnectStoreAlt = (actions = {}): any => {
    return Child => props => (
        // <Connect ref={el => ref=el} mapToProps={state => { return { ...state } }} actions={actions}>
        <ConnectExtended mapToProps={state => { return { ...state } }} actions={actions}>
            { mapToProps => <Child store={mapToProps.store} actions={mapToProps.actions} {...props} />}
        </ConnectExtended>
    )
}