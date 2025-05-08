import Image from 'next/image';
import Link from 'next/link';

export default function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      
    
      
      
      <Image
      style={{marginBottom:"20px"}}
        src={recipe.image || 'https://via.placeholder.com/250'}
        alt={recipe.name}
        width={368}
        height={350}
        // layout="responsive"
        
      />
       <Link className='nameFood' href={`/recipes/${recipe.id}`}>{recipe.name}</Link>
      <p>{recipe.mealType?.join(', ')}</p>
      
    </div>
  );
}