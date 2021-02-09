import axios from '../../axios'
import AppUrls from '../apiEndpoints'
import actionTypes from '../actionTypes'

export const getTinderCards = dispatch => {
  axios.get(AppUrls.getTinderCards)
    .then(res => {
      console.log(res)
      if (res.data && res.data.apiData.length > 0) {
        dispatch({
          type: actionTypes.GET_TINDER_CARDS,
          payload: res.data.apiData
        })
      }
    })
    .catch(err => {
      console.log(err)
    })
}
