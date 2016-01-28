/**
 *    
 *    SearchBar component. Currently not in Use. TODO: delete later.
 *    
 *    Imported from Material UI.
 *    
 */
import React from 'react'

import AutoComplete from 'material-ui/lib/auto-complete'

const SearchBar = () => (
    <AutoComplete dataSource={["Seattle", "Houston", "New Orleans", "Santa Cruz"]} />
);

export default SearchBar;
