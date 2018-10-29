const fs = require(`fs`);

fs.openFile(`myfile`, `r`, (err, buffer) => {
  if (err) {
    if (err.code === `ENOENT`) {
      console.error(`myfile does not exist`);
      return;
    }

    throw err;
  }

  // Read data here from buffer
  buffer.toString();
});
