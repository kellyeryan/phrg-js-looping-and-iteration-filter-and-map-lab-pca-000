function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver)
    { return driver.revenue > revenue });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(function(driver) {
    return driver.name
  });
}

function exactMatch (drivers, matcher) {
  return drivers.filter(function (driver) {

    for (const key in matcher) {
      matches = driver[key] === matcher[key];
    }

    return matches;
  });
}

// This function takes an array of driver objects as the first argument and a JavaScript object that specifies an attribute and corresponding value. For example, exactMatch(drivers, { revenue: 3000 }) will return all drivers whose revenue attribute equals 3000, and exactMatch(drivers, { name: 'Bob' }) will return all drivers whose name attribute equals Bob.

function exactMatchToList(drivers, matcher) {
  return exactMatch(drivers, matcher).map(function(driver) {
    return driver.name
  })
}


// exactMatchToList() - This function works the same way as the exactMatch() function, except that instead of returning an array of driver objects, it returns an array of strings with each element in the array corresponding to the matching driver's name. For example, exactMatchToList(drivers, { revenue: 2000 }) will return ['Sammy'], as Sammy is the name of the matching driver object.
























