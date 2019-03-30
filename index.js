const gtu = require('tile-url');

function getTileUrls(data) {

  const result = [];

  if (
    Object.entries(data).length
    &&
    data.id
    &&
    data.key
    &&
    (Number(data.rows) >= 1)
    &&
    (Number(data.cols) >= 1)
    &&
    (Number(data.zoom) >= 0)
  ) {

    for (let y = 0; y < data.rows; y++) {

      for (let x = 0; x < data.cols; x++) {

        result.push(... gtu({
          id: data.id,
          key: data.key,
          x: x,
          y: y,
          zoom: data.zoom,
        }));

      }

    }

  }

  return result;

}

module.exports = (... data) => {

  const results = [];
  const count = data.length;

  if (count) {

    results.push(
      ... data.map(getTileUrls)
    );

    if (count == 1) {

      // Replace the entire content of an `const` array:
      results.splice(0, results.length, ... results.flat());

    }

  } else {

    throw(`Bad data: ${data}`)

  }

  return results;

};
