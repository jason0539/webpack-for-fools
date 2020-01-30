module.exports = function(content) {
  console.log('2 is running');
  return '{console.log(2)};' + content;
};
module.exports.pitch = (remaining, preceding, data) => {
  console.log('***remaining***', remaining);
  //   console.log('***preceding***', preceding);
};
