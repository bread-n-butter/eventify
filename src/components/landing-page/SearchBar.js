/**
 *    
 *    SearchBar component. Currently not in Use. TODO: delete later.
 *    
 *    Imported from Material UI.
 *    
 */
import React from 'react';

import AutoComplete from 'material-ui/lib/auto-complete';

import GeoSuggest from 'react-geosuggest';

const SearchBar = () => (
    <GeoSuggest />
    <AutoComplete dataSource={['Seattle', 'Houston', 'New Orleans', 'Santa Cruz']} />
);

export default SearchBar;
