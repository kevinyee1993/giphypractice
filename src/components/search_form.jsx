import React from 'react';
import { Field, reduxForm } from 'redux-form';

let SearchForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={ handleSubmit }>
      <label htmlFor="search">Search GIFs</label>
      <Field name="search" component="input" type="text"></Field>
    </form>
  )
}

SearchForm = reduxForm({
  form: 'search'
})(SearchForm)

export default SearchForm;
