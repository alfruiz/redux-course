import React from 'react';
import { connect } from 'react-redux';
import values from 'ramda/src/values';
import AddTransactionButton from './AddTransactionButton';
import Transaction from './Transaction';

const TransactionsList = (props) => {
  const transactions = values(props.transactions).map((transaction) =>
    <Transaction key={transaction.id} transaction={transaction} />
  );

  return (
    <div>
      <AddTransactionButton />
      <div>
        { transactions }
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { transactions } = state;
  
  return {
    transactions,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsList);
