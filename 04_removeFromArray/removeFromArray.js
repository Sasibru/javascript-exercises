const removeFromArray = function(values, ...remove) { 
    remove.forEach((arg) => {
        const index = values.indexOf(arg);
        if (index > -1)
          values.splice(index, 1);
      });
      return values;
};

// Do not edit below this line
module.exports = removeFromArray;