import { IStore } from "./store";

const generateId = () => {
    return Math.round(Math.random() * 100000)
}

type InitialFn = (state: IStore, ...args: any) => void
type PostTransformationFn<F extends InitialFn> = F extends (state: IStore, ...args: infer P) => void ? (...args: P) => void : never

const getStamp = () => {
    const d = new Date();
    return `${d.getFullYear()}/${d.getMonth()}/${d.getDay()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
}

const addRouletteItem = (state: IStore, val: string): IStore => {
    const {roulette_items} = state
    return { roulette_items: [ ...roulette_items, val] }
}


const setRouletteItems = (state: IStore, vals: Array<string>): IStore => {
    return { roulette_items: [...vals] }
}

const removeRouletteItem = (state: IStore, val: string): IStore => {
    const { roulette_items } = state
    return { roulette_items: roulette_items.filter(item => item !== val) }
}

const addHistory = (state: IStore, val) => {
    const historyItem = {
        id: val ? `${getStamp()} > ${val}` : getStamp(),
        value: state.roulette_items
    }
    return { history: { ...state.history, [historyItem.id]: historyItem} }
}

const removeHistory = (state: IStore, val) => {
    const history = {...state.history}
    delete history[val.id]
    return { history }
}

const addTemplate = (state: IStore, val: string): IStore => {
    const templateItem = {
        id: val,
        value: [...state.roulette_items]
    }
    return { templates: { ...state.templates, [templateItem.id]: templateItem } }
}


const removeTemplate = (state: IStore, val): IStore => {
    const templates = { ...state.templates }
    delete templates[val.id]
    return { templates }
}

export const Actions = {
    addRouletteItem,
    setRouletteItems,
    removeRouletteItem,
    addHistory,
    removeHistory,
    addTemplate,
    removeTemplate
}

// type AbstractAction<F> = PostTransformationFn<typeof F>

export const ActionTypes = {
    addRouletteItem: {} as PostTransformationFn<typeof addRouletteItem>,
    setRouletteItems: {} as PostTransformationFn<typeof setRouletteItems>,
    removeRouletteItem: {} as PostTransformationFn<typeof removeRouletteItem>,
    addHistory: {} as PostTransformationFn<typeof addHistory>,
    removeHistory: {} as PostTransformationFn<typeof removeHistory>,
    addTemplate: {} as PostTransformationFn<typeof addTemplate>,
    removeTemplate: {} as PostTransformationFn<typeof removeTemplate>
}