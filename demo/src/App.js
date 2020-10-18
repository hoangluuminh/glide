class App extends React.Component {
  state = {
    glide: null,
    animationTimingFunc: "",
  };

  constructor(props) {
    super(props);
    this.state = {
      animationTimingFunc: "$$bounce",
    };
  }

  componentDidMount() {
    const g = this.glideFactory({
      animationTimingFunc: this.state.animationTimingFunc,
    });
    g.mount();
    this.setState({ glide: g });
  }

  componentDidUpdate() {
    if (!!this.state.glide && !!this.state.glide.update) {
      // check if MOUNTED
      this.state.glide.update({
        animationTimingFunc: this.state.animationTimingFunc,
      });
    }
  }

  render() {
    if (this.state.liked) {
      return "You liked this.";
    }

    return (
      <content>
        <input
          type="text"
          value={this.state.animationTimingFunc}
          onChange={(e) =>
            this.setState({ animationTimingFunc: e.target.value })
          }
        ></input>

        <div className="glide">
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              <li className="glide__slide">
                <img src="./img/img01.jpg" alt="01" height="500"></img>
              </li>
              <li className="glide__slide">
                <img src="./img/img02.jpg" alt="02" height="500"></img>
              </li>
              <li className="glide__slide">
                <img src="./img/img03.jpg" alt="03" height="500"></img>
              </li>
              <li className="glide__slide">
                <img src="./img/img04.jpg" alt="04" height="500"></img>
              </li>
              <li className="glide__slide">
                <img src="./img/img05.jpg" alt="05" height="500"></img>
              </li>
            </ul>
          </div>
          <div className="glide__arrows" data-glide-el="controls">
            <button
              className="glide__arrow glide__arrow--left"
              data-glide-dir="<"
            >
              prev
            </button>
            <button
              className="glide__arrow glide__arrow--right"
              data-glide-dir=">"
            >
              next
            </button>
          </div>
          <div className="glide__bullets" data-glide-el="controls[nav]">
            <button className="glide__bullet" data-glide-dir="=0"></button>
            <button className="glide__bullet" data-glide-dir="=1"></button>
            <button className="glide__bullet" data-glide-dir="=2"></button>
            <button className="glide__bullet" data-glide-dir="=3"></button>
            <button className="glide__bullet" data-glide-dir="=4"></button>
          </div>
        </div>
      </content>
    );
  }

  // Methods

  glideFactory(options) {
    const { animationTimingFunc } = options;

    const glide = new Glide(".glide", {
      type: "carousel",
      startAt: 0,
      focusAt: "center",
      animationTimingFunc,
      perView: 3,
    });
    return glide;
  }
}

const domContainer = document.querySelector("#root");
ReactDOM.render(React.createElement(App), domContainer);
