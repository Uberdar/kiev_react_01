function OneTransaction({ props }) {
  console.log('props: ', props);
  //   const { id, type, amount, currency } = props.props.items;

  return props.map(el => (
    <tr key={el.id}>
      <td>{el.type}</td>
      <td>{el.amount}</td>
      <td>{el.currency}</td>
    </tr>
  ));
}

export default OneTransaction;

// return (
//     <tr key={el.id}>
//       <td>{el.type}</td>
//       <td>{el.amount}</td>
//       <td>{el.currency}</td>
//     </tr>
//   );
