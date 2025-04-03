CREATE TABLE Categories (
    category_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE Ingredients (
    ingredient_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE Recipes (
    recipe_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    description TEXT,
    is_vegetarian BOOLEAN,
    is_vegan BOOLEAN
);

CREATE TABLE RecipeCategories (
    recipe_id INT NOT NULL REFERENCES Recipes(recipe_id),
    category_id INT NOT NULL REFERENCES Categories(category_id),
    PRIMARY KEY (recipe_id, category_id)
);

CREATE TABLE RecipeIngredients (
    recipe_id INT NOT NULL REFERENCES Recipes(recipe_id),
    ingredient_id INT NOT NULL REFERENCES Ingredients(ingredient_id),
    quantity VARCHAR(100),
    PRIMARY KEY (recipe_id, ingredient_id)
);

CREATE TABLE RecipeSteps (
    step_id SERIAL PRIMARY KEY,
    recipe_id INT NOT NULL REFERENCES Recipes(recipe_id),
    step_order INT NOT NULL,
    description TEXT NOT NULL,
    UNIQUE (recipe_id, step_order)
);