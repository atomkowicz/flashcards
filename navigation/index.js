import { StackNavigator, TabNavigator } from 'react-navigation';
import DeckList from '../components/DeckList';
import AddDeck from '../components/AddDeck';
import Deck from '../components/Deck';
import Quiz from '../components/Quiz';
import AddCard from '../components/AddCard';

const Tabs = TabNavigator({
    Decks: {
      screen: DeckList,
      navigationOptions: {
        tabBarLabel: 'Decks'
      },
    },
    AddDeck: {
      screen: AddDeck,
      navigationOptions: {
        tabBarLabel: 'Add Deck'
      },
    }
  }, {
      navigationOptions: {
        header: null
      },
      tabBarOptions: {
        style: {
          height: 56,
          shadowColor: 'rgba(0, 0, 0, 0.24)',
          shadowOffset: {
            width: 0,
            height: 3
          },
          shadowRadius: 6,
          shadowOpacity: 1
        }
      }
    })
  
  export default MainNavigator = StackNavigator({
    Main: { screen: Tabs },
    Deck: { screen: Deck },
    Quiz: { screen: Quiz },
    AddCard: { screen: AddCard },
  })