import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const counterState = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({
      type: "counterSlice/incrementCounter",
    });
  };
  const decrement = () => {
    if (counterState.counter === 0) return;
    dispatch({
      type: "counterSlice/decrementCounter",
    });
  };

  return (
    <div>
      <h1>COUNTER APP</h1>
      <h1>{counterState.counter}</h1>
      <button onClick={decrement}>Kurang</button>

      <button onClick={increment}>Tambah</button>
    </div>
  );
};

export default Home;
