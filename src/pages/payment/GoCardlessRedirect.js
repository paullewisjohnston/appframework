import React, { useState, useEffect } from "react";
import Loading from '../../components/goCardless/Loading';
import {Navigate, useLocation} from "react-router-dom";
import * as qs from 'query-string';

function GoCardlessRedirect(props){
  const [isComplete, setIsComplete] = useState(false);
  const [failed, setFailed] = useState(false);
  let location = useLocation();
  const parsed = qs.parse(location.search);
  const redirect_flow_id = parsed.redirect_flow_id;
  console.log(redirect_flow_id)
  console.log("REDIRECT")

  useEffect(() => {
    fetch(`https://3f9fhnxjd4.execute-api.eu-west-2.amazonaws.com/default/goCardlessCompletionService?redirect_flow_id=${redirect_flow_id}`)
    .then(response => {
      if(response.ok)
      {return response.text();}
      setFailed(true);
      throw new Error('Something went wrong.');
    })  
    .then(() => setIsComplete(true))
    .catch(error => console.log(error) );
  }, [redirect_flow_id]);

  return (
    <div>
      {isComplete
        ? <Navigate to="/gocardless-success" />
        : <Loading message="Completing payment setup..." />
      }
      {failed
        ? <Navigate to="/gocardless-failed" />
        : <div />
      }
    </div>
  );
}

export default GoCardlessRedirect