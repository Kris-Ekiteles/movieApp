import React, {useState} from 'react';
import "./Filter.css"

const Filter = ({onFilterChange}) => {
const [filters, setFilters] = useState({title:'', rate:''});

const handleChange = (e) => {
  const {name,value}=e.target;
  const newFilters = {...filters,[name]:value};
  setFilters(newFilters);
  onFilterChange(newFilters);
};
  return (
    <div className="filter">
      <input
        type="text"
        name="title"
        placeholder="filter by title...."
        value={filters.title}
        onChange={handleChange}
      />

      <input
        type="number"
        name="rate"
        placeholder="min-rating"
        min="0"
        max="10"
        value={filters.rate}
        onChange={handleChange}
      />
    </div>
  );
}

export default Filter;
