import { items } from './States';
import {ADD_TODO, DELETE_TODO, UPDATE_TODO} from './Actions'

export const Reducer = (state = items, action) => {
    switch (action.type){
        case ADD_TODO:
            if(action.item !== ''){
                return state = [...state, {name:action.item}];
            }else{
                return state;
            };
        case DELETE_TODO:
            return state.filter(item=>state.indexOf(item) !== action.itemId)
        case UPDATE_TODO:
            if(action.item !==''){
                let plan = state[action.id];
                plan.name=action.item
                return state
            }else{
                return state.filter(item=>state.indexOf(item) !== action.id);
            }
        default:
            return state;
    }
}












    