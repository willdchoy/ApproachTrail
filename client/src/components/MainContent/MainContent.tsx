import "./MainContent.css";
import ProductList from "@/components/ProductList/ProductList";
import ErrorBoundary from "../ErrorBoundry/ErrorBoundry";

function MainContent() {
  return (
    <main className="main-content content">
      <ErrorBoundary>
        <ProductList />
      </ErrorBoundary>
    </main>
  );
}

export default MainContent;
