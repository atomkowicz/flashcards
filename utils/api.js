import { AsyncStorage } from 'react-native'
import { formatDecks } from './helpers'

export const DECKS_STORAGE_KEY = '@FlashCards:decks5'

export function fetchDecks() {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
        .then(result => JSON.parse(result))
}

export function saveDeckTitle({ deck }) {
    return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(deck))
}

export function clearDecks() {
    AsyncStorage.removeItem(DECKS_STORAGE_KEY);
}