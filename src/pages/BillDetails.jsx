
import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import billsData from "../data/bills.json"; // Fake JSON data
import { useState } from "react";

const BillDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, balance, setBalance, paidBills, setPaidBills } = useContext(AuthContext);

  const bill = billsData.find((b) => b.id === parseInt(id));

  const [paid, setPaid] = useState(paidBills.includes(bill.id));

  const handlePay = () => {
    if (paid) {
      alert("এই বিলটি ইতিমধ্যেই পরিশোধ করা হয়েছে!");
      return;
    }

    if (balance < bill.amount) {
      alert("পর্যাপ্ত ব্যালান্স নেই!");
      return;
    }

    setBalance(balance - bill.amount);
    setPaidBills([...paidBills, bill.id]);
    setPaid(true);
    alert("পেমেন্ট সফল হয়েছে!");
    navigate("/bills");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-10 p-4 border shadow rounded">
      {/* Left Side */}
      <div className="flex flex-col items-center">
        <img src={bill.icon} alt={bill.organization} className="w-40 h-40 mb-4" />
        <p className="text-gray-600">{bill.bill_type}</p>
      </div>

      {/* Right Side */}
      <div>
        <h2 className="text-2xl font-bold">{bill.organization}</h2>
        <p className="mt-2"><strong>Amount:</strong> {bill.amount} BDT</p>
        <p><strong>Due Date:</strong> {new Date(bill["due-date"]).toLocaleDateString()}</p>

        <button
          onClick={handlePay}
          className={`mt-6 w-full py-2 rounded text-white ${paid ? "bg-gray-400 cursor-not-allowed" : "bg-green-600"}`}
          disabled={paid}
        >
          {paid ? "Already Paid" : "Pay Bill"}
        </button>
      </div>
    </div>
  );
};

export default BillDetails;
