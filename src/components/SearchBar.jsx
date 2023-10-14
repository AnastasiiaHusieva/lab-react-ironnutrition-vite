function SearchBar ({ onSearch }) {

    const handleSearch = (e) => {
        onSearch (e.target.value)
    }
    return <div>
        <input  className="search-bar" type="text" placeholder="Search for food..." onChange={handleSearch} />
    </div>
}

export default SearchBar