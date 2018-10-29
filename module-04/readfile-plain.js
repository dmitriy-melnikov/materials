const fs = require(`fs`);
const {promisify} = require(`util`);

const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);
const unlink = promisify(fs.unlink);
const mkdir = promisify(fs.mkdir);
const rmdir = promisify(fs.rmdir);

const dir = `${__dirname}/test`;
const path = `${dir}/newfile.txt`;

let exists = false;
mkdir(dir).
    catch((e) => {
      if (e.code === `EEXIST`) {
        exists = true;
        return Promise.resolve();
      }
      return Promise.reject(e);
    }).
    then(() => writeFile(path, `Hello, world!`)).
    then(() => readFile(path)).
    then((data) => console.log(data.toString())).
    then(() => unlink(path)).
    then(() => exists ? Promise.resolve() : rmdir(dir)).
    catch((e) => console.error(e));
