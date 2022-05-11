import { useState, useEffect } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [menuList, setMenuList] = useState([]);

  const[isLoading,setIsLoading]=useState(true);

  const[httpError,setHttpError]=useState();

  useEffect(() => {

    const func1 = async () => {
      var response = await fetch(
        "https://react-http-7c8ae-default-rtdb.firebaseio.com/meals.json"
      );
      if(!response.ok){
        throw new Error('Something went')
      }
      var data = await response.json();
      let tempData = [];
      for (const key in data) {
        tempData.push({
          id: key,
          description: data[key].description,
          name: data[key].name,
          price: data[key].price,
        });
      }
      setMenuList(tempData);
      setIsLoading(false);
    };
    
    
    func1().catch(error=>{
      setIsLoading(false);
      setHttpError(error.message);

    })
  
   
    
  }, []);

  if(isLoading){
    return <section className={classes.MealsLoading}>
      <p>
        Loading...
      </p>
    </section>
   
  }

  if(httpError){
    return <section className={classes.MealsError}>
      <p>{httpError}</p>
    </section>
  }

  const mealsList = menuList.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
