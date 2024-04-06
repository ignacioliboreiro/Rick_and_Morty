import axios from "axios";

const initialState = {
    myFavorites: [],
    allCharacters: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_FAV':
            return { ...state, myFavorites: action.payload, allCharacters: action.payload};
            case 'REMOVE_FAV':
                return { ...state, myFavorites: action.payload };
        case "FILTER":
            if (action.payload === "All") {
                return {
                    ...state, 
                    myFavorites: state.allCharacters,
                };
            }
            const filterGender = state.allCharacters.filter(
                (ele) => ele.gender === action.payload
            );
            return {
                ...state,
                myFavorites: filterGender,
            };
        case "ORDER":
            const Ordenar = [...state.myFavorites]
            if (action.payload === "A") {
                Ordenar.sort((a, b) => a.id - b.id)
            }
            if (action.payload === "D") {
                Ordenar.sort((a, b) => b.id - a.id)
            }
            return {
                ...state,
                myFavorites: Ordenar

            }
        default:
            return {
                ...state
            }
    }
}


export default reducer;