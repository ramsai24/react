// import logo from './logo.svg';
import { Apple } from "./components/apple/apple.js";
import SideNav from "./components/sideNav";
import { AddCompanyBtn } from "./components/addCompany/addCompany.js";
import { CardsContainer } from "./components/cardContainer/cardsContainer.js";
import { Search } from "./components/search/search.js";
import { Pagination } from "./components/paginationButton/pagination.js";
import { dataArrObj, onSearch, onAdd, dateList, newed } from "./javascript";
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
            <Search onSearchEl={onSearch} />
            <CardsContainer dataArrObj={dataArrObj} />
            <Pagination newData={dateList} onData={newed} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
