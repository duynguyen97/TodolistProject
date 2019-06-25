import {createAppContainer, createStackNavigator} from 'react-navigation'
import Todos from './Todos'
import Todo from './Todo.js'
const TodoScreen = createStackNavigator({
    Todos,
    Todo
},
{
  initialRouteName: 'Todos',
});
export default TodoScreen;
