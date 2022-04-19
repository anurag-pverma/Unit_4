import styles from "./Card.module.css";

const rightStyling = {
  color: "blue",
  padding: "2px",
};
const rightStyling2 = {
  fontSize: "50px",
  color: "red",
};
function Card(props) {
  // console.log(props)
  const { name, organisation, qualification, gender, imgURL } = props;
  return (
    <div className={styles.card}>
      <div className={styles.left__content}>
        <img src={imgURL} alt={name} />
      </div>
      <div className="right__content">
        <h1 style={{ color: "green", fontSize: "40px" }}>{organisation}</h1>
        <h2 style={{ ...rightStyling, ...rightStyling2 }}>Name : {name}</h2>
        <h2>Gender : {gender}</h2>
        <h2>Qulification : {qualification}</h2>
      </div>
    </div>
  );
}

export default Card;

// const props = {
//     name:"santhi",
//     gender:"Female",
//     c:3
// }
// const {a,b,c} = number
// console.log(a)
// css
// module.css
// inline styling
// css in js
//
