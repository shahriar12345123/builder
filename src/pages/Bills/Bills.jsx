import { useEffect, useState } from "react";
import billsData from "./billsData.json";
import BillCard from "./BillCard";

const Bills = () => {
  const [bills, setBills] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    setBills(billsData);
  }, []);

  const filteredBills = filter === "all"
    ? bills
    : bills.filter((bill) => bill.bill_type === filter);

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Your Bills</h1>

      <div className="mb-4">
        <label className="mr-2 font-medium">Filter by Type:</label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border px-3 py-1 rounded"
        >
          <option value="all">All</option>
          <option value="electricity">Electricity</option>
          <option value="gas">Gas</option>
          <option value="education">Education</option>
          <option value="water">Water</option>
        </select>
      </div>

      <div className="space-y-4">
        {filteredBills.map((bill) => (
          <BillCard key={bill.id} bill={bill} />
        ))}
      </div>
    </div>
  );
};

export default Bills;
