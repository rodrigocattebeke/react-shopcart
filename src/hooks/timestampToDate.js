export const timestampToDate = (timestamp = null) => {
  if (!timestamp) {
    console.warn("No se especificó ningun timestamp");
    return null;
  }
  if (timestamp < 0) {
    console.warn("El timestamp no puede ser menor a 0");
    return null;
  }

  let days = timestamp / (1000 * 60 * 60 * 24);
  let hours = (days % parseInt(days)) * 60;
  let minutes = (hours % parseInt(hours)) * 60;
  let seconds = (minutes % parseInt(minutes)) * 60;

  return {
    days: Math.floor(days),
    hours: Math.floor(hours),
    minutes: Math.floor(minutes),
    seconds: Math.floor(seconds),
  };
};
