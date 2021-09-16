# 90/10 table

## Description
The goal is to create an API that will store for a user the info if this person ate the food that it should on the diet or not. 

## Tech
It is a REST API with the routes:
- POST /meals -> insert a meal information
- GET /meals -> list of meals
- GET /meals/{meal_id} -> get the info of a specific meal
- GET /meals/week/percentage -> get the percentage of meals made properly up to now
- GET /meals/week/miss_count -> get the number of meals that can still be made out of diet

While inserting the meal it will query the info from lifesum and store it on the database so we have nutritional info of the food you have been eating, this info will be taken in account for a very non precise info for the amount of calories you eat on a day.