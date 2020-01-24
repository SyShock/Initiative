import { h, Component } from "preact";

export type ContainerItemProps = {
    _value: any
}
export class Container extends Component<{array: Array<any>, Component: any, mapFunc?: any, ComponentProps: any}, {}> {

    render() {
        const { array, Component, mapFunc, ComponentProps } = this.props
        
        return (
            <div>
                {array.map((el) => mapFunc ? mapFunc(el, Component) : <Component {...el} {...ComponentProps} _value={el} />)}
            </div>
        )
    }
}