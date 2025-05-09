import { Link } from 'react-router-dom';

const BillCard = ({ bill }) => {
    const { id, bill_type, icon, organization, amount, due_date, isPaid } = bill;

    return (
        <div className="border p-4 rounded-lg shadow-md bg-white flex items-center justify-between">
            <div className="flex gap-4 items-center">
                <img src={icon} alt={bill_type} className="w-12 h-12" />
                <div>
                    <h2 className="text-lg font-bold">{organization}</h2>
                    <p className="text-sm text-gray-600 capitalize">{bill_type}</p>
                    <p className="text-sm">Due: {new Date(due_date).toLocaleDateString()}</p>
                </div>
            </div>
            <div className="flex flex-col items-end">
                <p className="text-xl font-semibold text-blue-600">{amount} BDT</p>
                {isPaid ? (
                    <span className="text-green-600 text-xl">✅ Paid</span>
                ) : (
                    <Link to={`/bill/${id}`} className="bg-blue-600 text-white px-4 py-1 rounded">
                        Pay
                    </Link>
                )}
            </div>
        </div>
    );
};

export default BillCard;
