class plugin2 {
  constructor(options) {
    this.options = options;
    console.log(`plugin2.options:`, this.options);
  }

  apply(compiler) {
    console.log('plugin2.apply:');
    compiler.hooks.plugin1hook.tap('ListenPlugin1', data => {
      console.log('plugin2 receive tap msg from plugin1hook:', data);
    });
  }
}

module.exports = plugin2;
