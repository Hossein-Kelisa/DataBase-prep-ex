import { createConnection } from 'mysql2/promise';
import { readFile } from 'fs/promises';

const connection = await createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  multipleStatements: true,
});

const sqlDatabase = await readFile('recipes.sql', 'utf-8');

const insertRecipe = `INSERT INTO Recipe (RecipeName, CookingTime_min) VALUES 
    ('Lemon tart', 40),
    ('Cowboy pie', 90)`;

const insertIngredient = `INSERT INTO Ingredient (IngredientName) VALUES
    ('eggs'),
    ('plain flour'),
    ('sugar'),
    ('potato'),
    ('onion')`;

const insertCategory = `INSERT INTO Category (CategoryName) VALUES
    ('Vegan'),
    ('Meat'),
    ('Dessert')`;

const insertCookingStep = `INSERT INTO CookingStep (CookingStepName) VALUES
    ('Prepare all the necessary groceries'),
    ('Bake for 40 minutes'),
    ('Bake for 90 minutes')`;

const insertRecipeIngredient = `INSERT INTO Recipe_Ingredient (RecipeId, IngredientId, NeededAmount) VALUES
    (1, 1, '3'),
    (1, 2, '120 g'),
    (1, 3, '200 g'),
    (2, 1, '4'),
    (2, 4, '4'),
    (2, 5, '1')`;

const insertRecipeCategory = `INSERT INTO Recipe_Category (RecipeId, CategoryId) VALUES
    (1, 1),
    (1, 3),
    (2, 2)`;

const insertRecipeCookingStep = `INSERT INTO Recipe_CookingStep (RecipeId, CookingStepId, StepOrder) VALUES
    (1, 1, 1),
    (1, 3, 2),
    (2, 1, 1),
    (2, 2, 2)`;



const insertRecipeCheesecake = `INSERT INTO Recipe (RecipeName, CookingTime_min) VALUES
    ('No-Bake Cheesecake', 60)
    ON DUPLICATE KEY UPDATE RecipeName=RecipeName`;

const insertCategoryCheesecake = `INSERT INTO Category (CategoryName) VALUES
    ('Cake'),
    ('No-Bake'),
    ('Vegetarian')
    ON DUPLICATE KEY UPDATE CategoryName=CategoryName`;  

const insertIngredientCheesecake = `INSERT INTO Ingredient (IngredientName) VALUES
    ('Condensed milk'), 
    ('Cream Cheese'),
    ('Lemon Juice'),
    ('Pie Crust'),
    ('Cherry Jam')
    ON DUPLICATE KEY UPDATE IngredientName=IngredientName`;  

const insertCookingStepCheesecake = `INSERT INTO CookingStep (CookingStepName) VALUES
    ('Beat Cream Cheese'),
    ('Add Condensed Milk and blend'),
    ('Add Lemon Juice and blend'),
    ('Add the mix to the pie crust'),
    ('Spread the Cherry Jam'),
    ('Place in refrigerator for 3h')
    ON DUPLICATE KEY UPDATE CookingStepName=CookingStepName`;

const insertRecipeIngredientCheesecake = `INSERT INTO Recipe_Ingredient (RecipeId, IngredientId, NeededAmount) VALUES
    ((SELECT RecipeID FROM Recipe WHERE RecipeName = 'No-Bake Cheesecake'), (SELECT IngredientId FROM Ingredient WHERE IngredientName = 'Condensed milk'), '200 ml'),
    ((SELECT RecipeID FROM Recipe WHERE RecipeName = 'No-Bake Cheesecake'), (SELECT IngredientId FROM Ingredient WHERE IngredientName = 'Cream Cheese'), '200 g'),
    ((SELECT RecipeID FROM Recipe WHERE RecipeName = 'No-Bake Cheesecake'), (SELECT IngredientId FROM Ingredient WHERE IngredientName = 'Lemon Juice'), '1 tbsp'),
    ((SELECT RecipeID FROM Recipe WHERE RecipeName = 'No-Bake Cheesecake'), (SELECT IngredientId FROM Ingredient WHERE IngredientName = 'Pie Crust'), '1'),
    ((SELECT RecipeID FROM Recipe WHERE RecipeName = 'No-Bake Cheesecake'), (SELECT IngredientId FROM Ingredient WHERE IngredientName = 'Cherry Jam'), '100 g')`;

const insertRecipeCategoryCheesecake = `INSERT INTO Recipe_Category (RecipeId, CategoryId) VALUES
    ((SELECT RecipeID FROM Recipe WHERE RecipeName = 'No-Bake Cheesecake'), (SELECT CategoryId FROM Category WHERE CategoryName = 'Cake')),
    ((SELECT RecipeID FROM Recipe WHERE RecipeName = 'No-Bake Cheesecake'), (SELECT CategoryId FROM Category WHERE CategoryName = 'No-Bake')),
    ((SELECT RecipeID FROM Recipe WHERE RecipeName = 'No-Bake Cheesecake'), (SELECT CategoryId FROM Category WHERE CategoryName = 'Vegetarian'))`;

const insertRecipeCookingStepCheesecake = `SET @StepOrder := 0;
    INSERT INTO Recipe_CookingStep (RecipeId, CookingStepId, StepOrder) VALUES
    ((SELECT RecipeID FROM Recipe WHERE RecipeName = 'No-Bake Cheesecake'), (SELECT CookingStepId FROM CookingStep WHERE CookingStepName = 'Beat Cream Cheese'), @StepOrder := @StepOrder + 1),
    ((SELECT RecipeID FROM Recipe WHERE RecipeName = 'No-Bake Cheesecake'), (SELECT CookingStepId FROM CookingStep WHERE CookingStepName = 'Add Condensed Milk and blend'), @StepOrder := @StepOrder + 1),
    ((SELECT RecipeID FROM Recipe WHERE RecipeName = 'No-Bake Cheesecake'), (SELECT CookingStepId FROM CookingStep WHERE CookingStepName = 'Add Lemon Juice and blend'), @StepOrder := @StepOrder + 1),
    ((SELECT RecipeID FROM Recipe WHERE RecipeName = 'No-Bake Cheesecake'), (SELECT CookingStepId FROM CookingStep WHERE CookingStepName = 'Add the mix to the pie crust'), @StepOrder := @StepOrder + 1),
    ((SELECT RecipeID FROM Recipe WHERE RecipeName = 'No-Bake Cheesecake'), (SELECT CookingStepId FROM CookingStep WHERE CookingStepName = 'Spread the Cherry Jam'), @StepOrder := @StepOrder + 1),
    ((SELECT RecipeID FROM Recipe WHERE RecipeName = 'No-Bake Cheesecake'), (SELECT CookingStepId FROM CookingStep WHERE CookingStepName = 'Place in refrigerator for 3h'), @StepOrder := @StepOrder + 1)`;

const insertRecipeRoastedBrusselsSprouts = `INSERT INTO Recipe (RecipeName, CookingTime_min) VALUES
    ('Roasted Brussels Sprouts', 45)
    ON DUPLICATE KEY UPDATE RecipeName=RecipeName`;

const insertCategoryRoastedBrusselsSprouts = `INSERT INTO Category (CategoryName) VALUES
    ('Vegan'),
    ('Gluten-Free')
    ON DUPLICATE KEY UPDATE CategoryName=CategoryName`;

const insertIngredientRoastedBrusselsSprouts = `INSERT INTO Ingredient (IngredientName) VALUES
    ('Brussels Sprouts'),
    ('Lemon juice'),
    ('Sesame seeds'),
    ('Pepper'),
    ('Salt'),
    ('Olive oil')
    ON DUPLICATE KEY UPDATE IngredientName=IngredientName`;

const insertCookingStepRoastedBrusselsSprouts = `INSERT INTO CookingStep (CookingStepName) VALUES
    ('Preheat the oven'),
    ('Mix the Ingredient in a bowl'),
    ('Spread the mix on baking sheet'),
    ('Bake for 30 minutes')
    ON DUPLICATE KEY UPDATE CookingStepName=CookingStepName`;

const insertRecipeIngredientRoastedBrusselsSprouts = `INSERT INTO Recipe_Ingredient (RecipeId, IngredientId, NeededAmount) VALUES
    ((SELECT RecipeID FROM Recipe WHERE RecipeName = 'Roasted Brussels Sprouts'), (SELECT IngredientId FROM Ingredient WHERE IngredientName = 'Brussels Sprouts'), '500 g'),
    ((SELECT RecipeID FROM Recipe WHERE RecipeName = 'Roasted Brussels Sprouts'), (SELECT IngredientId FROM Ingredient WHERE IngredientName = 'Lemon juice'), '100 ml'),
    ((SELECT RecipeID FROM Recipe WHERE RecipeName = 'Roasted Brussels Sprouts'), (SELECT IngredientId FROM Ingredient WHERE IngredientName = 'Sesame seeds'), '1 tbsp'),   
    ((SELECT RecipeID FROM Recipe WHERE RecipeName = 'Roasted Brussels Sprouts'), (SELECT IngredientId FROM Ingredient WHERE IngredientName = 'Pepper'), '1 tsp'),
    ((SELECT RecipeID FROM Recipe WHERE RecipeName = 'Roasted Brussels Sprouts'), (SELECT IngredientId FROM Ingredient WHERE IngredientName = 'Salt'), '1 tsp'),
    ((SELECT RecipeID FROM Recipe WHERE RecipeName = 'Roasted Brussels Sprouts'), (SELECT IngredientId FROM Ingredient WHERE IngredientName = 'Olive oil'), '2 tbsp')`;

const insertRecipeCategoryRoastedBrusselsSprouts = `INSERT INTO Recipe_Category (RecipeId, CategoryId) VALUES
    ((SELECT RecipeID FROM Recipe WHERE RecipeName = 'Roasted Brussels Sprouts'), (SELECT CategoryId FROM Category WHERE CategoryName = 'Vegan')),
    ((SELECT RecipeID FROM Recipe WHERE RecipeName = 'Roasted Brussels Sprouts'), (SELECT CategoryId FROM Category WHERE CategoryName = 'Gluten-Free'))`;

const insertRecipeCookingStepRoastedBrusselsSprouts = `SET @StepOrder := 0;
    INSERT INTO Recipe_CookingStep (RecipeId, CookingStepId, StepOrder) VALUES   
    ((SELECT RecipeID FROM Recipe WHERE RecipeName = 'Roasted Brussels Sprouts'), (SELECT CookingStepId FROM CookingStep WHERE CookingStepName = 'Preheat the oven'), @StepOrder := @StepOrder + 1),
    ((SELECT RecipeID FROM Recipe WHERE RecipeName = 'Roasted Brussels Sprouts'), (SELECT CookingStepId FROM CookingStep WHERE CookingStepName = 'Mix the Ingredient in a bowl'), @StepOrder := @StepOrder + 1),
    ((SELECT RecipeID FROM Recipe WHERE RecipeName = 'Roasted Brussels Sprouts'), (SELECT CookingStepId FROM CookingStep WHERE CookingStepName = 'Spread the mix on baking sheet'), @StepOrder := @StepOrder + 1),
    ((SELECT RecipeID FROM Recipe WHERE RecipeName = 'Roasted Brussels Sprouts'), (SELECT CookingStepId FROM CookingStep WHERE CookingStepName = 'Bake for 30 minutes'), @StepOrder := @StepOrder + 1)`;

const insertRecipeMacCheese = `INSERT INTO Recipe (RecipeName, CookingTime_min) VALUES
    ('Mac and Cheese', 30)
    ON DUPLICATE KEY UPDATE RecipeName=RecipeName`;

const insertCategoryMacCheese = `INSERT INTO Category (CategoryName) VALUES
    ('Vegetarian')
    ON DUPLICATE KEY UPDATE CategoryName=CategoryName`;

const insertIngredientMacCheese = `INSERT INTO Ingredient (IngredientName) VALUES
    ('Macaroni'),
    ('Butter'),
    ('Flour'),
    ('Salt'),
    ('Pepper'),
    ('Milk'),
    ('Shredded Cheddar cheese')
    ON DUPLICATE KEY UPDATE IngredientName=IngredientName`;

const insertCookingStepMacCheese = `INSERT INTO CookingStep (CookingStepName) VALUES
    ('Cook Macaroni for 8 minutes'),
    ('Melt butter in a saucepan'),
    ('Add flour, salt, pepper and mix'), 
    ('Add Milk and mix'),
    ('Cook until mix is smooth'),
    ('Add cheddar cheese'),
    ('Add the macaroni')
    ON DUPLICATE KEY UPDATE CookingStepName=CookingStepName`;

const insertRecipeIngredientMacCheese = `INSERT INTO Recipe_Ingredient (RecipeId, IngredientId, NeededAmount) VALUES
    ((SELECT RecipeID FROM Recipe WHERE RecipeName = 'Mac and Cheese'), (SELECT IngredientId FROM Ingredient WHERE IngredientName = 'Macaroni'), '200 g'),
    ((SELECT RecipeID FROM Recipe WHERE RecipeName = 'Mac and Cheese'), (SELECT IngredientId FROM Ingredient WHERE IngredientName = 'Butter'), '50 g'),
    ((SELECT RecipeID FROM Recipe WHERE RecipeName = 'Mac and Cheese'), (SELECT IngredientId FROM Ingredient WHERE IngredientName = 'Flour'), '50 g'),
    ((SELECT RecipeID FROM Recipe WHERE RecipeName = 'Mac and Cheese'), (SELECT IngredientId FROM Ingredient WHERE IngredientName = 'Salt'), '1 tsp'),
    ((SELECT RecipeID FROM Recipe WHERE RecipeName = 'Mac and Cheese'), (SELECT IngredientId FROM Ingredient WHERE IngredientName = 'Pepper'), '1 tsp'),
    ((SELECT RecipeID FROM Recipe WHERE RecipeName = 'Mac and Cheese'), (SELECT IngredientId FROM Ingredient WHERE IngredientName = 'Milk'), '500 ml'),
    ((SELECT RecipeID FROM Recipe WHERE RecipeName = 'Mac and Cheese'), (SELECT IngredientId FROM Ingredient WHERE IngredientName = 'Shredded Cheddar cheese'), '200 g')`;

const insertRecipeCategoryMacCheese = `INSERT INTO Recipe_Category (RecipeId, CategoryId) VALUES
    ((SELECT RecipeID FROM Recipe WHERE RecipeName = 'Mac and Cheese'), (SELECT CategoryId FROM Category WHERE CategoryName = 'Vegetarian'))`;

const insertRecipeCookingStepMacCheese = `SET @StepOrder := 0;
    INSERT INTO Recipe_CookingStep (RecipeId, CookingStepId, StepOrder) VALUES
    ((SELECT RecipeID FROM Recipe WHERE RecipeName = 'Mac and Cheese'), (SELECT CookingStepId FROM CookingStep WHERE CookingStepName = 'Cook Macaroni for 8 minutes'), @StepOrder := @StepOrder + 1),
    ((SELECT RecipeID FROM Recipe WHERE RecipeName = 'Mac and Cheese'), (SELECT CookingStepId FROM CookingStep WHERE CookingStepName = 'Melt butter in a saucepan'), @StepOrder := @StepOrder + 1),
    ((SELECT RecipeID FROM Recipe WHERE RecipeName = 'Mac and Cheese'), (SELECT CookingStepId FROM CookingStep WHERE CookingStepName = 'Add flour, salt, pepper and mix'), @StepOrder := @StepOrder + 1),
    ((SELECT RecipeID FROM Recipe WHERE RecipeName = 'Mac and Cheese'), (SELECT CookingStepId FROM CookingStep WHERE CookingStepName = 'Add Milk and mix'), @StepOrder := @StepOrder + 1),
    ((SELECT RecipeID FROM Recipe WHERE RecipeName = 'Mac and Cheese'), (SELECT CookingStepId FROM CookingStep WHERE CookingStepName = 'Cook until mix is smooth'), @StepOrder := @StepOrder + 1),
    ((SELECT RecipeID FROM Recipe WHERE RecipeName = 'Mac and Cheese'), (SELECT CookingStepId FROM CookingStep WHERE CookingStepName = 'Add cheddar cheese'), @StepOrder := @StepOrder + 1),
    ((SELECT RecipeID FROM Recipe WHERE RecipeName = 'Mac and Cheese'), (SELECT CookingStepId FROM CookingStep WHERE CookingStepName = 'Add the macaroni'), @StepOrder := @StepOrder + 1)`;
    
const insertRecipeTamagoyakiJapaneseOmelette = `INSERT INTO Recipe (RecipeName, CookingTime_min) VALUES
    ('Tamagoyaki Japanese Omelette', 20)
    ON DUPLICATE KEY UPDATE RecipeName=RecipeName`;

const insertCategoryTamagoyakiJapaneseOmelette = `INSERT INTO Category (CategoryName) VALUES
    ('Vegetarian'),
    ('Japanese')
    ON DUPLICATE KEY UPDATE CategoryName=CategoryName`;

const insertIngredientTamagoyakiJapaneseOmelette = `INSERT INTO Ingredient (IngredientName) VALUES
    ('Eggs'),
    ('Soy sauce'),
    ('Sugar'),
    ('Salt'),
    ('Olive Oil')
    ON DUPLICATE KEY UPDATE IngredientName=IngredientName`;

const insertCookingStepTamagoyakiJapaneseOmelette = `INSERT INTO CookingStep (CookingStepName) VALUES  
    ('Beat the eggs'),
    ('Add soya sauce, sugar and salt'),
    ('Add oil to a sauce pan'), 
    ('Bring to medium heat'),
    ('Add some mix to the sauce pan'),
    ('Let is cook for 1'),
    ('Add oil to a sauce pan'),
    ('Add some mix to the sauce pan'),
    ('Let is cook for 1'),
    ('Remove pan from fire')
    ON DUPLICATE KEY UPDATE CookingStepName=CookingStepName`;

const insertRecipeIngredientTamagoyakiJapaneseOmelette = `INSERT INTO Recipe_Ingredient (RecipeId, IngredientId, NeededAmount) VALUES    
    ((SELECT RecipeID FROM Recipe WHERE RecipeName = 'Tamagoyaki Japanese Omelette'), (SELECT IngredientId FROM Ingredient WHERE IngredientName = 'Eggs'), '4'),
    ((SELECT RecipeID FROM Recipe WHERE RecipeName = 'Tamagoyaki Japanese Omelette'), (SELECT IngredientId FROM Ingredient WHERE IngredientName = 'Soy sauce'), '1 tbsp'),
    ((SELECT RecipeID FROM Recipe WHERE RecipeName = 'Tamagoyaki Japanese Omelette'), (SELECT IngredientId FROM Ingredient WHERE IngredientName = 'Sugar'), '1 tsp'),
    ((SELECT RecipeID FROM Recipe WHERE RecipeName = 'Tamagoyaki Japanese Omelette'), (SELECT IngredientId FROM Ingredient WHERE IngredientName = 'Salt'), '1 tsp'),
    ((SELECT RecipeID FROM Recipe WHERE RecipeName = 'Tamagoyaki Japanese Omelette'), (SELECT IngredientId FROM Ingredient WHERE IngredientName = 'Olive Oil'), '1 tbsp')`;

const insertRecipeCategoryTamagoyakiJapaneseOmelette = `INSERT INTO Recipe_Category (RecipeId, CategoryId) VALUES
    ((SELECT RecipeID FROM Recipe WHERE RecipeName = 'Tamagoyaki Japanese Omelette'), (SELECT CategoryId FROM Category WHERE CategoryName = 'Vegetarian')),
    ((SELECT RecipeID FROM Recipe WHERE RecipeName = 'Tamagoyaki Japanese Omelette'), (SELECT CategoryId FROM Category WHERE CategoryName = 'Japanese'))`;
    
const insertRecipeCookingStepTamagoyakiJapaneseOmelette = `SET @StepOrder := 0;
    INSERT INTO Recipe_CookingStep (RecipeId, CookingStepId, StepOrder) VALUES
    ((SELECT RecipeID FROM Recipe WHERE RecipeName = 'Tamagoyaki Japanese Omelette'), (SELECT CookingStepId FROM CookingStep WHERE CookingStepName = 'Beat the eggs'), @StepOrder := @StepOrder + 1),
    ((SELECT RecipeID FROM Recipe WHERE RecipeName = 'Tamagoyaki Japanese Omelette'), (SELECT CookingStepId FROM CookingStep WHERE CookingStepName = 'Add soya sauce, sugar and salt'), @StepOrder := @StepOrder + 1),
    ((SELECT RecipeID FROM Recipe WHERE RecipeName = 'Tamagoyaki Japanese Omelette'), (SELECT CookingStepId FROM CookingStep WHERE CookingStepName = 'Add oil to a sauce pan'), @StepOrder := @StepOrder + 1),
    ((SELECT RecipeID FROM Recipe WHERE RecipeName = 'Tamagoyaki Japanese Omelette'), (SELECT CookingStepId FROM CookingStep WHERE CookingStepName = 'Bring to medium heat'), @StepOrder := @StepOrder + 1),
    ((SELECT RecipeID FROM Recipe WHERE RecipeName = 'Tamagoyaki Japanese Omelette'), (SELECT CookingStepId FROM CookingStep WHERE CookingStepName = 'Add some mix to the sauce pan'), @StepOrder := @StepOrder + 1),
    ((SELECT RecipeID FROM Recipe WHERE RecipeName = 'Tamagoyaki Japanese Omelette'), (SELECT CookingStepId FROM CookingStep WHERE CookingStepName = 'Let is cook for 1'), @StepOrder := @StepOrder + 1),
    ((SELECT RecipeID FROM Recipe WHERE RecipeName = 'Tamagoyaki Japanese Omelette'), (SELECT CookingStepId FROM CookingStep WHERE CookingStepName = 'Add oil to a sauce pan'), @StepOrder := @StepOrder + 1),
    ((SELECT RecipeID FROM Recipe WHERE RecipeName = 'Tamagoyaki Japanese Omelette'), (SELECT CookingStepId FROM CookingStep WHERE CookingStepName = 'Add some mix to the sauce pan'), @StepOrder := @StepOrder + 1),
    ((SELECT RecipeID FROM Recipe WHERE RecipeName = 'Tamagoyaki Japanese Omelette'), (SELECT CookingStepId FROM CookingStep WHERE CookingStepName = 'Let is cook for 1'), @StepOrder := @StepOrder + 1),
    ((SELECT RecipeID FROM Recipe WHERE RecipeName = 'Tamagoyaki Japanese Omelette'), (SELECT CookingStepId FROM CookingStep WHERE CookingStepName = 'Remove pan from fire'), @StepOrder := @StepOrder + 1)`;



const findRecipeVegetarianWithMacaroni = `SELECT Recipe.RecipeName FROM Recipe
JOIN Recipe_Category ON Recipe.RecipeId = Recipe_Category.RecipeId
JOIN Category ON Recipe_Category.CategoryId = Category.CategoryId
WHERE Category.CategoryName = 'Vegetarian'
  AND Recipe.RecipeId IN (
      SELECT Recipe.RecipeId FROM Recipe
      JOIN Recipe_Ingredient ON Recipe.RecipeId = Recipe_Ingredient.RecipeId
      JOIN Ingredient ON Recipe_Ingredient.IngredientId = Ingredient.IngredientId
      WHERE Ingredient.IngredientName = 'Macaroni'
  )`;

const findRecipeCakeNoBake = `SELECT Recipe.RecipeName FROM Recipe
JOIN Recipe_Category ON Recipe.RecipeId = Recipe_Category.RecipeId
JOIN Category ON Recipe_Category.CategoryId = Category.CategoryId
WHERE Category.CategoryName = 'Cake'
  AND Recipe.RecipeId IN (      
    SELECT Recipe.RecipeId FROM Recipe
    JOIN Recipe_Category ON Recipe.RecipeId = Recipe_Category.RecipeId
    JOIN Category ON Recipe_Category.CategoryId = Category.CategoryId
    WHERE Category.CategoryName = 'No-Bake')`;

const findRecipeJapaneseAndVegetarian = `SELECT Recipe.RecipeName FROM Recipe
JOIN Recipe_Category ON Recipe.RecipeId = Recipe_Category.RecipeId
JOIN Category ON Recipe_Category.CategoryId = Category.CategoryId
WHERE Category.CategoryName IN ('Japanese', 'Vegetarian')
    GROUP BY Recipe.RecipeName
    HAVING COUNT(DISTINCT Category.CategoryName) = 2`;


try {
  await connection.query(sqlDatabase);
  await connection.query(insertRecipe);
  await connection.query(insertIngredient);
  await connection.query(insertCategory);
  await connection.query(insertCookingStep);
  await connection.query(insertRecipeIngredient);
  await connection.query(insertRecipeCategory);
  await connection.query(insertRecipeCookingStep);
} catch (err) {
    console.error('Connection error main Recipes', err)
} 

try {
  await connection.query(insertRecipeCheesecake);
  await connection.query(insertCategoryCheesecake);
  await connection.query(insertIngredientCheesecake);
  await connection.query(insertCookingStepCheesecake);
  await connection.query(insertRecipeIngredientCheesecake);
  await connection.query(insertRecipeCategoryCheesecake);
  await connection.query(insertRecipeCookingStepCheesecake);
} catch (err) {
    console.error('Connection error Cheesecake', err)
}

try {
    await connection.query(insertRecipeRoastedBrusselsSprouts);
    await connection.query(insertCategoryRoastedBrusselsSprouts);
    await connection.query(insertIngredientRoastedBrusselsSprouts);
    await connection.query(insertCookingStepRoastedBrusselsSprouts);
    await connection.query(insertRecipeIngredientRoastedBrusselsSprouts);
    await connection.query(insertRecipeCategoryRoastedBrusselsSprouts);
    await connection.query(insertRecipeCookingStepRoastedBrusselsSprouts);
} catch (err) {
    console.error('Connection error Roasted Brussels Sprouts', err)
}

try {
    await connection.query(insertRecipeMacCheese);
    await connection.query(insertCategoryMacCheese);
    await connection.query(insertIngredientMacCheese);
    await connection.query(insertCookingStepMacCheese);
    await connection.query(insertRecipeIngredientMacCheese);
    await connection.query(insertRecipeCategoryMacCheese);
    await connection.query(insertRecipeCookingStepMacCheese);
}
catch (err) {
    console.error('Connection error Mac and Cheese', err)
}

try {
    await connection.query(insertRecipeTamagoyakiJapaneseOmelette);
    await connection.query(insertCategoryTamagoyakiJapaneseOmelette);
    await connection.query(insertIngredientTamagoyakiJapaneseOmelette);
    await connection.query(insertCookingStepTamagoyakiJapaneseOmelette);
    await connection.query(insertRecipeIngredientTamagoyakiJapaneseOmelette);
    await connection.query(insertRecipeCategoryTamagoyakiJapaneseOmelette);
    await connection.query(insertRecipeCookingStepTamagoyakiJapaneseOmelette);
}
catch (err) {
    console.error('Connection error Tamagoyaki Japanese Omelette', err)
}

try {
const [resultFindRecipeVegetarianWithMacaroni] = 
    await connection.query(findRecipeVegetarianWithMacaroni);
console.log('findRecipeVegetarianWithMacaroni', resultFindRecipeVegetarianWithMacaroni);
const [resultFindRecipeCakeNoBake] = 
    await connection.query(findRecipeCakeNoBake);
console.log('resultFindRecipeCakeNoBake', resultFindRecipeCakeNoBake);
const [resultFindRecipeJapaneseAndVegetarian] = 
    await connection.query(findRecipeJapaneseAndVegetarian);
console.log('resultFindRecipeJapaneseAndVegetarian', resultFindRecipeJapaneseAndVegetarian);
} catch (err) {
    console.error('Connection error Find Query', err)
}

finally {
    connection.end();
};