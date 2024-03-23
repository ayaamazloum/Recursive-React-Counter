import Counter from "./pages/Counter/counter";

const App = () => {

  return (
    <div className="app">
      <Counter c={1} index={1} isRootCounter={true} />
    </div>
  );
}

export default App;
