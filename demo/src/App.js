const e = React.createElement;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return "You liked this.";
    }

    return (
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
    );
  }
}

const domContainer = document.querySelector("#root");
ReactDOM.render(e(App), domContainer);
