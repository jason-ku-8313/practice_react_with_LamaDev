import React, { useState } from "react";
import GigCard from "../../components/gigCard/GigCard";
import { gigs } from "../../data";
import "./Gigs.scss";

export default function Gigs() {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);

  const handleClickSort = (e) => {
    setSort(e.target.dataset.sortby);
    setOpen(false);
  };

  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">
          FIVERR &gt; GRAPHICS &amp; DESIGN &gt;
        </span>
        <h1>AI Artists</h1>
        <p>
          Explore the boundaries of art and technology with Fiverr&apos;s AI
          artists
        </p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input type="text" placeholder="min" />
            <input type="text" placeholder="max" />
            <button>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">Sort by</span>
            <span className="sortType">
              {sort === "sales" ? "Best Selling " : "Newest"}
            </span>
            <img
              src="./img/down.png"
              alt=""
              onClick={() => setOpen((prev) => !prev)}
            />
            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span data-sortby="createdAt" onClick={handleClickSort}>
                    Newest
                  </span>
                ) : (
                  <span data-sortby="sales" onClick={handleClickSort}>
                    Best Selling
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {gigs.map((gig) => (
            <GigCard key={gig.id} item={gig} />
          ))}
        </div>
      </div>
    </div>
  );
}
