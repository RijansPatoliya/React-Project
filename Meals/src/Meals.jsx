import React, { useEffect, useState } from 'react';
import axios from "axios";
import "./style.css"

const Meals = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchMealData = async () => {
      try {
        const res = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
        );
        setData(res.data.meals);
      } catch (error) {
        console.error("Error fetching meals:", error);
      }
    };

    fetchMealData();
  }, []);

  return (
    <>
      <div className="container">
        {data.map(({ strMeal, strMealThumb, idMeal }) => (
          <div key={idMeal} className="meal-card">
            <img src={strMealThumb} alt={strMeal} />
            <section className="content">
              <p>{strMeal}</p>
              <p>#{idMeal}</p>
            </section>
          </div>
        ))}
      </div>
    </>
  );
};

export default Meals;
