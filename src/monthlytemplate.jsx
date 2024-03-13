import React, { useState, useEffect } from "react";
import { MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";
import { GrFormPrevious } from "react-icons/gr";
import "./App.css";
import { useParams } from "react-router-dom";

const MonthlyTemplate = ({}) => {
  const { month } = useParams();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "April",
    "May", 
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  // Find the index of the current month
  const monthIndex = months.indexOf(month);

  // Function to handle next month
  const handleNextMonth = () => {
    const nextIndex = (monthIndex + 1) % months.length;
    const nextMonth = months[nextIndex];
    window.location.href = `/budget/${nextMonth}`;
  };

  // Function to handle previous month
  const handlePreviousMonth = () => {
    const previousIndex = (monthIndex - 1 + months.length) % months.length;
    const previousMonth = months[previousIndex];
    window.location.href = `/budget/${previousMonth}`;
  };
  const [job1, setJob1] = useState(0);
  //Rent
  const [rent1, setRent1] = useState(0);
  const [rent2, setRent2] = useState(0);
  //Furnishing
  const [furn1, setFurn1] = useState(0);
  const [furn2, setFurn2] = useState(0);
  //Savings
  const [savings1, setSavings1] = useState(0);
  const [savings2, setSavings2] = useState(0);
  //Gas
  const [gas1, setGas1] = useState(0);
  const [gas2, setGas2] = useState(0);
  //Commuting
  const [comm1, setComm1] = useState(0);
  const [comm2, setComm2] = useState(0);
  //Food
  const [food1, setFood1] = useState(0);
  const [food2, setFood2] = useState(0);
  //Supplies
  const [supplies1, setSupplies1] = useState(0);
  const [supplies2, setSupplies2] = useState(0);
  //Toilletries
  const [toilletries1, setToilettries1] = useState(0);
  const [toilletries2, setToilettries2] = useState(0);
  //Beauty
  const [beauty1, setBeauty1] = useState(0);
  const [beauty2, setBeauty2] = useState(0);
  //Hobbies
  const [hobbies1, setHobbies1] = useState(0);
  const [hobbies2, setHobbies2] = useState(0);
  //Stream
  const [stream1, setStream1] = useState(0);
  const [stream2, setStream2] = useState(0);
  //Socialization
  const [socio1, setSocio1] = useState(0);
  const [socio2, setSocio2] = useState(0);
  //Misc
  const [misc1, setMisc1] = useState(0);
  const [misc2, setMisc2] = useState(0);
  //Calculations
  //Projected Income
  const [proj, setProj] = useState(0);
  //Actual Expenses
  const [actual, setActual] = useState(0);
  //difference
  const [diff, setDiff] = useState(0);

  useEffect(() => {
    projectedExp();
    actualExp();
    difference();
  }, [
    job1,
    rent1,
    savings1,
    furn1,
    gas1,
    comm1,
    food1,
    supplies1,
    toilletries1,
    beauty1,
    hobbies1,
    stream1,
    socio1,
    misc1,
  ]);

  function actualExp() {
    setActual(
      rent2 +
        savings2 +
        furn2 +
        gas2 +
        comm2 +
        food2 +
        supplies2 +
        toilletries2 +
        beauty2 +
        hobbies2 +
        stream2 +
        socio2 +
        misc2
    );
  }
  function projectedExp() {
    setProj(
      rent1 +
        savings1 +
        furn1 +
        gas1 +
        comm1 +
        food1 +
        supplies1 +
        toilletries1 +
        beauty1 +
        hobbies1 +
        stream1 +
        socio1 +
        misc1
    );
  }
  function difference() {
    setDiff(job1 - actual);
  }
  return (
    <div className="monthlyTemplate">
      <div className="content">
        <div style={{ marginTop: 15, cursor: "pointer" }}>
          <Link to={`/budget/${months[monthIndex - 1]}`}>
            <GrFormPrevious onClick={handlePreviousMonth} />
          </Link>
        </div>
        <h1>{month}</h1>
        <div style={{ marginTop: 15, cursor: "pointer" }}>
          <Link to={`/budget/${months[monthIndex + 1]}`}>
            <MdNavigateNext onClick={handleNextMonth} />
          </Link>
        </div>
      </div>
      <div className="budget">
        <h4>Income</h4>
        <h5>Expected</h5>
        <h5>Actual</h5>
        <form>
          <div className="income-field">
            <label>Job </label>
            <div>
              <input
                type="text"
                required
                value={job1}
                onChange={(e) => {
                  setJob1(+e.target.value);
                }}
                onInput={difference}
              />
            </div>
          </div>
        </form>
        <h4>Household</h4>
        <form>
          <div className="income-field">
            <label>Rent/Mortgage: </label>
            <div>
              <input
                type="text"
                required
                value={rent1}
                onChange={(e) => setRent1(+e.target.value)}
                onInput={projectedExp}
              />
              <input
                type="text"
                required
                value={rent2}
                onChange={(e) => setRent2(+e.target.value)}
                onInput={actualExp}
              />
            </div>
          </div>
        </form>
        <form>
          <div className="income-field">
            <label>Furnishing/Equipment: </label>
            <div>
              <input
                type="text"
                required
                value={furn1}
                onChange={(e) => setFurn1(+e.target.value)}
                onInput={projectedExp}
              />
              <input
                type="text"
                required
                value={furn2}
                onChange={(e) => setFurn2(+e.target.value)}
                onInput={actualExp}
              />
            </div>
          </div>
        </form>
        <h4>Savings</h4>
        <form>
          <div className="income-field">
            <label>Emergency Fund: </label>
            <div>
              <input
                type="text"
                required
                value={savings1}
                onChange={(e) => setSavings1(+e.target.value)}
                onInput={projectedExp}
              />

              <input
                type="text"
                required
                value={savings2}
                onChange={(e) => setSavings2(+e.target.value)}
                onInput={actualExp}
              />
            </div>
          </div>
        </form>
        <h4>Transport</h4>
        <form>
          <div className="income-field">
            <label>Gas: </label>
            <div>
              <input
                type="text"
                required
                value={gas1}
                onChange={(e) => setGas1(+e.target.value)}
                onInput={projectedExp}
              />
              <input
                type="text"
                required
                value={gas2}
                onChange={(e) => setGas2(+e.target.value)}
                onInput={actualExp}
              />
            </div>
          </div>
        </form>
        <form>
          <div className="income-field">
            <label>Commutation: </label>
            <div>
              <input
                type="text"
                required
                value={comm1}
                onChange={(e) => setComm1(+e.target.value)}
                onInput={projectedExp}
              />
              <input
                type="text"
                required
                value={comm2}
                onChange={(e) => setComm2(+e.target.value)}
                onInput={actualExp}
              />
            </div>
          </div>
        </form>
        <h4>Groceries:</h4>
        <form>
          <div className="income-field">
            <label>Food</label>
            <div>
              <input
                type="text"
                required
                value={food1}
                onChange={(e) => setFood1(+e.target.value)}
                onInput={projectedExp}
              />
              <input
                type="text"
                required
                value={food2}
                onChange={(e) => setFood2(+e.target.value)}
                onInput={actualExp}
              />
            </div>
          </div>
        </form>
        <form>
          <div className="income-field">
            <label>Household Supplies: </label>
            <div>
              <input
                type="text"
                required
                value={supplies1}
                onChange={(e) => setSupplies1(+e.target.value)}
                onInput={projectedExp}
              />
              <input
                type="text"
                required
                value={supplies2}
                onChange={(e) => setSupplies2(+e.target.value)}
                onInput={actualExp}
              />
            </div>
          </div>
        </form>
        <form>
          <h4>Personal Care</h4>
          <div className="income-field">
            <label>Toilettries </label>
            <div>
              <input
                type="text"
                required
                value={toilletries1}
                onChange={(e) => setToilettries1(+e.target.value)}
                onInput={projectedExp}
              />
              <input
                type="text"
                required
                value={toilletries2}
                onChange={(e) => setToilettries2(+e.target.value)}
                onInput={actualExp}
              />
            </div>
          </div>
        </form>
        <form>
          <div className="income-field">
            <label>Beauty & Grooming</label>
            <div>
              <input
                type="text"
                required
                value={beauty1}
                onChange={(e) => setBeauty1(+e.target.value)}
                onInput={projectedExp}
              />
              <input
                type="text"
                required
                value={beauty2}
                onChange={(e) => setBeauty2(+e.target.value)}
                onInput={actualExp}
              />
            </div>
          </div>
        </form>
        <form>
          <h4>Entertainment</h4>
          <div className="income-field">
            <label>Hobbies </label>
            <div>
              <input
                type="text"
                required
                value={hobbies1}
                onChange={(e) => setHobbies1(+e.target.value)}
                onInput={projectedExp}
              />
              <input
                type="text"
                required
                value={hobbies2}
                onChange={(e) => setHobbies2(+e.target.value)}
                onInput={actualExp}
              />
            </div>
          </div>
        </form>
        <form>
          <div className="income-field">
            <label>Streaming/Subscriptions </label>
            <div>
              <input
                type="text"
                required
                value={stream1}
                onChange={(e) => setStream1(+e.target.value)}
                onInput={projectedExp}
              />
              <input
                type="text"
                required
                value={stream2}
                onChange={(e) => setStream2(+e.target.value)}
                onInput={actualExp}
              />
            </div>
          </div>
        </form>
        <form>
          <div className="income-field">
            <label>Socialization: </label>
            <div>
              <input
                type="text"
                required
                value={socio1}
                onChange={(e) => setSocio1(+e.target.value)}
                onInput={projectedExp}
              />
              <input
                type="text"
                required
                value={socio2}
                onChange={(e) => setSocio2(+e.target.value)}
                onInput={actualExp}
              />
            </div>
          </div>
        </form>
        <form>
          <h4>Miscelleneous</h4>
          <div className="income-field">
            <label>Uncategorized</label>
            <div>
              <input
                type="text"
                required
                value={misc1}
                onChange={(e) => setMisc1(+e.target.value)}
                onInput={projectedExp}
              />
              <input
                type="text"
                required
                value={misc2}
                onChange={(e) => setMisc2(+e.target.value)}
                onInput={actualExp}
              />
            </div>
          </div>
        </form>
        <table>
          <thead></thead>
          <tbody>
            <tr>
              <td>
                <h5>Projected Balance</h5>
              </td>
              <td>
                <p>{proj}</p>
              </td>
            </tr>
            <tr>
              <td>
                <h5>Actual Balance</h5>
              </td>
              <td>
                <p>{actual}</p>
              </td>
            </tr>
            <tr>
              <td>
                <h5>Difference</h5>
              </td>
              <td>
                <p>{diff}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default MonthlyTemplate;
