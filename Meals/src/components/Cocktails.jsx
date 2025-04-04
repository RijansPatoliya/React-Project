import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/cocktails.css";

const Cocktails = () => {
  const [cocktails, setCocktails] = useState([]);
  const [categories, setCategories] = useState([]);
  const [glasses, setGlasses] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [alcoholicOptions, setAlcoholicOptions] = useState([]);

  const [selectedGlass, setSelectedGlass] = useState("");
  const [selectedIngredient, setSelectedIngredient] = useState("");
  const [selectedAlcoholic, setSelectedAlcoholic] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [query, setQuery] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetchCocktails("margarita");
    fetchCategories();
    fetchGlasses();
    fetchIngredients();
    fetchAlcoholicOptions();
  }, []);

  const fetchCocktails = async (searchQuery) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchQuery}`
      );
      const data = await response.json();
      setCocktails(data.drinks || []);
    } catch (err) {
      console.error("Error fetching cocktails:", err);
      setError("Failed to load data. Please try again.");
    }
    setLoading(false);
  };

  const fetchCategories = async () => {
    try {
      const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`);
      const data = await res.json();
      setCategories(data.drinks.map((item) => item.strCategory));
    } catch (err) {
      console.error("Error fetching categories:", err);
    }
  };

  const fetchGlasses = async () => {
    try {
      const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list`);
      const data = await res.json();
      setGlasses(data.drinks.map((item) => item.strGlass));
    } catch (err) {
      console.error("Error fetching glasses:", err);
    }
  };

  const fetchIngredients = async () => {
    try {
      const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`);
      const data = await res.json();
      setIngredients(data.drinks.map((item) => item.strIngredient1));
    } catch (err) {
      console.error("Error fetching ingredients:", err);
    }
  };

  const fetchAlcoholicOptions = async () => {
    try {
      const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list`);
      const data = await res.json();
      setAlcoholicOptions(data.drinks.map((item) => item.strAlcoholic));
    } catch (err) {
      console.error("Error fetching alcoholic options:", err);
    }
  };

  const handleSearch = (type) => {
    let url = "";

    switch (type) {
      case "query":
        url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`;
        break;
      case "category":
        url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${selectedCategory}`;
        break;
      case "glass":
        url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${selectedGlass}`;
        break;
      case "ingredient":
        url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${selectedIngredient}`;
        break;
      case "alcoholic":
        url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${selectedAlcoholic}`;
        break;
      default:
        return;
    }

    fetchCocktailsFromURL(url);
  };

  const fetchCocktailsFromURL = async (url) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(url);
      const data = await res.json();
      setCocktails(data.drinks || []);
    } catch (err) {
      console.error("Error fetching cocktails:", err);
      setError("Failed to load data. Please try again.");
    }
    setLoading(false);
  };

  const handleCocktailClick = (cocktail) => {
    navigate(`/cocktail/${cocktail.idDrink}`, { state: { cocktail } });
  };

  return (
    <div className="cocktails-container">
      <h1 className="title">🍹 Explore Cocktails</h1>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a cocktail..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={() => handleSearch("query")}>Search</button>
      </div>

      <div className="filters">
        <div className="filter">
          <label>Category:</label>
          <select onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="">-- Select Category --</option>
            {categories.map((cat, i) => (
              <option key={i} value={cat}>{cat}</option>
            ))}
          </select>
          <button onClick={() => handleSearch("category")}>Apply</button>
        </div>

        <div className="filter">
          <label>Glass Type:</label>
          <select onChange={(e) => setSelectedGlass(e.target.value)}>
            <option value="">-- Select Glass --</option>
            {glasses.map((glass, i) => (
              <option key={i} value={glass}>{glass}</option>
            ))}
          </select>
          <button onClick={() => handleSearch("glass")}>Apply</button>
        </div>

        <div className="filter">
          <label>Ingredient:</label>
          <select onChange={(e) => setSelectedIngredient(e.target.value)}>
            <option value="">-- Select Ingredient --</option>
            {ingredients.map((ing, i) => (
              <option key={i} value={ing}>{ing}</option>
            ))}
          </select>
          <button onClick={() => handleSearch("ingredient")}>Apply</button>
        </div>

        <div className="filter">
          <label>Alcoholic:</label>
          <select onChange={(e) => setSelectedAlcoholic(e.target.value)}>
            <option value="">-- Select --</option>
            {alcoholicOptions.map((alc, i) => (
              <option key={i} value={alc}>{alc}</option>
            ))}
          </select>
          <button onClick={() => handleSearch("alcoholic")}>Apply</button>
        </div>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && cocktails.length === 0 && (
        <p className="no-results">No results found. Try another search or filter.</p>
      )}

      <div className="cocktail-list">
        {cocktails.map((cocktail) => (
          <div
            key={cocktail.idDrink}
            className="cocktail-card"
            onClick={() => handleCocktailClick(cocktail)}
          >
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
            <h3>{cocktail.strDrink}</h3>
            <p><strong>{cocktail.strCategory || "Unknown Category"}</strong></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cocktails;
