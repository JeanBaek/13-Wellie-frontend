import { useEffect } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { setBooks, setSort, setOffset } from "store/actions/index";
import { BEAPIROOT } from "config";
import SearchResult from "Pages/Search/SearchResult";

export const SearchResultContainer = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const searchValue = useSelector((store) => store.searchReducer.searchValue);
  const type = useSelector((store) => store.searchReducer.type);
  const sort = useSelector((store) => store.searchReducer.sort);

  useEffect(() => {
    fetch(`${BEAPIROOT}/book/search/${searchValue}?type=${type}&sort=${sort}`)
      .then((res) => res.json())
      .then((res) => {
        if (typeof res.MESSAGE == "object") {
          dispatch(setBooks(res.MESSAGE));
        } else {
          dispatch(setBooks(null));
        }
      })
      .catch((err) => console.log("Catched errors!! >>>", err));
  }, [searchValue, type, sort, dispatch]);

  const goToBookDetail = (id) => {
    history.push(`/book_details/${id}`);
  };

  const changeSort = (e) => {
    dispatch(setSort(e.target.value));
    dispatch(setOffset(0));
  };

  const IProps = {
    goToBookDetail,
    changeSort,
  };

  return <SearchResult {...IProps} />;
};
