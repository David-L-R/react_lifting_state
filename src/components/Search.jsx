// create an input element
// read the input
// "send" the input result

// YOU SHOULD NOT WRITE THIS ↕️
// so users component can filter users by input result

const Search = ({ search, setSearch }) => {
  /*
        props = {
            search: search,
            setSearch: setSearch
        }
    */

  //   const { search, setSearch } = props;

  return (
    <input value={search} onChange={(event) => setSearch(event.target.value)} />
  );
};

export default Search;
