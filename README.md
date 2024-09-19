# ARCADIA

**Installation :**

    pnpm install

**Lancement :**

    pnpm run dev

**Amélioration du README.MD :**

    voir https://www.youtube.com/watch?v=zw_Z0CuYOV8

## **I - Choix des technologies**

- React
- Typescript
- CSS : Styled Component

## **II - Choix des couleurs**

**Voici une explication détaillée de cette palette de couleurs :**

Vert foncé (#2E8B57) : Cette couleur évoque la nature profonde et les forêts. Elle représente la stabilité et l'engagement durable du zoo envers l'environnement.
Vert moyen (#3CB371) : Un vert plus vif qui symbolise la croissance, la vitalité et l'équilibre écologique. Il apporte de la fraîcheur à la palette.
Vert clair (#8FBC8F) : Cette teinte plus douce évoque la tranquillité et l'harmonie avec la nature. Elle peut être utilisée pour les fonds ou les éléments secondaires.
Ocre clair (#F4A460) : Cette couleur chaude rappelle la terre et le sable, ajoutant une touche naturelle et organique à la palette.
Brun (#D2691E) : Cette couleur évoque le bois et la terre, renforçant l'aspect naturel et écologique du thème.

**Pour l'utilisation de ces couleurs dans l'application :**

Utilisez le vert foncé pour l'en-tête et les éléments importants.
Le vert moyen peut être utilisé pour les boutons d'action et les liens.
Le vert clair convient bien aux arrière-plans de sections ou aux éléments secondaires.
L'ocre et le brun peuvent être utilisés pour mettre en valeur certains éléments ou créer des accents.

## **III - Choix des animaux**

    - Choisir 3 espèces par lieu d'habitation (Savane, Jungle, Marais)
    - Générer données pour les animaux avec ChatGPT.
        > En Typescript dans un premier temps.
        > Puis en SQL plus tard.

## **VI - Création de l'application**

    - Choisir 1 police pour les titres et 1 pour le reste.

### **US1 : Page d'accueil**

**Plan d'action & Questionnement :**

    - Présentation du zoo en y incorporant quelques images.
        > Générer des images avec DALL.E :
            > Le Zoo
            > Les Habitats
            > Les Animaux
    - Mentionnez les différents habitats, services ainsi que les animaux que possède le zoo.
        > S'informer sur les différents habitats et services qu'un zoo peut proposer.
        > Faire une liste des différents animaux que possède le zoo.
        > 1 Enclos pour chaque espèce par habitat ou 1 Enclos pour 1 habitat (espèce ensemble) ?
        > Couple (mâle/femelle) ?
    - Les avis du Zoo.
        > Générer des avis par Moi-même.
    - Autres
        > Quels nom donner au section Habitats, Services et Review ?
        > Mettre en place les routes de navigations. (React Router)
        > Sections cliquable qui dirige vers la page correspondantes.
        > Appliquer le mobile first. (style)

**Actions :**

    - Création des composants Card et CardsSection pour présenter les différents habitats et services.
    - Création des composants Habitats et Services
    - Création des composants CardReview et Reviews pour présenter les avis des visiteurs.
    - Création des composants PreviewAnimals et Welcome.

    A faire :
        - Description, Animaux et Habitats -> voir site de zoo.
        - Puis les intégrer au site.
