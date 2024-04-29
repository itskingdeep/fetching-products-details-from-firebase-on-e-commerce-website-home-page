import "./index.css";

const categories = [
  {
    id: 1,
    name: "Mobile",
    image: "https://svgshare.com/i/yad.svg",
  },
  {
    id: 2,
    name: "SmartWatch",
    image: "https://svgshare.com/i/y_e.svg",
  },
  {
    id: 3,
    name: "Tablet",
    image: "https://svgshare.com/i/y_f.svg",
  },
  {
    id: 4,
    name: "Laptop",
    image: "https://svgshare.com/i/ya7.svg",
  },
  {
    id: 5,
    name: "Earphones",
    image: "https://svgshare.com/i/yZv.svg",
  },
  {
    id: 6,
    name: "Mobile Cover",
    image: "https://svgshare.com/i/yaL.svg",
  },
];

function Categories() {
  return (
    <>
      <ul className="categories">
        {categories.map((category) => (
          <li key={category.id}>
            <div className="image-container">
              <img src={category.image} />
            </div>
            <div className="title">{category.name}</div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Categories;
