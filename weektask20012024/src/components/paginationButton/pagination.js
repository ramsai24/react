import { dateList, newArray, btn } from "../../javascript.js";

let count = 0;

export const Pagination = () => {
  console.log(`dateList :${dateList}`);
  return (
    <div className="pagination-btns">
      {btn.map((each) => {
        {
          console.log(each);
        }
        console.log(count);
        count += 1;

        return (
          <button
            className=".page-btn"
            key={`button${count}`}
            id={`button${count}`}
            type="button"
          >
            {newArray.length + 1}
          </button>
        );
      })}
    </div>
  );
};

<Pagination />;
