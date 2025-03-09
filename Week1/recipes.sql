CREATE DATABASE IF NOT EXISTS recipes_db;
USE recipes_db;

CREATE TABLE Recipes (
    RecipeID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(200) NOT NULL UNIQUE
);

CREATE TABLE Categories (
    CategoryID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(200) NOT NULL UNIQUE
);

CREATE TABLE Recipe_Categories (
    RecipeID INT,
    CategoryID INT,
    PRIMARY KEY (RecipeID, CategoryID),
    FOREIGN KEY (RecipeID) REFERENCES Recipes(RecipeID) ON DELETE CASCADE,
    FOREIGN KEY (CategoryID) REFERENCES Categories(CategoryID) ON DELETE CASCADE
);

CREATE TABLE Ingredients (
    IngredientID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(200) NOT NULL UNIQUE
);

CREATE TABLE Recipe_Ingredients (
    RecipeID INT,
    IngredientID INT,
    Quantity VARCHAR(100),
    PRIMARY KEY (RecipeID, IngredientID),
    FOREIGN KEY (RecipeID) REFERENCES Recipes(RecipeID) ON DELETE CASCADE,
    FOREIGN KEY (IngredientID) REFERENCES Ingredients(IngredientID) ON DELETE CASCADE
);

CREATE TABLE Steps (
    StepID INT AUTO_INCREMENT PRIMARY KEY,
    Description TEXT NOT NULL
);

CREATE TABLE Recipe_Steps (
    RecipeID INT,
    StepID INT,
    StepOrder INT NOT NULL,
    PRIMARY KEY (RecipeID, StepID),
    FOREIGN KEY (RecipeID) REFERENCES Recipes(RecipeID) ON DELETE CASCADE,
    FOREIGN KEY (StepID) REFERENCES Steps(StepID) ON DELETE CASCADE
);

