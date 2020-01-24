import { h}  from "preact";
import { Base } from "./Base";

export abstract class BasePage<props, state> extends Base<props, state> {

    constructor() {
        super();
        (window as any).current_page = this;
    }

    render() {
        return(<div />)
    }
}