import React from 'react'

export default function List(props) {
  const list = props.list;
  const listItems = list.map((listitem) =>
    <li key={listitem.toString()}>{listitem}</li>
  )
  return (
    <ul>{listItems}</ul>
  );
}
