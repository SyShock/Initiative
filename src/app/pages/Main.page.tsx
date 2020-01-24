import { h } from "preact";
import { Roulette } from "../components/Roulette";
import { BasePage } from "../bases/BasePage";
import { ConnectStoreAlt } from "../store/connect";
import { Actions } from "../store/actions";

const spinAngleStart = Math.random() * 10 + 10;
const spinTimeTotal = () => Math.random() * 10000;

const defualtState = {
   result: '' 
}

@ConnectStoreAlt(Actions)
export class MainPage extends BasePage<{}, {}> {

    constructor(props) {
        super();
    }

    state = defualtState

    handleOnComplete = async (value) => {
        this.props.actions.addHistory(value)
        this.setState({result: value});
    }

    handleOnStart = async () => {
        this.setState(defualtState);
    }

    render() {
        const {roulette_items} = this.props.store;
        const {result} = this.state

        return (
            <div class="main-page">
                <Roulette 
                    options={roulette_items} 
                    fullscreen
                    onComplete={this.handleOnComplete}
                    onStart={this.handleOnStart}
                    spinAngleStart={spinAngleStart}
                    spinTimeTotal={spinTimeTotal}
                />
                <div class="result-text">{result}</div>
            </div>
        )
    }
}
