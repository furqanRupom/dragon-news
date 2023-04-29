import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://news-dragon-server-furqanrupom.vercel.app/categories")
      .then((categories) => categories.json())
      .then((categoryData) => setCategories(categoryData))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h1 className="py-3">All Category</h1>
      {categories.map((category) => (
        <p key={category.id}>
          <Link
            to={`/category/${category.id}`}
            className="text-decoration-none text-black"
          >
            {category.name}
          </Link>
        </p>
      ))}
    </div>
  );
};

export default LeftNav;
