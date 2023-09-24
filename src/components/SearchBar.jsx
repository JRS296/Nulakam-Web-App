import '../components/Categories/CSS/categories.css';
import React, { useState, useRef } from 'react'
import { FaSearch } from 'react-icons/fa';
import Search from './Search';
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {
    const navigate = useNavigate();
    const [query, setQuery] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!query.trim()) return;
        navigate(`/search?query=${query}`);
        setQuery("");
        window. location. reload();
    }

    // const handleReset = (e) => {
    //     resetSearch();
    //     setQuery("");
    // }

    // const handleSearch = async (query) => {
    //     const { error, posts } = await searchPosts(query);
    //     if (error) return updateNotification('error', "Error Encountered in Search Provider: " + error);
    //     setSearchResult(posts);
    //     navigate("/search");
    // };
    return (
        <div className="search-grid">
            {/* // onSubmit={handleSubmit}> */}
            <form className="search-box" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="search-bar"
                    className="search-txt"
                    value={query}
                    // onKeyDown={handleKeyDown}
                    onChange={({ target }) => {
                        setQuery(target.value);
                        if (!query.trim()) return;
                        // handleSearch(query) //Hamdle Change live
                    }} placeholder="Search"
                />
                <button className="search-btn" type='submit'>
                    <FaSearch />
                </button>
            </form>
        </div>
    )
}