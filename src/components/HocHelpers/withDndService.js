import React from "react";
import { DndConsumer } from "../DndServiceContext";

const withDndService = mapMethodsToProps => Wrapped => {
  return props => {
    return (
      <DndConsumer>
        {dndApi => {
          const serviceProps = mapMethodsToProps(dndApi);
          return <Wrapped {...props} {...serviceProps} />;
        }}
      </DndConsumer>
    );
  };
};

export default withDndService;
