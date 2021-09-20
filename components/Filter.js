import React, { useState } from "react";
import { useProduct } from "../components/context";
import { RangeFilter } from "./RangeFilter";

const Filter = () => {
  const { categoryType, onFilterByCategory, onFilterByPrice } = useProduct();

  const categories = [
    "people",
    "premium",
    "pets",
    "food",
    "landmarks",
    "cities",
    "nature",
  ];

  return (
    <>
      <div className="filter">
        <h5 className="my-3">Category</h5>

        {categories.map((type, index) => (
          <div className="custom-control custom-checkbox my-3" key={index}>
            <input
              type="checkbox"
              className="custom-control-input"
              id={type}
              value={type}
              onChange={() => onFilterByCategory(type)}
              checked={categoryType.indexOf(type) === -1 ? false : true}
            />
            <label className="custom-control-label" htmlFor={type}>
              {type}
            </label>
          </div>
        ))}

        <hr />

        <h5 className="my-3">Price range</h5>

        <div className="mb-4">
          <RangeFilter
            min={0}
            max={1000}
            onChange={({ min, max }) => {
              onFilterByPrice(min, max);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Filter;
