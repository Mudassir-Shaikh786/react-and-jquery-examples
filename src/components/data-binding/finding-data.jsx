import { useEffect, useState } from "react";
import './binding-data.css';

export function FindingData(){


    const [categories] = useState(["All", "Electronics", "Fashion", "Footwear", "Kids Fashion"]);

    return(
        <div className="container-fluid">
              <h2>Categories</h2>
              <nav className="d-flex justify-content-between bg-light border border-1 p-2 m-2">
                 {
                    categories.map(category => <a className="btn btn-warning" key={category} href={`/${category}`}>{category}</a>)
                 }
              </nav>
              <ol className="list-unstyled checklist">
                  {
                     categories.map((category, index)=> <li key={index}> <input type="checkbox" /> <label> {category} </label> </li> )
                  }
              </ol>

              <select>
                 {
                    categories.map(category=> <option key={category} value={category}>{category}</option>)
                 }
              </select>
        </div>
    )
}
