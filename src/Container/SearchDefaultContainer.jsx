import { useEffect } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { BEAPIROOT } from "config";
import { setSearchValue, setCategories } from "store/actions/index";
import SearchDefault from "Pages/Search/SearchDefault";

export const SearchDefaultContainer = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`${BEAPIROOT}/book/category`)
      .then((res) => res.json())
      .then((res) => {
        dispatch(setCategories(res.categories));
      })
      .catch((err) => console.log("Catched errors >>> ", err));
  }, [dispatch]);

  const goToSubCatePage = (id, name) => {
    history.push({
      pathname: `/category/${id}`,
      name: name,
    });
  };

  const goToSearchResult = (keyword) => {
    dispatch(setSearchValue(keyword));
    history.push(`/search_result/${keyword}?type=all&sort=keyword`);
  };

  const IProps = {
    goToSubCatePage,
    goToSearchResult,
  };

  return <SearchDefault {...IProps} />;
};
