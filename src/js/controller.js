import * as model from './model.js';
import recipeView from './views/recipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

//PREPARING FOR MVC

///////////////////////////////////////

const controleRecipes = async function () {
  try {
    // const id = window.location.hash.slice(1);
    const id = `5ed6604591c37cdc054bc886`;

    if (!id) return;

    recipeView.renderSpinner();

    await model.loadRecipe(id);

    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};

const init = function () {
  recipeView.addHandlerRender(controleRecipes);
};
init();
