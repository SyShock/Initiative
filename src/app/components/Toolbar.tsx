import { h, Component } from "preact";
import { ConnectStoreAlt } from "../store/connect";
import { HistoryModal } from "./History.modal";
import { RouletteModal } from "./Items.modal";
import { TemplateModal } from "./Template.modal";

@ConnectStoreAlt()
export class ToolBar extends Component<any, any> {

    constructor() {
        super();
    }

    render() {
        return (
            <div class="toolbar">
                <div class="toolbar-wrapper">
                    <div class="toolbar-content">
                        <RouletteModal />
                        <HistoryModal />
                        <TemplateModal />
                    </div>
                </div>
            </div>
            )
    }
}