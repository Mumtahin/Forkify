import axios from 'axios';

async function getResults(query) {
    const key = 'fb5fd7827e0db097f01e0d2fa92874b1';
    try {
        const res = await axios(`http://food2fork.com/api/search?key=${key}&q=${query}`);
        const recipes = res.data.recipes;
        console.log(recipes);
    } catch (error) {
        alert(error);
    }
    
}
getResults('tomato pasta');