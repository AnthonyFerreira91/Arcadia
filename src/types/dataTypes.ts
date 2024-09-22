export type TypeUser = {
    email: string;
    password: string;
    role: "Employer" | "Vétérinaire" | "Administrateur";
    name: string;
}

export type TypeAnimal = {
    name: string;
    species: TypeSpecies,
    sex: "Mâle" | "Femelle",
    habitat: "Savane" | "Jungle" | "Marais",
    weight: number,
    height: number,
    age: number,
    healthStatus: "Mauvais" | "Moyen" | "Bon" | "Excellent",
    happinessLevel: "Malheureux" | "Triste" | "Content" | "Heureux",
    diet: TypeDiet | TypeDiet[],
    foodQuantity: number,
    foodUnit: "g" | "kg",
    feedingFrequency: "Quotidien" | "Bi-hebdomadaire" | "Hebdomadaire",
    avatar: string;
}

type TypeSpecies =
    | "Lion"
    | "Éléphant"
    | "Zèbre"
    | "Girafe"
    | "Gorille"
    | "Panthère noire"
    | "Perroquet"
    | "Anaconda"
    | "Crocodile"
    | "Hippopotame"
    | "Flamant rose"
    | "Tigre du bengale"
    | "Autre"
;

type TypeDiet =
    | "Viande" 
    | "Herbe" 
    | "Fruits" 
    | "Feuilles" 
    | "Légumes" 
    | "Graines" 
    | "Rongeurs" 
    | "Poisson" 
    | "Algues" 
    | "Crustacés"
;