import React, { useState } from 'react'
import { Button, List, Icon } from 'semantic-ui-react'

const CustomList = ({ data, itemIndex, removeItem }) => (
  <List.Item style={{ minHeight: '50px' }}>
    <List.Content floated='right'>
      <List.Icon onClick={() => removeItem(itemIndex)} size="big" name="delete" />
    </List.Content>
      <List.Icon size="big"  name="arrow circle right" />
      {/* Might have to reiterate this bit. 
      We could maybe usd a div and show text area on click*/}
    <List.Content> <div className="contentEditableDiv" contentEditable="true">{data}</div></List.Content>
  </List.Item>
)
function InputListComponent({data}) {
  let [ listElements, setListElements ] = useState(data)
  const removeItem = (index) => {
    setListElements(listElements.filter((_, i) => i !== index ));
  } 
  return(
    <>
    <List divided verticalAlign='middle'>
      {listElements.map((elem, i) => (
        <CustomList key={i} data={elem} itemIndex={i} removeItem={(i) => removeItem(i)}/>
      ))}
    </List>
   <Button onClick={() => setListElements([...listElements, ''])}><Icon name="add" ></Icon> Add</Button>
   </>
  )
}

export default InputListComponent;