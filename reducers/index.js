import {
    GET_DECKS,
    GET_DECK,
    SAVE_DECK_TITLE,
    ADD_CARD_TO_DECK
} from '../actions';

function decks(state = {}, action) {

    const { decks } = action;
    switch (action.type) {
        case GET_DECKS:
            return {
                ...decks
            };
        case GET_DECK:
            return state;
        case SAVE_DECK_TITLE:
            return {
                ...state,
                ...decks.deck
            };
        default:
            return state;
    }
}

export default decks;

