CREATE DATABASE IF NOT EXISTS Recipes_database_week3;
USE Recipes_database_week3;

DROP TABLE IF EXISTS Recipe_CookingStep;
DROP TABLE IF EXISTS Recipe_Category;
DROP TABLE IF EXISTS Recipe_Ingredient;
DROP TABLE IF EXISTS CookingStep;
DROP TABLE IF EXISTS Category;
DROP TABLE IF EXISTS SubCategory;
DROP TABLE IF EXISTS IngredientGroup;
DROP TABLE IF EXISTS Ingredient;
DROP TABLE IF EXISTS Recipe;

CREATE TABLE Recipe (
    RecipeId INT(6) AUTO_INCREMENT PRIMARY KEY,
    RecipeName VARCHAR(255) NOT NULL UNIQUE,
    CookingTime_min INT
);

CREATE TABLE IngredientGroup (
    IngredientGroupId INT(6) AUTO_INCREMENT PRIMARY KEY,
    GroupName VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE Ingredient (
    IngredientId INT(6) AUTO_INCREMENT PRIMARY KEY,
    IngredientName VARCHAR(255) NOT NULL UNIQUE,
    IngredientGroupId INT(6) NOT NULL,
    FOREIGN KEY (IngredientGroupId) REFERENCES IngredientGroup(IngredientGroupId) ON DELETE CASCADE
);

CREATE TABLE Category (
    CategoryId INT(6) AUTO_INCREMENT PRIMARY KEY,
    CategoryName VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE SubCategory (
    SubCategoryId INT(6) AUTO_INCREMENT PRIMARY KEY,
    SubCategoryName VARCHAR(255) NOT NULL UNIQUE,
    CategoryId INT(6) NOT NULL,
    FOREIGN KEY (CategoryId) REFERENCES Category(CategoryId) ON DELETE CASCADE
);

CREATE TABLE CookingStep (
    CookingStepId INT(6) AUTO_INCREMENT PRIMARY KEY,
    CookingStepName VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE Recipe_Ingredient (
    RecipeId INT(6) NOT NULL,
    IngredientId INT(6) NOT NULL,
    NeededAmount VARCHAR(100),
    FOREIGN KEY (RecipeId) REFERENCES Recipe(RecipeId) ON DELETE CASCADE,
    FOREIGN KEY (IngredientId) REFERENCES Ingredient(IngredientId) ON DELETE CASCADE,
    UNIQUE KEY (RecipeId, IngredientId)
);

CREATE TABLE Recipe_Category (
    RecipeId INT(6) NOT NULL,
    CategoryId INT(6) NOT NULL,
    FOREIGN KEY (RecipeId) REFERENCES Recipe(RecipeId) ON DELETE CASCADE,
    FOREIGN KEY (CategoryId) REFERENCES Category(CategoryId) ON DELETE CASCADE,
    UNIQUE KEY (RecipeId, CategoryId)
);

CREATE TABLE Recipe_CookingStep (
    RecipeId INT(6) NOT NULL,
    CookingStepId INT(6) NOT NULL,
    StepOrder INT(6) NOT NULL,
    FOREIGN KEY (RecipeId) REFERENCES Recipe(RecipeId) ON DELETE CASCADE,
    FOREIGN KEY (CookingStepId) REFERENCES CookingStep(CookingStepId) ON DELETE CASCADE,
    UNIQUE KEY (RecipeId, CookingStepId, StepOrder)
);