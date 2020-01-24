import { h, Component, FunctionalComponent } from "preact";
import { BaseComponent } from "../bases/BaseComponent";

// export const ModalWrapper = ({body,header}: {body: IPropComponent, header: IPropComponent}) => 

// tried preclass return injection
export class Modal extends BaseComponent<any, any> {
    inputElement: HTMLInputElement

    constructor(props) {
        super(props.alias);
    }

    goToUrl(id: string) {
        location.href = location.href.replace(/#$|$/g, `#${id}`)
    }

    close = () => {
        history.back()
    }

    render() {
        return (
            <div>
                <div class="modal-button-title" onClick={() => this.goToUrl(this.props.alias)}>{this.props.name}</div>
                <div id={this.props.alias} class="light-modal">
                    <div class="light-modal-content">
                        <div class="light-modal-header">
                            {/* either prop/s or filtered children */}
                            { this.props.header }
                        </div>
                        <div class="light-modal-body">
                            {/*  */}
                            { this.props.body }
                        </div>
                    </div>
                    <div class="modal-background" onClick={this.close} />
                </div>
            </div>
        )
    }
}