import { useParams, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";
import billsData from "../data/bills.json";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const BillDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, balance, setBalance, paidBills, setPaidBills, updateUserData } = useContext(AuthContext);

  const bill = billsData.find((b) => b.id === parseInt(id));
  const [paid, setPaid] = useState(paidBills.includes(bill?.id));

  useEffect(() => {
    if (user?.email) {
      const savedData = JSON.parse(localStorage.getItem(user.email));
      if (savedData) {
        setBalance(savedData.balance);
        setPaidBills(savedData.paidBills || []);
      }
    }
  }, [user, setBalance, setPaidBills]);

  const handlePay = () => {
    if (paid) {
      toast.warning("এই বিলটি ইতিমধ্যেই পরিশোধ করা হয়েছে!");
      return;
    }

    if (balance < bill.amount) {
      toast.error("পর্যাপ্ত ব্যালান্স নেই!");
      return;
    }

    const newBalance = balance - bill.amount;
    const updatedPaidBills = [...paidBills, bill.id];

    updateUserData(newBalance, updatedPaidBills);
    setPaid(true);

    toast.success("Payment Succesfull !");

    setTimeout(() => {
      navigate("/bills");
    }, 1500);
  };

  if (!bill) {
    return (
      <div className="text-center mt-10 text-red-600 font-bold">
        Bill not found!
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-xl shadow space-y-6 bg-white">
      {/* Back Button */}
      <button
        onClick={() => navigate("/bills")}
        className="text-left text-black font-semibold flex items-center  border rounded-s-md bg-green-400 hover:bg-green-500 px-4 py-2"
      >
        <span className="text-xl">←</span>
        <span>Back</span>
      </button>

      {/* Title */}
      <h1 className="text-3xl font-bold text-center border-b pb-2">{bill.organization}</h1>

      {/* Main Content */}
      <div className="flex space-x-4 items-center">
        {/* Image */}
        <div className="w-24 h-24 border rounded-md flex items-center justify-center text-gray-500 overflow-hidden">
          <img src={bill.icon} alt={bill.organization} className="w-full h-full object-contain" />
        </div>

        {/* Amount & Due Date */}
        <div>
          <div className="flex items-center space-x-2 items-center mb-4">
            <p className="text-lg font-semibold">Amount</p>
            <p className="text-gray-700 mb-2">{bill.amount} BDT</p>
          </div>
          <p className="text-lg font-semibold">Due Date</p>
          <p className="text-gray-700">{new Date(bill["due-date"]).toLocaleDateString()}</p>
        </div>
      </div>

      {/* Pay Button */}
      <button
        onClick={handlePay}
        className={`w-full py-2 rounded border text-lg font-semibold bg-blue-400  ${paid
            ? "bg-gray-300 text-gray-600 cursor-not-allowed"
            : "bg-blue-400 text-black hover:bg-blue-500 border-black"
          }`}
        disabled={paid}
      >
        {paid ? "Already Paid" : "Pay Bill"}
      </button>
    </div>
  );
};

export default BillDetails;
