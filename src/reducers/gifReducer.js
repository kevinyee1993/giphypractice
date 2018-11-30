import { UPDATE_GIFS } from '../actions/update_gif_list';

export default function (state = {}, action) {
  switch(action.type) {
    case UPDATE_GIFS:
      return action.payload;
    default:
      return state;
  }
}
