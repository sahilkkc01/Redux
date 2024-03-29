const redux =require('redux')
const createStore=redux.createStore;

const CAKE_ORDER='CAKE_ORDER';

function orderCake(){
    //Return an action as an object
    return{
        type:CAKE_ORDER,
        quantity:1
    }
}

//making and reducer

const initialState={
    noOfCake:10,
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case CAKE_ORDER :  
            return {
                //making copy of state object
                ...state,
                noOfCake:state.noOfCake - 1,
            }
        default:
            return state;
    }
}

//making store now

const store=createStore(reducer)