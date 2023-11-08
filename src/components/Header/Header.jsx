import reactImg from "../../assets/react-core-concepts.png";
import './Header.css'

const reactDesc = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const desc = reactDesc[genRandomInt(2)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials !!!</h1>
      <p>
        {desc} React concepts you will need for almost any app you are
        going to build!
        <br />
        {genRandomInt(10)+2}
      </p>
    </header>
  );
}