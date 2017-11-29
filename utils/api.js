import { AsyncStorage } from 'react-native'
import { getDecks } from './helpers'

export const DECKS_STORAGE_KEY = '@FlashCards:decks6'

export function fetchDecks() {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
        .then(res => getDecks(res))
}

export function saveDeckTitle({ deck }) {
    return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(deck));
}

export function clearDecks() {
    AsyncStorage.clear();
}