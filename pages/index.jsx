

import { useState } from 'react';
import RecipeCard from '../components/RecipeCard';


export async function getStaticProps() {
  const res = await fetch('https://dummyjson.com/recipes');
  const data = await res.json();

  return {
    props: {
      recipes: data.recipes.slice(0, 9), // Featured 6
    },
    revalidate: 30, // ISR
  };
}

export default function Home({ recipes }) {
  const [search, setSearch] = useState('');

  const filtered = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>

      <div className="recipe-div" >
        <p className="name">Abhirath recipes</p>

        <a href="https://dealls.com/pengembangan-karir/aplikasi-investasi-saham-terbaik" className='login'>Login</a>
      </div>

      <h1 style={{display:"flex",justifyContent:'center',}}>All favorite{"   "}<span style={{color:"tomato"}}> 
           Recipes,</span>
       </h1>

       <h1 style={{color:"tomato",marginLeft:"535px"}}>in one place</h1>
      <input
      style={{marginLeft:"20px"}}
        type="text"
        placeholder="Search recipes......."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="recipe-grid">
        {filtered.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}