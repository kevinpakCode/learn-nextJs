import * as t from './../types'

const inti = {
  'status': false,
}

const ModaleReducer = (state=inti, action) => {
  switch(action.type) {
    case 'OPEN_MODALE':
      return {
        ...state,
        'status': action.playload
      }

    case 'CLOSE_MODALE':
      return {
        ...state,
        'status': action.playload
      }

    default: 
      return {...state}
  }
}

export default ModaleReducer
