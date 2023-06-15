import Search from "Components/Icons/Search";
import style from "./course.module.css";
import React from "react";
import { IconDropdown } from "Components/Icons/Dropdown";

export default function SearchAndFilter() {
  return (
    <div className={style.searchAndFilter2}>
      <div className={style.searchAndImg}>
        <Search />
        <input type="search" placeholder="Search Here" />
      </div>
      <button>
        All Lectures
        <IconDropdown />
      </button>
    </div>
  );
}
