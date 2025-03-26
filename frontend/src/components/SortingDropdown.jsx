import { useEffect } from "react";
import { useSearchParams } from "react-router";
import Dropdown from "./Dropdown";

function SortingDropdown(props) {
  const selectedOption = props.selectedOption;
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    searchParams.set("orderBy", selectedOption.value);
    setSearchParams(searchParams);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedOption]);

  return <Dropdown {...props} />;
}

export default SortingDropdown;
