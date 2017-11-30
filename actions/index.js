export const GET_DECKS = 'GET_DECKS';
export const GET_DECK = 'GET_DECK';
export const SAVE_DECK_TITLE = 'SAVE_DECK_TITLE';
export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK';
import * as  API from '../utils/api';


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
export function getDeck(deck) {
    return {
        type: GET_DECK,
        deck
    }
}

export function saveDeckTitle(deck) {
    return (dispatch) => {
        API
            .saveDeckTitle(deck)
            .then(() => dispatch({
                type: SAVE_DECK_TITLE,
                decks: deck
            }))
    }
}
export function addCardToDeck(card, deck) {
    return {
        type: ADD_CARD_TO_DECK,
        deck
    }
}
