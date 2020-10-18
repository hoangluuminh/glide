var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      glide: null,
      glideOptions: null
    };

    _this.state = {
      glideOptions: {
        type: "slider",
        startAt: 0,
        focusAt: "0",
        perView: 3,
        gap: 10,
        autoplay: 3000,
        hoverpause: true,
        keyboard: true,
        bound: true,
        animationDuration: 400,
        rewind: true,
        rewindDuration: 500,
        animationTimingFunc: "$$bounce",
        direction: "ltr",
        peek: 100
      }
    };
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var g = this.glideFactory(this.state.glideOptions);
      g.mount();
      this.setState({ glide: g });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      // check if MOUNTED
      if (!!this.state.glide && !!this.state.glide.update) {
        this.state.glide.update(this.state.glideOptions);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(
        "content",
        null,
        React.createElement(
          "div",
          { className: "options" },
          this.state.glideOptions && Object.keys(this.state.glideOptions).map(function (optionKey) {
            var option = _this2.state.glideOptions[optionKey];
            return React.createElement(
              React.Fragment,
              { key: "glideOptions_" + optionKey },
              React.createElement(
                "label",
                { htmlFor: optionKey },
                optionKey
              ),
              React.createElement("input", {
                type: "text",
                name: optionKey,
                value: option,
                onChange: function onChange(e) {
                  return _this2.handleOnChangeGlideOptions(e, optionKey);
                }
              })
            );
          })
        ),
        React.createElement(
          "div",
          { className: "glide" },
          React.createElement(
            "div",
            { className: "glide__track", "data-glide-el": "track" },
            React.createElement(
              "ul",
              { className: "glide__slides" },
              React.createElement(
                "li",
                { className: "glide__slide" },
                React.createElement("img", { src: "./img/img01.jpg", alt: "01", height: "500" })
              ),
              React.createElement(
                "li",
                { className: "glide__slide" },
                React.createElement("img", { src: "./img/img02.jpg", alt: "02", height: "500" })
              ),
              React.createElement(
                "li",
                { className: "glide__slide" },
                React.createElement("img", { src: "./img/img03.jpg", alt: "03", height: "500" })
              ),
              React.createElement(
                "li",
                { className: "glide__slide" },
                React.createElement("img", { src: "./img/img04.jpg", alt: "04", height: "500" })
              ),
              React.createElement(
                "li",
                { className: "glide__slide" },
                React.createElement("img", { src: "./img/img05.jpg", alt: "05", height: "500" })
              )
            )
          ),
          React.createElement(
            "div",
            { className: "glide__arrows", "data-glide-el": "controls" },
            React.createElement(
              "button",
              {
                className: "glide__arrow glide__arrow--left",
                "data-glide-dir": "<"
              },
              "prev"
            ),
            React.createElement(
              "button",
              {
                className: "glide__arrow glide__arrow--right",
                "data-glide-dir": ">"
              },
              "next"
            )
          ),
          React.createElement(
            "div",
            { className: "glide__bullets", "data-glide-el": "controls[nav]" },
            React.createElement("button", { className: "glide__bullet", "data-glide-dir": "=0" }),
            React.createElement("button", { className: "glide__bullet", "data-glide-dir": "=1" }),
            React.createElement("button", { className: "glide__bullet", "data-glide-dir": "=2" }),
            React.createElement("button", { className: "glide__bullet", "data-glide-dir": "=3" }),
            React.createElement("button", { className: "glide__bullet", "data-glide-dir": "=4" })
          )
        )
      );
    }

    // Methods

  }, {
    key: "glideFactory",
    value: function glideFactory(options) {
      var glide = new Glide(".glide", options);
      return glide;
    }
  }, {
    key: "handleOnChangeGlideOptions",
    value: function handleOnChangeGlideOptions(e, key) {
      var value = e.target.value;

      this.setState(function (prevState, props) {
        var options = prevState.glideOptions;
        options[key] = value;
        return Object.assign({}, prevState, {
          glideOptions: options
        });
      });
      this.state.glide.update();
    }
  }]);

  return App;
}(React.Component);

var domContainer = document.querySelector("#root");
ReactDOM.render(React.createElement(App), domContainer);