class plugin2 {
  constructor(options) {
    //用户自定义配置
    this.options = options;
    console.log(`plugin2.options:`, this.options);
  }
  apply(compiler) {
    console.log('plugin2.apply:');
    compiler.hooks.hook1.tap('Listen4Plugin1', data => {
      console.log('hook1.tap:', data);
    });
  }
}

module.exports = plugin2;
