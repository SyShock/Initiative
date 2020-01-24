import { h } from "preact";
import { BaseComponent } from "../bases/BaseComponent";
import { ConnectStoreAlt } from "../store/connect";
import { Actions } from "../store/actions";
import { Container } from "./Container";
import { Modal } from "./Modal";

const TemplateItem = (props) =>  
    <div class="entry">
        <div class="entry-text" onClick={() => props.actions.setRouletteItems(props.value)}>{props.id}</div>
        <div onClick={() => props.actions.removeTemplate(props)}>X</div>
    </div>


@ConnectStoreAlt(Actions)
export class TemplateModal extends BaseComponent<{}, {}> {

    inputElement: HTMLInputElement
    name = 'Template'

    constructor() {
        super({alias:'templates'});
    }

    submit = (ev: Event) => {
        ev.preventDefault()
        this.props.actions.addTemplate(this.inputElement.value as any)
        this.inputElement.value = ''
    }


    render() {
        const { templates } = this.props.store;
        const {removeTemplate, setRouletteItems, addTemplate} = this.props.actions

        return (
            <Modal
                header={
                    <form onSubmit={this.submit} >
                        <input ref={inputElement => this.inputElement = inputElement} ></input>
                    </form>
                }
                body={
                    <div>
                        <Container 
                            Component={TemplateItem} 
                            array={Object.values(templates)} 
                            ComponentProps={{removeTemplate, setRouletteItems, addTemplate}} 
                        />
                    </div>
                }
                alias={this.alias}
                name={this.name}
            />
        )
    }
}