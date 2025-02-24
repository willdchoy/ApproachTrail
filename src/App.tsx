import Header from "./components/Header/Header";
import "./App.css";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <aside className="side placeholder-content">filter</aside>

        <main className="content placeholder-content">main</main>

        <div className="ad placeholder-content">advertising</div>
        {/* <footer className="main-footer">The footer</footer> */}
      </div>
    </>
  );
}

export default App;
