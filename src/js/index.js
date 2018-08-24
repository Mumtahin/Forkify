import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements } from './views/base';

/* global state of the app
    - search object
    - current recipe object
    - shopping list object
    - liked recipes
*/
const state = {}

const controlSearch = async () => {
    // 1) get query from view
    const query = searchView.getInput();
    console.log("query: ", query);

    if (query) {
        // 2) create new search object, add to state
        state.search = new Search(query);

        // 3) prepare UI for results
        searchView.clearInput();
        searchView.clearResults();

        // 4) search for recipes
        await state.search.getResults();

        // 5) render results on UI
        console.log(state.search.result);
        searchView.renderResults(state.search.result);
    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});