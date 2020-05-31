function generateMarkdown(data) {
  return `
# Title 

${data.title}

## Description 

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Installation

${data.installation}

## Usage 

${data.usage}

## Credits

${data.credits}

## License

Copyright (C) 2020  $<name>

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.

## Badges

[shields.io](https://shields.io/).


## Contributing

https://www.contributor-covenant.org/version/2/0/code_of_conduct/code_of_conduct.md

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them.
`
}

module.exports = generateMarkdown;
