import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default function Pagination(props) {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.chooseCategory(event.target.textContent);
  };

  return (
    <Paper square>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label='ALL'/>
        <Tab label="Frontend"/>
        <Tab label="Backend" />
        <Tab label="FullStack" />
        <Tab label="Design"  />
        <Tab label="AI"  />
        <Tab label="Others"  />
      </Tabs>
    </Paper>
    
  );
}