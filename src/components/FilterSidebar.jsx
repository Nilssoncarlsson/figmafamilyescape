import React from 'react';

const FilterSidebar = ({ onFilterChange }) => {
    return (
        <aside className="filter-sidebar">
            // Your filter logic and UI here
            // Example:
            <input type="range" onChange={onFilterChange} />
        </aside>
    );
};

export default FilterSidebar;
