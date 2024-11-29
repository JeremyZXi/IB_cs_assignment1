// src/App.jsx
import { useState } from 'react';
import UserForm from './components/UserForm';
import ActivityLevel from './components/ActivityLevel';
import FoodSelection from './components/FoodSelection';
import MealPlan from './components/MealPlan';

function App() {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState(null);
  const [activityData, setActivityData] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [foodChoices, setFoodChoices] = useState(null);
  const [mealPlan, setMealPlan] = useState(null);

  const calculateBMR = (data) => {
    const { gender, weight, height, age } = data;
    if (gender === "M") {
      return 13.397 * weight + 4.799 * height - 5.677 * age + 88.362;
    }
    return 9.247 * weight + 3.098 * height - 4.330 * age + 447.593;
  };

  const generatePlans = (bmr, activityFactor) => {
    const calDay = bmr * activityFactor;
    return {
      maintain: calDay,
      mild: calDay - 0.25 * 1000,
      extreme: calDay - 1 * 1000
    };
  };

  return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Meal Planner</h1>

        {step === 1 && (
            <UserForm
                onSubmit={(data) => {
                  setUserData(data);
                  setStep(2);
                }}
            />
        )}

        {step === 2 && (
            <ActivityLevel
                onSubmit={(level) => {
                  setActivityData(level);
                  setStep(3);
                }}
            />
        )}

        {step === 3 && userData && activityData && (
            <div>
              <h2 className="text-xl mb-4">Select Your Plan</h2>
              {(() => {
                const bmr = calculateBMR(userData);
                const plans = generatePlans(bmr, activityData);
                return (
                    <div className="space-y-4">
                      {Object.entries(plans).map(([key, calories]) => (
                          <button
                              key={key}
                              className="block w-full p-4 border rounded"
                              onClick={() => {
                                setSelectedPlan({ type: key, calories, bmr });
                                setStep(4);
                              }}
                          >
                            {key.charAt(0).toUpperCase() + key.slice(1)}: {Math.round(calories)} calories/day
                          </button>
                      ))}
                    </div>
                );
              })()}
            </div>
        )}

        {step === 4 && selectedPlan && (
            <FoodSelection
                onSubmit={(choices) => {
                  setFoodChoices(choices);
                  setStep(5);
                }}
            />
        )}

        {step === 5 && foodChoices && selectedPlan && (
            <MealPlan
                calories={selectedPlan.calories}
                bmr={selectedPlan.bmr}
                choices={foodChoices}
            />
        )}
        <footer className="">Computer Science Class work by <a href="https://github.com/JeremyZXi" className="text-blue-600">JeremyZXi</a> & <a href="https://github.com/Wenxin777777" className="text-blue-600">Wenxin777777</a></footer>
        <footer className="">This product is intended solely for educational purposes in computer science. The results generated do not hold any medical significance.</footer>
        <footer className=""> Source code available on <a href="https://github.com/JeremyZXi/IB_cs_assignment1" className="text-blue-600">Github</a></footer>
      </div>
  );
}

export default App;
