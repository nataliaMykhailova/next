import React from 'react';
import {getMeals} from "@/services/db/db";
import MealsFormComponent from "@/components/MealsFormComponent/MealsFormComponent";

const MealsPage = async () => {
    let meals = await getMeals();
    return (
        <div>
            <MealsFormComponent/>
            {
                meals.map((meal:IMeal) =>(<div key={meal.id}>{meal.id}{meal.title}</div>) )
            }
            
        </div>
    );
};

export default MealsPage;