import React, { useState, useEffect } from "react";

const TransactionDashboard = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Example data fetch or static data
    const fetchTransactions = async () => {
      const data = [
        {
          id: 1,
          date: "2024-12-15",
          description: "Polo",
          amount: 120.0,
          status: "Completed",
        },
        {
          id: 2,
          date: "2024-10-14",
          description: "Jean",
          amount: 300.5,
          status: "Pending",
        },
        {
          id: 3,
          date: "2024-10-12",
          description: "T-Shirts",
          amount: 80.75,
          status: "Failed",
        },
        {
          id: 4,
          date: "2024-09-20",
          description: "Clothes",
          amount: 100.40,
          status: "Completed"
        },
        {
          id: 5,
          date: "2024-09-20",
          description: "Shoes",
          amount: 70.0,
          status: "Pending",
        },
        {
          id: 6,
          date: "2024-08-05",
          description: "T-Shirts",
          amount: 110.08,
          status: "Completed",
        },
        {
          id: 7,
          date: "2024-07-15",
          description: "Clothes",
          amount: 150.40,
          status: "Completed",
        },
      ];
      setTransactions(data);
    };

    fetchTransactions();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl text-center font-bold text-gray-800 mb-6">All Transaction</h1>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2 text-left">Date</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
                <th className="border border-gray-300 px-4 py-2 text-right">Amount ($)</th>
                <th className="border border-gray-300 px-4 py-2 text-center">Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td className="border border-gray-300 px-4 py-2">{transaction.date}</td>
                  <td className="border border-gray-300 px-4 py-2">{transaction.description}</td>
                  <td className="border border-gray-300 px-4 py-2 text-right">
                    {transaction.amount.toFixed(2)}
                  </td>
                  <td
                    className={`border border-gray-300 px-4 py-2 text-center ${
                      transaction.status === "Completed"
                        ? "text-green-600"
                        : transaction.status === "Pending"
                        ? "text-yellow-600"
                        : "text-red-600"
                    }`}
                  >
                    {transaction.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TransactionDashboard;
