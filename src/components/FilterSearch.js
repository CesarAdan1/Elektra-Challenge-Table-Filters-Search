import React from 'react'

const FilterSearch = () => {
  return (
    <div className="search-container">
        <label htmlFor="filter">
        <input type="text" placeholder="Search.." name="search" />
        </label>
    </div>
  )
}

export default FilterSearch;