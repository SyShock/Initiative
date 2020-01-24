import { h, FunctionalComponent } from "preact";
import { BaseComponent } from "../bases/BaseComponent";
import { ConnectStoreAlt } from "../store/connect";
import { Actions } from "../store/actions";
import { Modal } from "./Modal";
import { Container } from "./Container";

const HistoryItem: FunctionalComponent<any> = (props) =>
    <div class="entry">
        <div class="entry-text" onClick={() => props.setRouletteItems(props.value)}>{props.id}</div>
        <div onClick={() => props.removeHistory(props)}>X</div>
    </div>


@ConnectStoreAlt(Actions)
export class HistoryModal extends BaseComponent<{}, {}> {

    name = 'History'

    constructor() {
        super({alias: 'history'});
    }

    render() {
        const {setRouletteItems, removeHistory} = this.props.actions

        return (
            <Modal
                header={<span></span>}
                body={
                    <Container 
                        Component={HistoryItem} 
                        array={Object.values(this.props.store.history)} 
                        ComponentProps={{setRouletteItems, removeHistory}}
                    />
                }
                alias={this.alias}
                name={this.name}
            />
        )
    }
}