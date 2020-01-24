import { h } from "preact";
import { ConnectStoreAlt } from "../store/connect";
import { Actions } from "../store/actions";
import { BaseComponent } from "../bases/BaseComponent";
import { Container } from "./Container";
import { Modal } from "./Modal";


const Entry = (props: any) => 
    <div class="entry">
        <div class="entry-text">{props._value}</div>
        <div onClick={() => props.removeRouletteItem(props._value)}>
            X
        </div>
    </div>


@ConnectStoreAlt(Actions)
export class RouletteModal extends BaseComponent<{}, {}> {

    inputElement: HTMLInputElement
    name = 'Items'

    constructor(props) {
        super({alias:'items'});
    }

    submit = (ev: Event) => {
        ev.preventDefault()
        this.props.actions.addRouletteItem(this.inputElement.value)
        this.inputElement.value = ''
    }

    render() {
        const { roulette_items } = this.props.store;
        const { removeRouletteItem } = this.props.actions;

        return (
            <Modal 
                header={
                    <form onSubmit={this.submit} >
                        <input ref={inputElement => this.inputElement = inputElement} ></input>
                    </form>
                }
                body={
                    <Container array={roulette_items} Component={Entry} ComponentProps={{removeRouletteItem}}/>
                }
                alias={this.alias}
                name={this.name}
            />
        )
    }
}