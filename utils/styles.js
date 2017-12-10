import { StyleSheet } from 'react-native';
import { purple, gray, white } from '../utils/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    deckContainer: {
        flex: 2,
    },
    deck: {
        flex: 2,
        marginTop: 5,
        padding: 40,
        backgroundColor: white,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
            width: 0,
            height: 3
        },
    },
    text: {
        fontSize: 25,
        marginTop: 20,
    },
    buttonContainer: {
        margin: 10,
        flex: 1,
    },
    button: {
        flex: 1,
        padding: 20,
        margin: 5,
        height: 50,
        backgroundColor: purple,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonInactive: {
        flex: 1,
        padding: 20,
        margin: 5,
        height: 50,
        backgroundColor: purple,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.4
    },
    buttonText: {
        color: white
    },
    card: {
        flex: 1,
        margin: 20,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardContainer: {
        flex: 1,
        backgroundColor: white,
        margin: 20,
        padding: 20,
    }
})

export const formStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    textInput: {
        height: 40,
        marginTop: 10,
        fontSize: 14,
    },
    label: {
        padding: 10,
        fontSize: 14,
        marginTop: 10,
    },
    text: {
        marginTop: 10
    },
    submitBtn: {
        flex: 1,
        padding: 20,
        margin: 5,
        height: 50,
        backgroundColor: purple,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: white
    }
})

export const listStyles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        padding: 20
    }
});

export const listItem = StyleSheet.create({
    DeckListItem: {
        marginTop: 5,
        padding: 40,
        backgroundColor: white,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
            width: 0,
            height: 3
        },
    },
    text: {
        fontSize: 20
    }
})

export const appStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    statusBar: {
        marginTop: 30
    }
});