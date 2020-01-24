import { h } from "preact";
import { Base } from "./Base";

interface construtor {
    alias: string,
    name?: string
}

export abstract class BaseComponent<props, state> extends Base<props, state> {

    alias: string
    constructor(config: construtor) {
        super();
        const { alias, name } = config
        this.alias = alias;
        (window as any).components = {
            [alias]: this,
            ...(window as any).components
        }
    }

    render() {
        return (<div />)
    }
}