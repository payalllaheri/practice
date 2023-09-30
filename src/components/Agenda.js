import React, { useState } from "react";
import "./Agenda.css";

const Agenda = () => {
  const agenda = [
    {
      time: `09:30 AM - 09:45 AM`,
      desc: `Holla! Welcome 🙏🏻`,
    },
    {
      time: `09:45 AM - 10:00 AM`,
      desc: `Intro to Hacktoberfest and GIT 🔥`,
    },
    {
      time: `10:00 AM - 10:30 AM`,
      desc: `automation testing with Cypress - Workshop 🛠`,
    },
    {
      time: `10:00 AM - 10:30 AM`,
      desc: `automation testing with Cypress - Workshop 🛠`,
      details: "dwejfhieuf",
    },
    {
      time: `10:30 AM - 01:30 PM`,
      desc: `Hands on 1st PR 👆🏻`,
    },
    {
      time: `01:30 PM - 02:30 PM`,
      desc: `Feeling hungry? Take a Break 🍛`,
      type: `break`,
    },
    {
      time: `02:30 PM - 03:00 PM`,
      desc: `Talk #1`,
      details: "abhdkfjrekfnjnfbj",
    },
    {
      time: `03:00 PM - 04:00 PM`,
      desc: `Code break 🤔`,
      type: `fun`,
    },
    {
      time: `04:00 PM - 04:30 PM`,
      desc: `Time to par-tea! ☕`,
      type: `break`,
    },
    {
      time: `04:30 PM - 06:30 PM`,
      desc: `Playing is our brain's favourite way of learning! 🎮`,
      type: `fun`,
    },
  ];

  const initialShowDetails = [];
  for (let i = 0; i < agenda.length; i++) {
    initialShowDetails.push(false);
  }

  const [showDetails, setShowDetails] = useState(initialShowDetails);

  const [detailsContent, setDetailsContent] = useState("");

  const toggleDetails = (index) => {
    const updatedDetails = [...showDetails];
    updatedDetails[index] = !updatedDetails[index];
    setShowDetails(updatedDetails);

    if (updatedDetails[index]) {
      // Show details for the clicked row
      setDetailsContent(agenda[index].details);
    } else {
      // Hide details when the minus button is clicked
      setDetailsContent("");
    }
  };

  return (
    <div>
      <table className="break-words">
        <tbody>
          {agenda.map((item, index) => (
            <tr key={index} className="dashed-border">
              <td className="py-4">{item.time}</td>
              <td className="py-4">
                {item.desc}
                {showDetails[index] && (
                  <div className="details">{detailsContent}</div>
                )}
              </td>
              <td>
                {index === 3 || index === 6 ? (
                  <button onClick={() => toggleDetails(index)}>
                    {showDetails[index] ? "-" : "+"}
                  </button>
                ) : (
                  <button disabled={true}> </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Agenda;
