import Card from "./Card";

const data1 = {
  name: "RAM",
  qualification: "PG",
  organisation: "Masai",
  gender: "Female",
  imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWmAvDLaC0Jognob9z42cDUEW-1h5pCJ4OTQ&usqp=CAU",
};

const data2 = {
  name: "Laxman",
  qualification: "PG",
  organisation: "Masai",
  gender: "Female",
  imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdf5FOnbXMq0AegJxGDPQRmBXGS6n5BHRBhA&usqp=CAU",
};

function EmployeeDetails() {
  return (
    // display a card with the given details
    <>
      <Card {...data1} />
      <Card {...data2} />
    </>
  );
}
export default EmployeeDetails;

// <img src= "" alt = "" />
