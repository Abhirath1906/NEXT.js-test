import Image from 'next/image';
import Link from 'next/link';

export default function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      
    
      
      {/* Image display */}
      <Image
      style={{marginBottom:"20px"}}
        src={recipe.image || 'https://via.placeholder.com/250'}
        alt={recipe.name}
        width={250}
        height={150}
        layout="responsive"
        
      />
       <Link className='nameFood' href={`/recipes/${recipe.id}`}>{recipe.name}</Link>
      <p>{recipe.mealType?.join(', ')}</p>
      
    </div>
  );
}