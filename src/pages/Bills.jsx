import { useContext, useState } from "react";
import billsData from "../data/bills.json";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Bills = () => {
  const { user, paidBills, loading } = useContext(AuthContext); 
  const [filter, setFilter] = useState("all");

  // Show loading message while waiting for data to be ready
  if (loading) {
    return <div>Loading...</div>; 
  }

  // Filtering bills based on selected type
  const filteredBills = filter === "all"
    ? billsData
    : billsData.filter(bill => bill.bill_type === filter);

  const billTypes = [...new Set(billsData.map(b => b.bill_type))];

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">All Bills</h2>

      <div className="mb-6">
        <label className="mr-2 font-semibold">Filter by Type:</label>
        <select
          className="border p-2 rounded"
          value={filter}
          onChange={e => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          {billTypes.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      <div className="grid gap-4">
        {filteredBills.map(bill => (
          <div key={bill.id} className="border p-4 rounded flex justify-between items-center">
            <div className="flex items-center gap-4">
              <img src={bill.icon} alt={bill.bill_type} className="w-12 h-12" />
              <div>
                <h4 className="font-bold">{bill.organization}</h4>
                <p className="text-sm capitalize">{bill.bill_type}</p>
                <p className="text-sm text-gray-500">
                  Due: {new Date(bill.due_date).toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold">{bill.amount} BDT</p>
              {paidBills.includes(bill.id) ? (
                <span className="text-green-600 text-lg font-bold ml-2">✅</span>
              ) : (
                <Link to={`/bills/${bill.id}`}>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded">
                    View Details
                  </button>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bills;
