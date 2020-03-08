const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof(sampleActivity) !== "string" || typeof(+sampleActivity) !== "number" || +sampleActivity <= 0 || +sampleActivity > MODERN_ACTIVITY || /[a-zA-Z]/.test(sampleActivity) ) {
    return false;
  } else{
    let age = Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / (0.693 / HALF_LIFE_PERIOD));
    return age;
  }
};
