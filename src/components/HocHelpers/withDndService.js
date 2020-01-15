import React from 'react';
import {DndConsumer} from '../dndServiceContext';

const withDndService = (Wrapped, mapMethodsToProps) => {
  return (props) => {
    return (<DndConsumer>
      { 
        (dndApi) => {
          const serviceProps = mapMethodsToProps(dndApi)
          return(
            <Wrapped {...props} {...serviceProps}/>
          )
        }
      }
    </DndConsumer>)
  };
};

export default withDndService;