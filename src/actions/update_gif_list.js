export const UPDATE_GIFS = 'UPDATE_GIFS';

export function updateGifsList(gifUrls) {
  return {
    type: UPDATE_GIFS,
    payload: gifUrls
  }
}
