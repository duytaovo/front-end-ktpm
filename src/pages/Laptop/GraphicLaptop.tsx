import DealMain from "src/components/DealMain";
import "./laptop.scss";
import ListProduct from "src/components/ListProduct/ListProduct";
import { useAppSelector } from "src/hooks/useRedux";

const GraphicLaptop = ({}) => {
  const { data } = useAppSelector((state) => state.products.allProducts);

  return (
    <div id="dohoa" className="blocklist">
      <div className="listcontent">
        <DealMain linkImg="https://cdn.tgdd.vn/2021/08/banner/dohoa-1200x200.jpg"></DealMain>
        {/* <ListProduct category="" products={data} isSlide={false}></ListProduct> */}
      </div>
    </div>
  );
};

export default GraphicLaptop;
