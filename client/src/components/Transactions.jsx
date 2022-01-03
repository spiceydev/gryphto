import { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import TransactionsCard from './TransactionCard';

const Transactions = () => {
  const { transactions, currentAccount } = useContext(TransactionContext);

  return (
    <div className="flex items-center justify-center w-full 2xl:px-20 gradient-bg-transactions">
      <div className="flex flex-col px-4 py-12 md:p-12">
        {currentAccount ? (
          <h3 className="my-2 text-3xl text-center text-white">
            Latest Transactions
          </h3>
        ) : (
          <h3 className="my-2 text-3xl text-center text-white">
            Connect your account to see the latest transactions
          </h3>
        )}

        <div className="flex flex-wrap items-center justify-center mt-10">
          {[...transactions].reverse().map((transaction, i) => (
            <TransactionsCard key={i} {...transaction} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
