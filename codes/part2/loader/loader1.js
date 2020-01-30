const loaderUtils = require('loader-utils');

module.exports = function(content) {
  const options = loaderUtils.getOptions(this);
  console.log(
    `***1 is running,data.value=${JSON.stringify(
      this.data
    )},options=${JSON.stringify(options)}***`
  );
  return '{console.log(1)};' + content;
};
