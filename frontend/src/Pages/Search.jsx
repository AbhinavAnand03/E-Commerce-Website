import search from "../assets/search.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Search.css";  

const Search = () => {
    const [query, setQuery] = useState(""); 
    const navigate = useNavigate();

    const searchQueryHandler = (event) => {
        if (event.key === "Enter" && query.length > 0) {
            navigate(`/search/${query}`);
        }
    };           
}