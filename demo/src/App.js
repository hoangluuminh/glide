class App extends React.Component {
  state = {
    glide: null,
    glideOptions: null,
  };

  defaultOptions = {
    startAt: 0,
    perView: 3,
    gap: 10,
    autoplay: 3000,
    hoverpause: true,
    keyboard: true,
    bound: true,
    animationDuration: 400,
    rewind: true,
    rewindDuration: 500,
    peek: 100,
  };

  availableOptions = {
    type: ["slider", "carousel"],
    focusAt: ["center", 0],
    animationTimingFunc: ["linear", "ease", "ease-in", "ease-out", "ease-in-out", "$$bounce", "$$retro"],
    direction: ["ltr", "rtl"],
    swipeAnimation: [
      "",
      "spin",
      "pendulum",
      "bounceInward",
      "bounceUpward",
      "bounceDownward",
      "flip",
      "fade",
      "CUSTOMANIM",
    ],
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const g = this.glideFactory(this.glideOptionsFactory());
    g.mount();
    this.setState({ glide: g });
  }

  componentDidUpdate() {
    // check if MOUNTED
    if (!!this.state.glide && !!this.state.glide.update) {
      this.state.glide.update(this.state.glideOptions);
    }
  }

  render() {
    return (
      <content>
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
            <button className="glide__bullet" data-glide-dir="=5"></button>
            <button className="glide__bullet" data-glide-dir="=6"></button>
            <button className="glide__bullet" data-glide-dir="=7"></button>
            <button className="glide__bullet" data-glide-dir="=8"></button>
            <button className="glide__bullet" data-glide-dir="=9"></button>
          </div>
        </div>

        <div className="options">
          {this.state.glideOptions &&
            Object.keys(this.state.glideOptions).map((optionKey) => {
              const option = this.state.glideOptions[optionKey];
              if (Object.keys(this.availableOptions).includes(optionKey)) {
                return (
                  <div key={`glideOptions_${optionKey}`}>
                    <label htmlFor={optionKey}>{optionKey}</label>
                    <select
                      name={optionKey}
                      value={option}
                      onChange={(e) =>
                        this.handleOnChangeGlideOptions(e, optionKey)
                      }
                    >
                      {this.availableOptions[optionKey].map((optionSelect) => (
                        <option
                          key={`glideOptions_${optionKey}_${optionSelect}`}
                          value={optionSelect}
                        >
                          {optionSelect}
                        </option>
                      ))}
                    </select>
                  </div>
                );
              }

              return (
                <div key={`glideOptions_${optionKey}`}>
                  <label htmlFor={optionKey}>{optionKey}</label>
                  <input
                    type="text"
                    name={optionKey}
                    value={option}
                    onChange={(e) =>
                      this.handleOnChangeGlideOptions(e, optionKey)
                    }
                  ></input>
                </div>
              );
            })}
        </div>
      </content>
    );
  }

  // Methods

  glideOptionsFactory() {
    let newOptions = {};

    Object.keys(this.defaultOptions).forEach((optionKey) => {
      const option = this.defaultOptions[optionKey];
      newOptions = { ...newOptions, [optionKey]: option };
    });
    Object.keys(this.availableOptions).forEach((optionKey) => {
      const option = this.availableOptions[optionKey];
      newOptions = { ...newOptions, [optionKey]: option[0] };
    });

    this.setState({ glideOptions: newOptions });

    return newOptions;
  }

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
