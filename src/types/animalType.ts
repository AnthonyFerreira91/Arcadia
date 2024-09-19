export type AnimalType = {
    name: string;
    species: SpeciesType,
    sex: "Mâle" | "Femelle",
    habitat: "Savane" | "Jungle" | "Marais",
    weight: number,
    height: number,
    age: number,
    healthStatus: "Mauvais" | "Moyen" | "Bon" | "Excellent",
    happinessLevel: "Malheureux" | "Triste" | "Content" | "Heureux",
    diet: DietType | DietType[],
    foodQuantity: number,
    foodUnit: "g" | "kg",
    feedingFrequency: "Quotidien" | "Bi-hebdomadaire" | "Hebdomadaire",
}

type SpeciesType =
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

type DietType =
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