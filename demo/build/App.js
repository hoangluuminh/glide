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
      animationTimingFunc: ""
    };

    _this.state = {
      animationTimingFunc: "$$bounce"
    };
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var g = this.glideFactory({
        animationTimingFunc: this.state.animationTimingFunc
      });
      g.mount();
      this.setState({ glide: g });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (!!this.state.glide && !!this.state.glide.update) {
        // check if MOUNTED
        this.state.glide.update({
          animationTimingFunc: this.state.animationTimingFunc
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (this.state.liked) {
        return "You liked this.";
      }

      return React.createElement(
        "content",
        null,
        React.createElement("input", {
          type: "text",
          value: this.state.animationTimingFunc,
          onChange: function onChange(e) {
            return _this2.setState({ animationTimingFunc: e.target.value });
          }
        }),
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
      var animationTimingFunc = options.animationTimingFunc;


      var glide = new Glide(".glide", {
        type: "carousel",
        startAt: 0,
        focusAt: "center",
        animationTimingFunc: animationTimingFunc,
        perView: 3
      });
      return glide;
    }
  }]);

  return App;
}(React.Component);

var domContainer = document.querySelector("#root");
ReactDOM.render(React.createElement(App), domContainer);