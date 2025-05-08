import Image from 'next/image';

export async function getServerSideProps({ params }) {
    const res = await fetch(`https://dummyjson.com/recipes/${params.id}`);

    if (!res.ok) {
        return {
            notFound: true,
        };
    }

    const recipe = await res.json();

    return {
        props: { recipe },
    };
}

export default function RecipeDetail({ recipe }) {
    return (
        <div>

            <div className="recipe-divID" >
                <p className="nameID">Abhirath recipes</p>

                <a href="https://dealls.com/pengembangan-karir/aplikasi-investasi-saham-terbaik" className='login'>Login</a>
            </div>

            <div style={{ marginLeft: "100px", borderBottom: "1px solid black", }}>

                <div style={{borderBottom:"1px solid black",padding:"30px",marginRight:"70px"}}>

                    <h1 style={{ color: "rgba(80, 172, 143, 0.591)" }}>{recipe.name}</h1>



                    <div style={{ display: "flex", gap: "15px", }}>
                        <p><strong>Difficulty:</strong> <span style={{ color: "red" }}>{recipe.difficulty} </span></p>
                        <p><strong>Prep Time:</strong>  <span style={{ color: "red" }}>{recipe.prepTimeMinutes} mins</span></p>
                        <p><strong>Cook Time:</strong>  <span style={{ color: "red" }}>{recipe.cookTimeMinutes} mins</span></p>
                    </div>
                    <div style={{ display: "flex" }}>

                        <Image
                            src={recipe.image || 'https://via.placeholder.com/500'}
                            alt={recipe.name}
                            width={400}
                            height={400}
                        // layout="responsive"

                        />



                        <div>
                            <h3 style={{ marginLeft: "28px" }}>Ingredients:</h3>

                            <ul>
                                {recipe.ingredients.map((i, idx) => <li key={idx}>{i}</li>)}
                            </ul>
                        </div>
                    </div>

                </div>


                <h3 style={{ marginLeft: "28px" }}>instructions:</h3>


                <ol>

                    {recipe.instructions.map((step, idx) => <li style={{ height: "50px" }} key={idx}>{step}</li>)}
                </ol>


            </div>
        </div>
    );
}