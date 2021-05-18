const Searchbox = (props) => {
    return (
        <div>
            <input onChange={(e) => props.handleSearch(e)} type="text" name="searchbox" value={props.searchValue} placeholder="Cerca" />
        </div>
    )
}

export default Searchbox;