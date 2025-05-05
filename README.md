## <u> Calculette_Unitaire </u>
****
* Démarrer le projet CALCULETTE_UNITAIRE dans GITHUB et le cloner dans VSCode.  
>
* Créer l'arborescence selon l'énoncé de l'exercice, en ajoutant les données fournies.  
>
![alt text](Pictures/arborescenceFromScratch.PNG)  
>  
* Dans <b>Bash</b>, procéder à l'installation ou MAJ des fichiers "fonctionnels".    
  

1. <b>Installer Composer</b> (json, lock, vendor) :
>
composer require --dev phpunit/phpunit  

![alt text](Pictures/composerRequire.PNG)  
>

![alt text](Pictures/composerRequireFin.PNG)  
>



2) <b>Installer Node.js</b> (pour installer le Package.json) : 
npm init -y  
> ![alt text](Pictures/packageJsonNpmInit.PNG)   


1. **Création** des fichiers **CalculatorTest.php** et  **calculator.test.js** 
>  
![alt text](Pictures/CalculatorTestPhp)  



#### Avant de lancer les tests unitaires :  
1. **Installer jest.config.js**
<i>Commande</i> : npx jest --init    

![alt text](Pictures/initialisationJest.PNG)  

![alt text](Pictures/initialisationJest2.PNG)


<i>Commande</i> : npx install jest --global     

![alt text](Pictures/installationJest.PNG)


#### Lancement du test sur la Calculette JS :    

<i>Commande</i> : npx jest tests/calculator.test.js    

> ![alt text](Pictures/jestTestPassed.PNG)  

![alt text](Pictures/calculatrice.PNG)    
