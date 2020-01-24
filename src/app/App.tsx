import { h, render, Component, FunctionalComponent } from "preact";
import { MainPage } from "./pages/Main.page";
import { ToolBar } from "./components/Toolbar";
import { store$ } from "./store/store";
import { Provider } from "./store/provider";
import { HistoryModal } from "./components/History.modal";
import { RouletteModal } from "./components/Items.modal";
import { TemplateModal } from "./components/Template.modal";

export class App extends Component {
    
    constructor() {
        super();
        (window as any).current_app = this

        //@ts-ignore
        window.onbeforeinstallprompt = e => { 
        }
    }

    state = {
        cssDebug: ''
    }
    store$ = store$

    toggleDebug() {
        this.setState({cssDebug: this.state.cssDebug === '' ? 'debug' : ''})
    }

    render() {
        const {cssDebug} = this.state
        return (
            <Provider store={store$}>
                <div key="app" id="APP" class={cssDebug} >
                    <MainPage />
                    <ToolBar />
                </div>
            </Provider>
        )        
    }
}
