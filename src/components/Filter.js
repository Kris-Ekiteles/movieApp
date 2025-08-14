import React, {useState} from 'react';

const Filter = ({onFilterChange}) => {
const [filters, setFilters] = useState({title:'', rate:''});

const handleChange = (e) => {
  const {name,value}=e.target;
  const newFilters = {...filters,[name]:value};
  setFilters(newFilters);
  onFilterChange(newFilters);
};
  return (
    <div>
      
    </div>
  )
}

export default Filter;
