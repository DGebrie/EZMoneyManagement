import React, { useEffect } from "react";

import finpic from "../images/financialplanning.jpg";

const Articles = () => {
  // useEffect(() => {
  //   getVeggie();
  //   console.log("Effect");
  // }, []);

  // const getVeggie = async () => {
  //   const check = localStorage.getItem("veggie");

  //   if (check) {
  //     setVeggie(JSON.parse(check));
  //   } else {
  //     const api = await fetch(
  //       `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
  //     );
  //     const data = await api.json();

  //     localStorage.setItem("veggie", JSON.stringify(data.recipes));
  //     setVeggie(data.recipes);
  //   }
  // };

  const blogData = [
    {
      title: "Financial Literacy",
      url: "https://www.investopedia.com/terms/f/financial-literacy.asp",
      text: "Investopedia",
      img: "https://www.investopedia.com/thmb/DyST_QQJYR5ndTXkGHazO0byYcc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/FinancialLiteracy_Final_4196456-74c34377122d43748ed63ef46a285116.jpg",
      altText: "",
    },
    {
      title: "How to Make a Budget and Stick to It",
      url: "https://money.usnews.com/money/personal-finance/saving-and-budgeting/articles/how-to-make-a-budget-and-stick-to-it",
      text: "US News",
      img: "https://www.usnews.com/object/image/0000017e-074c-d70d-a3fe-7fcd94d00000/financialplanning.jpg?update-time=1640800115448&size=responsive970",
      altText: "",
    },
    {
      title: "15 Practical Budgeting Tips",
      url: "https://www.ramseysolutions.com/budgeting/the-truth-about-budgeting",
      text: "Ramsey Solutions",
      img: "https://cdn2.ramseysolutions.net/dynamic-webp/media/blog/budgeting/15-ways-to-budget-better.jpg/640w.webp",
      altText: "15 Practical Budgeting Tips",
    },
  ];

  return (
    <>
      <section>
        <div className="p-4 d-flex row justify-content-center">
          <h3 className="mb-5">
            <em>Helpful Blogs</em>
          </h3>
          {blogData.map((blog) => {
            return (
              <>
                <div
                  class="card m-4 border shadow p-0"
                  style={{ width: "18rem", borderColor: "#223344" }}
                >
                  <img
                    class="card-img-top "
                    src={blog.img}
                    alt={blog.altText}
                  />
                  <div class="card-body">
                    <a href={blog.url} target="_blank" rel="noref">
                      {blog.title}
                    </a>

                    <strong>
                      <p class="card-text" style={{ color: "#223344" }}>
                        <em>{blog.text}</em>
                      </p>
                    </strong>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Articles;
