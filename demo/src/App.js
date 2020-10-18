class App extends React.Component {
  state = {
    glide: null,
    glideOptions: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      glideOptions: {
        type: "carousel",
        startAt: 0,
        focusAt: "center",
        perView: 3,
        gap: 10,
        autoplay: 3000,
        hoverpause: true,
        keyboard: true,
        bound: false,
        animationDuration: 400,
        rewind: true,
        rewindDuration: 800,
        animationTimingFunc: "$$bounce",
        direction: 'ltr',
        peek: 0
      },
    };
  }

  componentDidMount() {
    const g = this.glideFactory(this.state.glideOptions);
    g.mount();
    this.setState({ glide: g });
  }

  componentDidUpdate() {
    if (!!this.state.glide && !!this.state.glide.update) {
      // check if MOUNTED
      this.state.glide.update(this.state.glideOptions);
    }
  }

  render() {
    return (
      <content>
        <div className="options">
          {this.state.glideOptions &&
            Object.keys(this.state.glideOptions).map((optionKey) => {
              const option = this.state.glideOptions[optionKey];
              return (
                <React.Fragment key={`glideOptions_${optionKey}`}>
                  <label htmlFor={optionKey}>{optionKey}</label>
                  <input
                    type="text"
                    name={optionKey}
                    value={option}
                    onChange={(e) =>
                      this.handleOnChangeGlideOptions(e, optionKey)
                    }
                  ></input>
                </React.Fragment>
              );
            })}
        </div>

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
    const glide = new Glide(".glide", options);
    return glide;
  }

  handleOnChangeGlideOptions(e, key) {
    const value = e.target.value;

    this.setState((prevState, props) => {
      const options = prevState.glideOptions;
      options[key] = value;
      return {
        ...prevState,
        glideOptions: options,
      };
    });
    this.state.glide.update();
  }
}

const domContainer = document.querySelector("#root");
ReactDOM.render(React.createElement(App), domContainer);
