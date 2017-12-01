import {
    GET_DECKS,
    GET_DECK,
    SAVE_DECK_TITLE,
    ADD_CARD_TO_DECK
} from '../actions';

function decks(state = {}, action) {

    const { decks, deckTitle, deckId, card } = action;
    switch (action.type) {
        case GET_DECKS:
            return {
                ...decks
            };
        case SAVE_DECK_TITLE:
            return {
                ...state,
                [deckTitle]: {
                    "id": deckTitle,
                    "title": deckTitle,
                    "questions": []
                }
            };
        case ADD_CARD_TO_DECK:
            const { questions } = state[deckId];

            return {
                ...state, [deckId]: {
                    ...state[deckId], ["questions"]:
                        [...questions, card]
                }
            }

        default:
            return state;
    }
}

export default decks;
