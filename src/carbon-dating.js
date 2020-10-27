const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const PART_OF_RADIOACTIVE_DECAY_CONSTANT = 0.693;

module.exports = function dateSample(sampleActivity) {
  if (typeof(sampleActivity) !== 'string' || !sampleActivity || !isFinite(sampleActivity) || +sampleActivity > MODERN_ACTIVITY || +sampleActivity < 1) {
    return false;
  }

  return Math.log(MODERN_ACTIVITY / sampleActivity) / (PART_OF_RADIOACTIVE_DECAY_CONSTANT / HALF_LIFE_PERIOD);
};
