import {createStore} from 'redux';

const initialState = {
  HasPhoto: false,
  base64Image: 'base64Code',
  catBreed: 'catBreed',
  catInfo: [],
  catChara: [],
  catAccuracy: 0,
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_HASPHOTO':
      return {
        ...state,
        HasPhoto: action.value,
      };
    case 'SET_BASE64':
      return {
        ...state,
        base64Image: action.value,
      };
    case 'SET_CATBREED':
      return {
        ...state,
        catBreed: action.value,
      };
    case 'SET_CATACC':
      return {
        ...state,
        catAccuracy: action.value,
      };
    case 'SET_CATINFO':
      return {
        ...state,
        catInfo: action.value,
      };
    case 'SET_CATCHARA':
      return {
        ...state,
        catChara: action.value,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.value,
      };
  }

  return state;
};

const store = createStore(reducer);

export default store;
