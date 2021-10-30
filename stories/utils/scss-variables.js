import variables from "./scss-variables.module.scss";

const parsed = Object.entries(variables).reduce((result, [key, value]) => {
  if (key.includes("--")) {
    // Map
    const [collection, k] = key.split("--");

    if (!result[collection]) {
      result[collection] = {};
    }

    result[collection][k] = value;
  } else {
    // Plain value
    result[key] = value;
  }

  return result;
}, {});

export default parsed;
