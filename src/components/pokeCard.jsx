import "../css/pokeCard.css";
import Modal from "./Modal";

var index = 1;
export default function pokeCard({ item }) {
  return (
    <div className='menu-item'>
      <Modal />
      <div className='img-sec'>
        <img
          src={
            "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/" +
            index +
            ".svg"
          }
          alt=''
        />
      </div>
      <div style={{ color: "rgb(18, 250, 192)" }}>{index++}</div>

      <div className='name'>
        <h4 className='menu-heading'>{item.name}</h4>
      </div>
    </div>
  );
}
