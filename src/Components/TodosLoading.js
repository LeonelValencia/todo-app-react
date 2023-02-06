import React from 'react';
import ContentLoader from "react-content-loader"
// import '../css/TodosLoading.css';

// function TodosLoading() {
//   return (
//     <div className="LoadingTodo-container">
//       <p className="LoadingTodo-text">Cargando TODOs...</p>
//     </div>
//   );
// }

const TodosLoading = () => (
  <ContentLoader 
  speed={2}
  width={400}
  height={360}
  viewBox="0 0 400 360"
  backgroundColor="#959594"
  foregroundColor="#ecebeb"
  >
    <rect x="65" y="24" rx="15" ry="15" width="270" height="72" ></rect>
    <rect x="65" y="120" rx="15" ry="15" width="270" height="72" ></rect>
    <rect x="65" y="216" rx="15" ry="15" width="270" height="72" ></rect>
  </ContentLoader>
)

export { TodosLoading };