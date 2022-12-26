import OneTransaction from './TransactionOne';

function Transaction({ items }) {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        <OneTransaction props={items} />
      </tbody>
    </table>
  );
}

export default Transaction;
