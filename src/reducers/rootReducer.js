import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import gifsList from './gifReducer';

export default combineReducers({
 form: formReducer,
 gifsList: gifsList
});
