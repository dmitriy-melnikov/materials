/* eslint-disable no-unused-vars, no-shadow */
function load(info) {
  const module = {
    exports: {},
    require: (path) => { /* ... */ }
  };
  ((exports, require, module, __filename, __dirname) => {
    // Файл mother.js

    module.exports = {
      name: `Мама`,
      age: 12,
      male: false
    };

    exports.name = `Светлана`;
  })(module.exports, module.require, module, info.filename, info.dirname);
  return module.exports;
}
/* eslint-enable */
