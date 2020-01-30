const { SyncHook } = require('tapable');

class plugin1 {
  constructor(options) {
    //用户自定义配置
    this.options = options;
    console.log(`plugin1.constructor:options=`, this.options);
  }

  apply(compiler) {
    console.log('plugin1.apply:');
    compiler.hooks.hook1 = new SyncHook(['data']);

    compiler.hooks.compilation.tap('MyPlugin', compilation => {
      console.log('The compiler is starting a new compilation...');
      compiler.hooks.hook1.call('this data is from plugin1');
    });
  }
}

module.exports = plugin1;
