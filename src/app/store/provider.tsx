import { Component, JSX } from 'preact';

export class Provider<S = any> extends Component<{store: any}, {}> {

    getChildContext() {
        return { store: this.props.store }
    }

    
    render() {
        return (
            (this.props.children && this.props.children[0]) || 
            (this.props.children as JSX.Element)
        )
    }
}