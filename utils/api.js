import { AsyncStorage } from 'react-native'
import { getDecks } from './helpers'

export const DECKS_STORAGE_KEY = '@FlashCards:decks'

export function fetchDecks() {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
        .then(res => getDecks(res))
}