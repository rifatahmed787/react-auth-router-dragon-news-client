import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummuryCard from "../Shared/NewsSummuryCard/NewsSummuryCard";

const Category = () => {
  const categoryNews = useLoaderData();

  return (
    <div className="text-center">
      {categoryNews.map((news) => (
        <NewsSummuryCard key={news._id} news={news}></NewsSummuryCard>
      ))}
    </div>
  );
};

export default Category;
