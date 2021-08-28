import { createStore } from "redux";

const initialState = { assets: [], count: 0 };

const dataReducer = (state = initialState, action) => {
  if (action.type === "FETCH_DATA") {
    let result = [];
    for (let i = 0; i < action.data.length; i++) {
      result.push({ data: action.data[i], show_option: false });
    }
    return { assets: result, count: 0 };
  }

  if (action.type === "REFRESH_DATA") {
    let result = [];
    for (let i = 0; i < action.data.length; i++) {
      result[action.data[i].id] = action.data[i];
    }
    let new_assets = state.assets.map((asset) => {
      return { ...asset, data: result[asset.data["id"]] };
    });
    return { assets: new_assets, count: state.count };
  }

  if (action.type === "CUSTOMIZE_ON") {
    let new_assets = state.assets.map((asset) => {
      if (asset.data.id === action.data) {
        return { ...asset, show_option: true };
      } else {
        return asset;
      }
    });
    let new_count = state.count + 1;
    return { assets: new_assets, count: new_count };
  }

  if (action.type === "CUSTOMIZE_OFF") {
    let new_assets = state.assets.map((asset) => {
      if (asset.data.id === action.id) {
        return { ...asset, show_option: false };
      } else {
        return asset;
      }
    });
    let new_count = state.count - 1;
    return { assets: new_assets, count: new_count };
  }
  return state;
};

const store = createStore(dataReducer);

export default store;
