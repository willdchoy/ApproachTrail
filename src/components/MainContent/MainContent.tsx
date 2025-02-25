import "./MainContent.css";
import ProductSlider from "@/components/ProductSlider/ProductSlider";
import { useService } from "@/hooks/useService";

function MainContent() {
  const { data, isLoading, error } = useService("planets/1/");

  console.log(isLoading);
  console.log(error);
  console.log(data);

  return (
    <main className="main-content content">
      {isLoading ? <div>loading</div> : <ProductSlider />}
    </main>
  );
}

export default MainContent;
