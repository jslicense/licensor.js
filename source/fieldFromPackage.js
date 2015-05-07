module.exports = function(field, package, defaultValue) {
  if (field === 'owners') {
    if (package.author && package.author.name) {
      return package.author.name;
    } else {
      return defaultValue;
    }
  } else if (field === 'year') {
    return new Date()
      .getFullYear()
      .toString();
  }
};
