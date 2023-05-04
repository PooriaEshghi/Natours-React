import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Tour from "./Tour";
axios.defaults.baseURL = "http://localhost:3000/api/v1";

function Tours() {
  const [tours, setTours] = useState([]);
  const fetchData = () => {
    axios
      .get("/tours")
      .then((res) => {
        const { data } = res.data.data;
        setTours(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="overview">
      <div className="card-container">
        {tours.map((tour) => (
          <Tour key={tour.id} tour={tour} />
        ))}
      </div>
    </section>
  );
}

export default Tours;
