export const GET_DECKS = 'GET_DECKS';
export const GET_DECK = 'GET_DECK';
export const SAVE_DECK_TITLE = 'SAVE_DECK_TITLE';
export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK';
import * as  API from '../utils/api';
import { fetchDecks } from '../utils/api';


export function getDecks() {
    return (dispatch) => {
        API
            .fetchDecks()
            .then(decks => dispatch({
                type: GET_DECKS,
                decks
            }))
    }
}

export function saveDeckTitle(deckTitle) {
    return (dispatch) => {
        API
            .saveDeckTitle(deckTitle)
            .then(() => dispatch({
                type: SAVE_DECK_TITLE,
                deckTitle
            }))
    }
}
export function addCardToDeck(card, deckId, deck) {
    return (dispatch) => {
        API
            .addCardToDeck(deck)
            .then(() => dispatch({
                type: ADD_CARD_TO_DECK,
                card,
                deckId
            }))
           
    }
}

