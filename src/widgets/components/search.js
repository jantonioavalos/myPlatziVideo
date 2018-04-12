import React from 'react';
import './search.css';

const Search = props => (
  <form className="Search" onSubmit={props.handleSubmit}>
    <input
      type="text"
      ref={props.setRef}
      placeholder="Busca tu video favorito"
      className="Search-input"
      onChange={props.handleChange}
      value={props.value}
    />
  </form>
);
// ()=>() === ()=>{return()}

export default Search;
