// Imports

// App Imports
import {
  CLIENTS_GET_LIST_REQUEST,
  CLIENTS_GET_LIST_RESPONSE,
  CLIENTS_GET_LIST_FAILURE,
  CLIENTS_GET_LIST_RESET,
  CLIENTS_GET_REQUEST,
  CLIENTS_GET_RESPONSE,
  CLIENTS_GET_FAILURE
} from './actions'

// list

// Initial State
const clientsInitialState = {
  isLoading: false,
  error: null,
  list: []
}

// State
export const clients = (state = clientsInitialState, action) => {
  switch (action.type) {
    case CLIENTS_GET_LIST_REQUEST:
      return {
        ...state,
        isLoading: action.isLoading,
        error: null
      }

    case CLIENTS_GET_LIST_RESPONSE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        list: action.list
      }

    case CLIENTS_GET_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }

    case CLIENTS_GET_LIST_RESET:
      return Object.assign({}, clientsInitialState)

    default:
      return state
  }
}


// Single

// Initial State
const clientInitialState = {
  isLoading: false,
  error: null,
  item: {}
}

// State
export const client = (state = clientInitialState, action) => {
  switch (action.type) {
    case CLIENTS_GET_REQUEST:
      return {
        ...state,
        isLoading: action.isLoading,
        error: null
      }

    case CLIENTS_GET_RESPONSE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        item: action.item
      }

    case CLIENTS_GET_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }

    default:
      return state
  }
}