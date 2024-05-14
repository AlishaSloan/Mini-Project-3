import React, {useState, useEffect} from "react";
import '../css/Meals.css'

// Lookup a single random meal API
const url = 'https://www.themealdb.com/api/json/v1/1/random.php'

const Meal = () => {
    const [food, setFood] = useState([])

    const fetchFood = async () => {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data.meals);
        setFood(data.meals)
    }

    useEffect(() => {
        fetchFood()

    }, [])

    return (
        <>
   <button onClick={() => fetchFood()} className='btn'>Surprise Me!</button>

    <div className="meals">
        {food.map((f) => {
            const {idMeal, strMeal, strInstructions, strMealThumb} = f

            return (
                <article key={idMeal}>
                    <div>
                        <h3>{strMeal}</h3>
                        <img src={strMealThumb} alt={strMeal} />
                    </div>
                    <div>
                        <p>{strInstructions}</p>
                    </div>
                </article>
            )
        })}

    </div>
        </>
    )
}

export default Meal