import FilterItem from "./FilterItem";
import { useRef } from "react";
import FilterItemTotal from "./FilterItemTotal";
import { DataPropsPhone } from "src/pages/Phone/FilterPhone";

interface FilterItem {
  handle: (boolean: boolean) => void;
  data: DataPropsPhone[];
}

const Filter = ({ handle, data }: FilterItem) => {
  const contain = useRef<any>();
  const scroll = () => {
    window.scroll({
      top: 198,
      // left: 100,
      behavior: "smooth",
    });
  };
  return (
    <div className="w-[1200px] h-full mt-[10px]" ref={contain}>
      <div className="w-[1200px] flex flex-wrap p-[5px_0px]">
        {/* Nút đầu */}
        <FilterItemTotal data={data} handle={handle} scroll={scroll} />

        {/* Các nút sau */}
        {data.map((src: DataPropsPhone) => (
          <FilterItem data={src} key={src.id} handle={handle} scroll={scroll} />
        ))}
      </div>
    </div>
  );
};

export default Filter;
