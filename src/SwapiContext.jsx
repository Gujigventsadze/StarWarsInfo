// import { createContext, useState, useEffect } from "react";
// import axios from "axios";

// export const SwapiContext = createContext();

// export const SwapiProvider = ({ children }) => {
//   const [people, setPeople] = useState([]);
//   const [planets, setPlanets] = useState([]);
//   const [starships, setStarships] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchData = async (url, setData) => {
//     try {
//       const response = await axios.get(url);
//       setData((prevState) => [...prevState, ...response.data.results]);

//       if (response.data.next) {
//         fetchData(response.data.next, setData);
//       }
//     } catch (err) {
//       setError("Failed to fetch data");
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     setLoading(true);

//     const peopleUrl = "https://swapi.dev/api/people/";
//     const planetsUrl = "https://swapi.dev/api/planets/";
//     const starshipsUrl = "https://swapi.dev/api/starships/";

//     fetchData(peopleUrl, setPeople);
//     fetchData(planetsUrl, setPlanets);
//     fetchData(starshipsUrl, setStarships);
//   }, []);
//   return (
//     <SwapiContext.Provider
//       value={{ people, planets, starships, loading, error }}
//     >
//       {children}
//     </SwapiContext.Provider>
//   );
// };
