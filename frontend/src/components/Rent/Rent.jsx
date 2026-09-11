import { useState } from "react";
import "./Rent.css";

function Rent() {
  const [month, setMonth] = useState("");
  const [amount, setAmount] = useState("");
  const [paymentDate, setPaymentDate] = useState("");
  const [accommodation, setAccommodation] = useState("");
  const [status, setStatus] = useState("");

  const [rentRecords, setRentRecords] = useState([
    {
      id: 1,
      month: "September 2026",
      amount: 8000,
      paymentDate: "01-09-2026",
      accommodation: "Hostel",
      status: "Paid",
    },
    {
      id: 2,
      month: "August 2026",
      amount: 8000,
      paymentDate: "01-08-2026",
      accommodation: "Hostel",
      status: "Paid",
    },
  ]);

  const addRent = (event) => {
    event.preventDefault();

    if (
      !month ||
      !amount ||
      !paymentDate ||
      !accommodation ||
      !status
    ) {
      alert("Please fill all fields.");
      return;
    }

    const newRent = {
      id: Date.now(),
      month: month,
      amount: Number(amount),
      paymentDate: paymentDate,
      accommodation: accommodation,
      status: status,
    };

    setRentRecords([...rentRecords, newRent]);

    setMonth("");
    setAmount("");
    setPaymentDate("");
    setAccommodation("");
    setStatus("");
  };

  const deleteRent = (id) => {
    setRentRecords(
      rentRecords.filter((rent) => rent.id !== id)
    );
  };

  const totalRent = rentRecords.reduce(
    (total, rent) => total + rent.amount,
    0
  );

  return (
    <div className="rent-page">

      {/* Header */}
      <div className="rent-header">
        <h1>🏠 Rent Expenses</h1>
        <p>Track and manage your accommodation expenses</p>
      </div>

      {/* Summary Cards */}
      <div className="rent-summary">

        <div className="rent-summary-card">
          <p>Total Rent</p>
          <h2>₹{totalRent}</h2>
        </div>

        <div className="rent-summary-card">
          <p>Total Payments</p>
          <h2>{rentRecords.length}</h2>
        </div>

      </div>

      {/* Add Rent Form */}
      <div className="rent-card">

        <h2>Add Rent Payment</h2>

        <form onSubmit={addRent}>

          {/* Month */}
          <div className="rent-form-group">
            <label>Month</label>

            <input
              type="month"
              value={month}
              onChange={(event) =>
                setMonth(event.target.value)
              }
            />
          </div>

          {/* Amount */}
          <div className="rent-form-group">
            <label>Rent Amount</label>

            <input
              type="number"
              placeholder="Enter rent amount"
              value={amount}
              onChange={(event) =>
                setAmount(event.target.value)
              }
            />
          </div>

          {/* Payment Date */}
          <div className="rent-form-group">
            <label>Payment Date</label>

            <input
              type="date"
              value={paymentDate}
              onChange={(event) =>
                setPaymentDate(event.target.value)
              }
            />
          </div>

          {/* Accommodation */}
          <div className="rent-form-group">
            <label>Accommodation</label>

            <select
              value={accommodation}
              onChange={(event) =>
                setAccommodation(event.target.value)
              }
            >
              <option value="">
                Select accommodation
              </option>

              <option value="Hostel">
                Hostel
              </option>

              <option value="PG">
                PG
              </option>

              <option value="Apartment">
                Apartment
              </option>

              <option value="Rented Room">
                Rented Room
              </option>
            </select>
          </div>

          {/* Payment Status */}
          <div className="rent-form-group">
            <label>Payment Status</label>

            <select
              value={status}
              onChange={(event) =>
                setStatus(event.target.value)
              }
            >
              <option value="">
                Select status
              </option>

              <option value="Paid">
                Paid
              </option>

              <option value="Pending">
                Pending
              </option>
            </select>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="save-rent-btn"
          >
            + Save Rent
          </button>

        </form>

      </div>

      {/* Rent History */}
      <div className="rent-card">

        <h2>Rent History</h2>

        <div className="rent-table">

          <div className="rent-table-header">
            <span>Month</span>
            <span>Amount</span>
            <span>Payment Date</span>
            <span>Accommodation</span>
            <span>Status</span>
            <span>Action</span>
          </div>

          {rentRecords.map((rent) => (

            <div
              className="rent-table-row"
              key={rent.id}
            >

              <span>{rent.month}</span>

              <span>₹{rent.amount}</span>

              <span>{rent.paymentDate}</span>

              <span>{rent.accommodation}</span>

              <span>
                <span
                  className={
                    rent.status === "Paid"
                      ? "paid-badge"
                      : "pending-badge"
                  }
                >
                  {rent.status}
                </span>
              </span>

              <button
                className="rent-delete-btn"
                onClick={() =>
                  deleteRent(rent.id)
                }
              >
                Delete
              </button>

            </div>

          ))}

        </div>

        <div className="rent-total">
          Total Rent: ₹{totalRent}
        </div>

      </div>

    </div>
  );
}

export default Rent;