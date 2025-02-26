import "./MainContent.css";
// import ProductSlider from "@/components/ProductSlider/ProductSlider";
import ErrorBoundary from "../ErrorBoundry/ErrorBoundry";

function MainContent() {
  return (
    <main className="main-content content">
      <ErrorBoundary>{/* <ProductSlider /> */}</ErrorBoundary>
    </main>
  );
}

export default MainContent;
