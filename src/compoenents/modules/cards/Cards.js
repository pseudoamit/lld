import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./Cards.css";
import ShimmerCard from "./../../shimmer_component/ShimmerCard";

const Cards = () => {
  const [meme, setMeme] = useState([]);
  const [showShimmer, setShowShimmer] = useState(false);

  const fetchMeme = async () => {
    setShowShimmer(true);
    let res = await fetch("https://meme-api.com/gimme/20");
    let result = await res.json();
    setShowShimmer(false);
    setMeme((prev) => [...prev, ...result?.memes]);
  };

  useEffect(() => {
    fetchMeme();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight
    ) {
      fetchMeme();
    }
  };

  return (
    <div className="cards-wrapper">
      {meme?.map((data, index) => (
        <Card key={index} data={data} />
      ))}
      {showShimmer && <ShimmerCard />}
    </div>
  );
};

export default Cards;
