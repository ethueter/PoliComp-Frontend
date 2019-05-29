import React from 'react'
import _ from 'lodash'
import { Search } from 'semantic-ui-react'

// const SearchFluid = (props) => <Input fluid icon='search' placeholder='Search...' onChange={props.handleSearch} />

// export default SearchFluid

const ArticleSearch = (props) => {

    return (
        <Search
            onSearchChange={_.debounce(props.handleSearch, 1000, {
                leading: true,
            })}
        />
    )
}
    


export default ArticleSearch;
