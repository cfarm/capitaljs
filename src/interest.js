var utils = require('./utils');

/**
 * Calculates simple interest.
 * @param {object} Principal, rate (express as a decimal, e.g. 0.05) and years.
 * @returns {object} Amount of interest paid and total amount paid (principal + interest).
 */
function interest(opts) {
  let {principal, rate, years, compounding = true} = opts,
      result = {};

  delete opts.compounding;
  utils.enforceNonNegative(opts);
  if (!principal || !rate || !years) {
    throw new Error('Principal, rate and years are required and must be non-negative.');
  }

  if (compounding) {
    result.interest = principal * Math.pow(Math.E, rate * years) - principal;
  } else {
    result.interest = principal * rate * years;
  }
  result.total = principal + result.interest;

  return result;
}

module.exports = interest;
