import React, {useEffect, useState} from "react";
import axios from "axios";

const Result = (props) => {

    const {search} = props;
    const [responseData, setResponseData] = useState("");
    const [responseError, setResponseError] = useState(false);

    useEffect(() => {
        axios
          .get(`http://swapi.dev/api/${search.category}/${search.id}/`)
          .then((response) => {
            setResponseData(response.data);
            setResponseError(false);
            console.log (response.data);
          })
          .catch((error) => {
            setResponseError(true);
          });
      }, [search])

    return (
        <div>
    
          {responseError ?
            <>
            <h1>no results</h1>
            </>
            :
          <ul>
            {Object.entries(responseData).map(([key, value]) => (
              <li>
                 <span>{value}</span>
              </li>
            ))}
          </ul>
    
          }
        </div>
      );
}

export default Result;