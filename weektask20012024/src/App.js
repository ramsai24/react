// import logo from './logo.svg';
import { Apple } from "./components/apple/apple.js";
import SideNav from "./components/sideNav";
import { AddCompanyBtn } from "./components/addCompany/addCompany.js";
import { CardsContainer } from "./components/cardContainer/cardsContainer.js";
import { Search } from "./components/search/search.js";
import { Pagination } from "./components/paginationButton/pagination.js";
import {
  dataArrObj,
  onSearch,
  onAdd,
  dateList,
  newed,
  rightArrow,
  leftArrow,
  onSearchBtn,
} from "./javascript";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Apple />
      <div className="bottom-contianer">
        <SideNav />
        <div className="content-container">
          <div className="components">
            <AddCompanyBtn onAdd={onAdd} />
            <Search onSearchEl={onSearch} onSearchBtn={onSearchBtn} />
            <CardsContainer dataArrObj={dataArrObj} />
            <div className="pagination-container">
              <button className="page-btn" type="button" onClick={leftArrow}>
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              <Pagination newData={dateList} onData={newed} />
              <button className="page-btn" type="button" onClick={rightArrow}>
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
