import React from 'react'


const Search = props => {
    return (
        <div>
           <section className="container-fluid">
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </section>
 
        </div>
    )
}

export default Search
