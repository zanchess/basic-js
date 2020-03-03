module.exports = function getSeason(date) {
  if (date == undefined) {
    return  'Unable to determine the time of year!';
  }

  if (date.hasOwnProperty('getMonth')) {
    throw new Error('Error');
  }

  let month = date.getMonth();
  switch (true) {
    case month >= 11 || (month >= 0 && month < 2):
      return "winter";
      break;
    case month >= 2 &&  month <= 4:
        return "spring";
        break;
    case month >= 5 &&  month <= 7:
        return "summer";
        break;
    case month >= 8 &&  month <= 10:
        return "autumn";
        break;
  }

};
