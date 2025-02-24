import Header from "./components/Header/Header";
import "./App.css";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        {/* <article className="content">
          <h1>Main article area</h1>
          <p>
            In this layout, we display the areas in source order for any screen
            less that 500 pixels wide. We go to a two column layout, and then to
            a three column layout by redefining the grid, and the placement of
            items on the grid.
          </p>
        </article>
        <aside className="side">Sidebar</aside>
        <div className="ad">Advertising</div>
        <footer className="main-footer">The footer</footer> */}
      </div>
    </>
  );
}

export default App;
