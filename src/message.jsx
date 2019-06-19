import React from 'react';
import {Basic, System, Own} from "./messages";

export function Message({system = false, own, ...message}) {

  if (system) {
    return (<System {...message}/>)
  } else if(own){
    return <Own {...message} />
  } else {
    return (
      <Basic {...message}/>
    );
  }
}
