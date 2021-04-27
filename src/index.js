import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./Cards";
import './index.css';
//import "bootstrap/dist/css/bootstrap.min.css";
import Sdata from "./Sdata";
 
ReactDOM.render(
  <>
    <h1 className="heading_style"> Top Movies To pick From 2020 & 2021</h1>
    {Sdata.map((val) => {
      return (
        <Card 
          imgsrc={val.imgsrc}
          category={val.category}
          title={val.title}
          link={val.link}
       />
      );
  
    })}
  </>,
  document.getElementById('root')
);



