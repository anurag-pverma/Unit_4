export const Button = ({ table, setData }) => {
  const handleSort = (e) => {
    if (e == 0) {
      let newData = table.sort((a, b) => {
        return a.cost - b.cost;
      });
      let nd = [...newData];
      setData(nd);
    } else {
      let newData = table.sort((a, b) => b.cost - a.cost);
      let nd = [...newData];
      setData(nd);
    }

    // console.log(table.cost);
  };
  return (
    <>
      <button
        onClick={() => {
          handleSort(0);
        }}
      >
        Low To High
      </button>
      <button
        onClick={() => {
          handleSort(1);
        }}
      >
        High To Low
      </button>
    </>
  );
};
