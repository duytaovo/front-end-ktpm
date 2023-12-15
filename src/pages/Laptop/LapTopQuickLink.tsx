import QuickLink from "src/components/QuickLink/ButtonQuickLink";

type Data = {
  type: string;
  link: string;
};
const data: Data[] = [
  {
    type: "MacBook",
    link: "https//cdn.tgdd.vn/Brand/1/logo-macbook-149x40.png",
  },
  {
    type: "ASSUS",
    link: "https//cdn.tgdd.vn/Brand/1/logo-asus-149x40.png",
  },
  {
    type: "HP",
    link: "https//cdn.tgdd.vn/Brand/1/logo-hp-149x40-1.png",
  },
  {
    type: "LENOVO",
    link: "https//cdn.tgdd.vn/Brand/1/logo-lenovo-149x40.png",
  },
  {
    type: "ACER",
    link: "https//cdn.tgdd.vn/Brand/1/logo-acer-149x40.png",
  },
  {
    type: "DELL",
    link: "https//cdn.tgdd.vn/Brand/1/logo-dell-149x40.png",
  },
  {
    type: "MSI",
    link: "https//cdn.tgdd.vn/Brand/1/logo-msi-149x40.png",
  },
  {
    type: "SURFACE",
    link: "https//cdn.tgdd.vn/Brand/1/logo-surface-149x40-1.png",
  },
  {
    type: "LG",
    link: "https//cdn.tgdd.vn/Brand/1/logo-lg-149x40.png",
  },
  {
    type: "GIGABYTE",
    link: "https//cdn.tgdd.vn/Brand/1/logo-gigabyte-149x40.png",
  },
  {
    type: "INTEL NUC",
    link: "https//cdn.tgdd.vn/Brand/1/logo-intel-149x40.png",
  },
  {
    type: "CHUWI",
    link: "https//cdn.tgdd.vn/Brand/1/logo-chuwi-149x40.png",
  },
  {
    type: "INTEL",
    link: "https//cdn.tgdd.vn/Brand/1/logo-itel-149x40.png",
  },
];

interface Props {
  handleSetChoose: (text: string) => void;
}
const LapTopQuickLink = ({ handleSetChoose }: Props) => {
  return (
    <div className="container__quicklink w-full ">
      <div className="quicklink flex space-x-4 m-4 justify-around">
        {data.map((item) => (
          <QuickLink
            handleSetChoose={handleSetChoose}
            type={item.type}
            link={item.link}
            isImg={true}
            key={item.link}
          />
        ))}
      </div>
    </div>
  );
};
export default LapTopQuickLink;
