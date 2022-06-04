import React, { useEffect } from "react";
import Loading from '../../components/goCardless/Loading';

function GoCardless(props){
  useEffect(() => {
    fetch(`https://a8vg3fnxx8.execute-api.eu-west-2.amazonaws.com/default/goCardlessService`)
    .then(response => response.json())
    .then(data => window.location.href = data.location)
  }, []);

  return (
    <div>
      <Loading message="Redirecting to payment..."/>
    </div>
  );
}

export default GoCardless