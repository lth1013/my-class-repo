import  { useState } from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Button from "./components/Button";
import API from "./utils/API";
import { RecipeList, RecipeListItem } from "./components/RecipeList";
import { Container, Row, Col } from "./components/Grid";

function App() {

  const [recipes, setRecipes] = useState([]);
  const [recipeSearch, setRecipeSearch] = useState("");

  const handleInputChange = event => {
    console.log(event.target.value);
    setRecipeSearch(event.target.value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    API.getRecipes(recipeSearch)
      .then(res => setRecipes(res.data))
      .catch(err => console.log(err));
  };

  return (
    <div>

      <Nav />
      <Jumbotron />
      <Container>
        <Row>
          <Col size="md-12">
            <form>
              <Container>
                <Row>
                  <Col size="xs-9 sm-10">
                    <Input
                      name="RecipeSearch"
                      value={recipeSearch}
                      handleInputChange={handleInputChange}
                      placeholder="Search For a Recipe"
                    />
                  </Col>
                  <Col size="xs-3 sm-2">
                    <Button
                      handleFormSubmit={handleFormSubmit}
                      type="success"
                      className="input-lg"
                    >
                        Search
                    </Button>
                  </Col>
                </Row>
              </Container>
            </form>
          </Col>
        </Row>
        <Row>
          <Col size="xs-12">
            {!recipes.length ? (
              <h1 className="text-center">No Recipes to Display</h1>
            ) : (
              <RecipeList>
                {recipes.map(recipe => {
                  return (
                    <RecipeListItem
                      key={recipe.title}
                      title={recipe.title}
                      href={recipe.href}
                      ingredients={recipe.ingredients}
                      thumbnail={recipe.thumbnail}
                    />
                  );
                })}
              </RecipeList>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

