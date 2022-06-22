const hydrate = (plant) => {
  return {
    ...plant,
    water: (plant.water || 0) + 1
  }
};

const feed = (plant) => {
  return {
    ...plant,
    soil: (plant.soil || 0) + 1
  }
};

const giveLight = (plant) => {
  return {
    ...plant,
    light: (plant.light || 0) + 1
  }
};

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
    [prop]: (state[prop] || 0) + value
    })
  }
};
