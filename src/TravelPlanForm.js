
// components/TravelPlanForm.js 
import React, { useState} from 'react';



function TravelPlanForm() {
  const [travelPlan, setTravelPlan] = useState('');
  const [travelPlans, setTravelPlans] = useState([]);
  
  // Use travelInputResponse and setTravelInputResponse to access and update the response


  const addTravelPlan = (newPlan) => {
    // Add the new travel plan to the list of plans
    setTravelPlans([...travelPlans, newPlan]);
  };

  const handleAddPlan = () => {
    // Simulate adding a travel plan and notify the user
    addTravelPlan(travelPlan);
    setTravelPlan('');
  };
  const handleClearList = () => {
    setTravelPlans([]);
  }

  const handlePrint = () => {
    window.print(); // This will trigger the browser's print dialog
  };

  return (
    <div className="travel-plan-form">
      <button onClick={handlePrint}>Print Page</button>
      <h2>Add Travel Plan</h2>
      <textarea
        type="text"
        placeholder="Enter a detailed travel plan..."
        value={travelPlan}
        onChange={(e) => setTravelPlan(e.target.value)}
      />
      <button onClick={handleAddPlan}>Add</button>
      
     <h2>Your Travel Plans</h2>
      <button onClick={handleClearList}>Clear List</button>
      <ul>
        {travelPlans.map((plan, index) => (
          <li key={index}>{plan}</li>
        ))}
      </ul>
    </div>
  );
}

export default TravelPlanForm;


