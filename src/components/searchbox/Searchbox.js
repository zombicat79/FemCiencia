import { TextField } from '@material-ui/core';

const Searchbox = (props) => {
    return (
        <div>
            <TextField label="Cerca" onChange={(e) => props.handleSearch(e)} type="text" name="searchbox" value={props.searchValue} />
        </div>
    )
}

export default Searchbox;