fetch('sneakers.json')
.then(response => response.json())
.then(data => {

        //appeler afficher produits
      afficherProduits(data)

        console.log(data)

    })

function afficherProduits(donnees) {
// données est un objet
    //afficher touts les titres des produits
    //prendre les produits 1 par 1 -> for each



let nomcommercial = donnees.nomCommercial
let acrroche = donnees.phraseAccroche
let texte = donnees.texteAppelAction
let avantages = donnees.avantagesClients



donnees.produits.forEach(produit => {

   let nom = produit.nom
        console.log(produit.nom)

        let description = produit.description
        console.log(produit.description)

        let img = produit.imageUrl
        console.log(produit.imageUrl)

         let prix = produit.prix
        console.log(produit.prix)

         let rate = produit.rate
        console.log(produit.rate)



document.getElementById("section2").innerHTML += 

 //AFFICHER MES CHAUSSURES
            //PARAMETRE TABLEAU PRODUITS

`

     <div class="flex space-around card-chaussure margin-top-50 padding-30 w-40 align-center">

        <img src="${img}" class="w-40" alt="">

        <div class="w-40">

            <h4 class="size-25 margin-bottom-10">${nom}</h4>
            <p class="margin-bottom-10"><i class="ph-fill ph-star"></i> : ${rate}</p>
            
            <p class="margin-bottom-10"> prix ${prix}</p>
            <a href="" class="btn">commander</a>
            


        </div>

        <p class="margin-bottom-10">${description}</p>

    </div>

       

                             `

});





        donnees.services.forEach(service => {

        let nom1= service.nom
        console.log(service.nom)

        let description1 = service.description
        console.log(service.description)

        

        document.getElementById("section3").innerHTML += 

         //AFFICHER MES CHAUSSURES
            //PARAMETRE TABLEAU PRODUITS

`



     <div class="flex space-around card-chaussure2 margin-top-50 padding-10  w-33">

        

        <div class="w-100">

            <h4 class="size-25 margin-bottom-10">${nom1}</h4>
            <p class="margin-bottom-10">${description1}</p>
           


        </div>

    </div>
    `

});




                           donnees.temoignages.forEach(service => {

        let nom2= service.prenom
        console.log(service.prenom)

        let experience = service.typeExperience
        console.log(service.typeExperience)

        let commentaire = service.commentaire
        console.log(service.commentaire)

         let note = service.note
        console.log(service.note)

         let imageUrl = service.imageUrl
        console.log(service.imageUrl)
        

                             


            document.getElementById("section4").innerHTML += 


            //AFFICHER MES COMMENTAIRES
            //PARAMETRE TABLEAU TEMOIGNANGES
`



        <div class="flex space-around card-chaussure2 margin-top-50 padding-10">

        

                 <div class="w-60">

                    <div class="flex space-between margin-bottom-25 align-center">

                         <img src="${imageUrl}" class="classRond w-33" alt="">

                        <div class="w-33">
                        <h4 class="size-25 margin-bottom-10">${nom2}</h4>
                        <p class="margin-bottom-10"><i class="ph-fill ph-star"></i> : ${note}</p>
                        <p class="margin-bottom-10">${experience}</p>

                        </div>

                    </div>


                 
                 <p class="margin-bottom-10">${commentaire}</p>

          
          


                </div>

        </div>


        

                             `
    
});









 //on est aller chercher le titre et pour pas le perdre aller creer une variable voir au dessus (c'est fiare une petite boite)










document.getElementById("section1").innerHTML +=

            //AFFICHER MES TITRES
            //PARAMETRE OBJECTS DU DEBUT

          `
  
                     
       
                           
             <div class="txt-orange backspecial2">
            <h1>${nomcommercial}</h1>  
             <p class="text-center w-100 size-20">${acrroche} </p>
            <p class="text-center w-100 size-20">${texte} </p>   
            </div>
        

            
            
           `



  };