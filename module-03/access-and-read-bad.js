const fs = require(`fs`);

fs.access(`myfile`, (err) => {
  if (err) {
    if (err.code === `ENOENT`) {
      console.error(`myfile does not exist`);
      return;
    }

    throw err;
  }

  fs.open(`myfile`, `r`, (openError, fd) => {
    if (openError) {
      throw openError;
    }

    // do some stuff with file here

    fs.close(fd, (closeError) => {
      if (closeError) {
        throw closeError;
      }
    });
  });
});
