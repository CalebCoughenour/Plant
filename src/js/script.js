// This function stores our state.

export const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };
};

export const stateControl = storeState();

// This is a function factory. We can easily create more specific functions that alter a plant's soil, water, and light to varying degrees.

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    });
  };
};

// We create four functions using our function factory. We could easily create many more.

export const feed = changeState("soil")(1);
export const blueFood = changeState("soil")(3);

export const hydrate = changeState("water")(1);
export const superWater = changeState("water")(4);

export const light = changeState("light")(1);
export const ledLight = changeState("light")(6);







// const hydrate = (plant) => {
//   return {
//     ...plant,
//     water: (plant.water || 0) + 1
//   }
// };

// const feed = (plant) => {
//   return {
//     ...plant,
//     soil: (plant.soil || 0) + 1
//   }
// };

// const giveLight = (plant) => {
//   return {
//     ...plant,
//     light: (plant.light || 0) + 1
//   }
// };

// const changeState = (prop) => {
//   return (value) => {
//     return (state) => ({
//       ...state,
//     [prop] : (state[prop] || 0) + value
//     })
//   }
// };



// const storeState = () => {
//   let currentState = {};
//   return (stateChangeFunction = state => state) => {
//     const newState = stateChangeFunction(currentState);
//     currentState = {...newState}
//     return newState;
//   }
// }

// So you can pass in the initial properties
// const storeState = (initialState) => {
//   let currentState = initialState;
//   return (stateChangeFunction) => {
//     const newState = stateChangeFunction(currentState);
//     currentState = {...newState}
//     return newState;
//   }
// }