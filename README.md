<br />
<p align="center">

  <h3 align="center">K6 boilerplate</h3>

  <p align="left">A highly scalable, offline-first foundation with the best DX and a focus on best practices 🚀</p>

<!-- ABOUT THE PROJECT -->

## Built With

The main technologies are

- [K6](https://k6.io/)
- [Webpack](https://webpack.js.org/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [JS(ES2015)](https://www.javascript.com/)
- [Yarn](https://classic.yarnpkg.com/)
- [Core-JS](https://github.com/zloirock/core-js)

<!-- GETTING STARTED -->

## Getting Started

To get a local running follow these simple example steps.

### Prerequisites

- <h4>Nodejs</h4>

  Installing via package manager <a href="https://nodejs.org/en/download/package-manager">here</a>

- <h4>Yarn</h4>

  ```sh
  npm install -g yarn
  ```

- <h4>K6</h4>

  macOS Using Homebrew:

  ```sh
  brew install k6
  ```

  Linux Debian/Ubuntu

  ```sh
  sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys C5AD17C747E3415A3642D57D77C6C491D6AC1D69
  echo "deb https://dl.k6.io/deb stable main" | sudo tee /etc/apt/sources.list.d/k6.list
  sudo apt-get update
  sudo apt-get install k6
  ```

  More references here <a href="https://k6.io/docs/getting-started/installation/">here</a>

<br/>

### Installation

1. Clone the repository
   ```sh
   git clone /TODO
   ```
2. Install npm packages
   ```sh
   yarn
   ```
3. Run in development
   ```sh
   yarn dev
   ```

<br/>

<!-- ESTRUCTURE EXAMPLES -->

### Main Source files

    .
    ├── ...
    ├── src                    # TODO
    │   ├── core               # TODO
    │   ├── data               # TODO
    │   └── tests              # TODO
    └── ...

<!-- USAGE EXAMPLES -->

## Usage

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when

- Add environment variables:

  ```sh
  touch env.json
  ```

  ```JSON
  {
    "K6_URL_BASE": "http://test.k6.io/"
  }
  ```

- Build packages

  ```sh
  yarn build
  ```

- Run Test
  ```sh
  k6 run build/index.bundle.js -e MY_CONFIG_FILE=../env.json
  ```

<!-- ROADMAP -->

We are ready for war!

(҂`\_´)<br/>
<,︻╦╤─ ҉ - - - - - - - - <br/>
/﹋\

## Roadmap

See the [open issues]() for a list of proposed features (and known issues).

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<h2>💜 Thanks </h2>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
