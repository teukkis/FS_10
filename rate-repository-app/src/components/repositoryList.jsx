import React, { useState } from 'react';
import RepositoryListContainer from './RepositoryListContainer'
import useRepositories from '../hooks/useRepositories';
import { useDebounce } from 'use-debounce';
import { getOrder } from '../helpers/validation'


const RepositoryList = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const [variables, setVariables] = useState(getOrder());
  
  const setValue = (value) => {
    setVariables( getOrder(value) );
    setSelectedValue(value);
  };

  const [searchQuery, setSearchQuery] = useState('');
  const [value] = useDebounce(searchQuery, 500);

  const { repositories, fetchMore } = useRepositories({ ...variables, searchKeyword: value, first: 6 });

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <RepositoryListContainer 
      repositories={repositories} 
      setSearchQuery={setSearchQuery}
      searchQuery={searchQuery}
      selectedValue={selectedValue}
      setValue={setValue}
      onEndReach={onEndReach} 
    />
  )
};

export default RepositoryList;