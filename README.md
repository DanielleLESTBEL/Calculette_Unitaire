## <u> Calculette_Unitaire </u>
****
* Démarrer le projet CALCULETTE_UNITAIRE dans GITHUB et le cloner dans VSCode.  
>
* Créer l'arborescence selon l'énoncé de l'exercice, en ajoutant les données fournies.  
>
![alt text](Pictures/arborescenceFromScratch.PNG)  
>  

* Installer Composer (json, lock, vendor) :
>
composer require --dev phpunit/phpunit  

![alt text](Pictures/composerRequire.PNG)  
>

![alt text](Pictures/composerRequireFin.PNG)  
>

Dans Bash, procéder à l'installation ou MAJ des fichiers "fonctionnels".

Installer Node.js (pour installer le Package.json) : 
npm init -y  
> ![alt text](Pictures/packageJsonNpmInit.PNG)   


Création des fichiers CalculatorTest.php et  calculator.test.js 
>  
![alt text](Pictures/CalculatorTestPhp)  



Avant de lancer les tests unitaires : 
Installer jest.config.js
=> npx jest --init  
![alt text](Pictures/initialisationJest.PNG)  
>
![alt text](Pictures/initialiationJest2.PNG)  


=> npx install jest --global   
![alt text](Pictures/installationJest.PNG)


Lancement du test sur la Calculette JS :
=> npx jest tests/calculator.test.js  

> ![alt text](Pictures/jestTestPassed.PNG)  

Nouvel essai avec 