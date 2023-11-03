import React from "react";
import ReactDOM from "react-dom/client";
// import StarRating from "./components/StarRating";
import App from './App.jsx'
import './index.css'

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating
//         maxRating={10}
//         color="blue"
//         onSetMovieRating={setMovieRating}
//       />
//       <p>This movie was rated {movieRating} stars.</p>
//     </div>
//   );
// }

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <StarRating maxRating={5} />
    <StarRating size={24} color="red" />
    <Test /> */}
    <App />
  </React.StrictMode>
);
