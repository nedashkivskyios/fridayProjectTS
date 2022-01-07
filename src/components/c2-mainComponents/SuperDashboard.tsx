import React from 'react';
import SuperInputText from "../c6-SuperComponents/s1-SuperInputText/SuperInputText";
import SuperButton from "../c6-SuperComponents/s2-SuperButton/SuperButton";
import SuperCheckbox from "../c6-SuperComponents/s3-SuperCheckbox/SuperCheckbox";

export const SuperDashboard = () => {
  const styles = {
    width: '300px',
    margin: '0 auto',
  }
  return (
    <div style={styles}>
      <SuperInputText placeholder={'SuperInputText'}/>
      <hr/>
      <SuperButton>SuperButton</SuperButton>
      <hr/>
      <SuperCheckbox/>
    </div>
  );
};
