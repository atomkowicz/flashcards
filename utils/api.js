import { AsyncStorage } from 'react-native'
import { formatDecks } from './helpers'

export const DECKS_STORAGE_KEY = '@FlashCards:decks5'

export function fetchDecks() {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
        .then(result => JSON.parse(result))
}

export function saveDeckTitle(deckTitle) {
    return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
        [deckTitle]: {
            "id": deckTitle,
            "title": deckTitle,
            "questions": []
        }
    }))
}

export function addCardToDeck(d) {
    const { deck } = d;

    console.log("deck?????????????????????????")
    console.log(d)
    return AsyncStorage
        .mergeItem(DECKS_STORAGE_KEY, JSON.stringify(d))
}
