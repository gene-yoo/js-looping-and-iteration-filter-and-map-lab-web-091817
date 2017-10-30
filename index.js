// Code your solution here:
function driversWithRevenueOver (drivers, threshold) {
  return drivers.filter(function (driver) {
    return driver.revenue > threshold;
  });
};

function driverNamesWithRevenueOver (drivers, threshold) {
  eligibleDrivers = driversWithRevenueOver(drivers, threshold)

  return eligibleDrivers.map(function(driver) { return driver.name })
};

function exactMatch (drivers, attributeObj) {
  return drivers.filter(function (driver) {
    for (const key in attributeObj) {
      return driver[key] === attributeObj[key];
    };
  });
};

function exactMatchToList (drivers, attributeObj) {
  eligibleDrivers = exactMatch(drivers, attributeObj);

  return eligibleDrivers.map(function (driver) { return driver.name })
};
