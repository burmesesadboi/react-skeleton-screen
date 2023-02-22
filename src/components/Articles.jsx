import { useEffect, useState } from "react";
import SkeletonElement from "../skeletons/SkeletonElement";

const Articles = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();

      setArticles(data);
    }, 5000);
  }, []);
  return (
    <div className="articles-container">
      <h2>Articles</h2>

      <SkeletonElement type="title" />
      <SkeletonElement type="text" />
      <SkeletonElement type="thumbnail" />
      <SkeletonElement type="avator" />

      {articles &&
        articles.map((article) => (
          <div className="articles" key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.body}</p>
          </div>
        ))}

      {!articles && <div>Loading ...</div>}
    </div>
  );
};

export default Articles;
