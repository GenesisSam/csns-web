const raf = require("raf");
const { configure } = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");
configure({ adapter: new Adapter() });

raf.polyfill();

Object.defineProperty(window.location, "host", {
  writable: true,
});

Object.defineProperty(window.location, "hostname", {
  writable: true,
});
