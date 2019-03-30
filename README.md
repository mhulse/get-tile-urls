# tile-urls

Get Google Street View tile URLs.

## Installation

```bash
$ npm i mhulse/tile-urls
```

## Usage

```js
const tileUrls = require('tile-urls');
const data = {
  id: "CAoSLEFGMVFpcFBUUGE3aHhlb1NWMEUxRFNwWFA5bW56VzZtYVc5VUV2NDJ2Yjc1",
  key: "AF1QipPTPa7hxeoSV0E1DSpXP9mnzW6maW9UEv42vb75",
  zoom: 3,
  rows: 3,
  cols: 5
};
console.log(tileUrls(data));
// [
//   'https://lh3.ggpht.com/p/AF1QipPTPa7hxeoSV0E1DSpXP9mnzW6maW9UEv42vb75=x0-y0-z3',
//   'https://lh3.ggpht.com/p/AF1QipPTPa7hxeoSV0E1DSpXP9mnzW6maW9UEv42vb75=x1-y0-z3',
//   'https://lh3.ggpht.com/p/AF1QipPTPa7hxeoSV0E1DSpXP9mnzW6maW9UEv42vb75=x2-y0-z3',
//   'https://lh3.ggpht.com/p/AF1QipPTPa7hxeoSV0E1DSpXP9mnzW6maW9UEv42vb75=x3-y0-z3',
//   'https://lh3.ggpht.com/p/AF1QipPTPa7hxeoSV0E1DSpXP9mnzW6maW9UEv42vb75=x4-y0-z3',
//   'https://lh3.ggpht.com/p/AF1QipPTPa7hxeoSV0E1DSpXP9mnzW6maW9UEv42vb75=x0-y1-z3',
//   'https://lh3.ggpht.com/p/AF1QipPTPa7hxeoSV0E1DSpXP9mnzW6maW9UEv42vb75=x1-y1-z3',
//   'https://lh3.ggpht.com/p/AF1QipPTPa7hxeoSV0E1DSpXP9mnzW6maW9UEv42vb75=x2-y1-z3',
//   'https://lh3.ggpht.com/p/AF1QipPTPa7hxeoSV0E1DSpXP9mnzW6maW9UEv42vb75=x3-y1-z3',
//   'https://lh3.ggpht.com/p/AF1QipPTPa7hxeoSV0E1DSpXP9mnzW6maW9UEv42vb75=x4-y1-z3',
//   'https://lh3.ggpht.com/p/AF1QipPTPa7hxeoSV0E1DSpXP9mnzW6maW9UEv42vb75=x0-y2-z3',
//   'https://lh3.ggpht.com/p/AF1QipPTPa7hxeoSV0E1DSpXP9mnzW6maW9UEv42vb75=x1-y2-z3',
//   'https://lh3.ggpht.com/p/AF1QipPTPa7hxeoSV0E1DSpXP9mnzW6maW9UEv42vb75=x2-y2-z3',
//   'https://lh3.ggpht.com/p/AF1QipPTPa7hxeoSV0E1DSpXP9mnzW6maW9UEv42vb75=x3-y2-z3',
//   'https://lh3.ggpht.com/p/AF1QipPTPa7hxeoSV0E1DSpXP9mnzW6maW9UEv42vb75=x4-y2-z3'
// ]
```

## Development

Clone this repo, then:

```bash
$ npm install
```

Run test(s):

```bash
$ npm test
```

## License

Copyright © 2019 [Michael Hulse](http://mky.io).

Licensed under the Apache License, Version 2.0 (the “License”); you may not use this work except in compliance with the License. You may obtain a copy of the License in the LICENSE file, or at:

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an “AS IS” BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
