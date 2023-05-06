import { GET_DOGS } from "./actions";
import { FILTER_TEMPS } from "./actions";
import { FILTER_CREATED } from "./actions";

const initialState = {
  dogs: [],
  allDogs: [],
  filterTemp: null,
  filterCreated: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DOGS:
      return { ...state, dogs: action.payload, allDogs: action.payload };

    case FILTER_TEMPS:
      const temperament = action.payload;
      state.filterTemp = temperament;

      let dogsWithTemps = state.allDogs;

      if (state.filterCreated) {
        const flag = state.filterCreated === "user" ? true : false;
        dogsWithTemps = dogsWithTemps.filter(
          (dog) => dog.createdByUser === flag
        );
      }

      if (state.filterTemp) {
        dogsWithTemps = dogsWithTemps.filter((dog) =>
          temperament.some((temp) => dog.temperaments.includes(temp))
        );
      }

      return {
        ...state,
        dogs: dogsWithTemps,
        filterTemp: temperament,
      };

    case FILTER_CREATED:
      const flag = action.payload === "user" ? true : false;
      let filteredDogs = state.allDogs;
      if (state.filterTemp) {
        const temp = state.filterTemp;
        filteredDogs = filteredDogs.filter((dog) =>
          temp.some((t) => dog.temperaments.includes(t))
        );
      }
      if (action.payload === "All") {
        return {
          ...state,
          dogs: filteredDogs,
          filterCreated: null,
        };
      } else {
        filteredDogs = filteredDogs.filter((dog) => dog.createdByUser === flag);
        return {
          ...state,
          dogs: filteredDogs,
          filterCreated: action.payload,
        };
      }

    default:
      return { ...state };
  }
};

export default rootReducer;
