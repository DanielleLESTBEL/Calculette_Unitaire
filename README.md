## <u> Calculette_Unitaire </u>
***
1. Démarrer le projet CALCULETTE_UNITAIRE dans GITHUB et le cloner dans VSCode.  
>
2. Créer l'arborescence selon l'énoncé de l'exercice, en ajoutant les données fournies.  
>
![alt text](Pictures/arborescenceFromScratch.PNG)  
>  
3. Dans <b>Bash</b>, procéder à l'installation ou MAJ des fichiers fonctionnels.    
  

   *  **Installer Composer** (json, lock, vendor) :
>
> composer require --dev phpunit/phpunit  
>
> ![alt text](Pictures/composerRequire.PNG)  
>
>
>![alt text](Pictures/composerRequireFin.PNG)  
>

* * **Installer Node.js** (pour installer le Package.json) :  
  
>npm init -y  
>
> ![alt text](Pictures/packageJsonNpmInit.PNG)   


4. **Création** des fichiers **CalculatorTest.php** et  **calculator.test.js** 
>  
![alt text](Pictures/CalculatorTestPhp)  



#### Avant de lancer les tests unitaires :  
1. **Installer jest.config.js**
>*Commande* : npx jest --init    
>
>![alt text](Pictures/initialisationJest.PNG)  
>
>![alt text](Pictures/initialisationJest2.PNG)

Puis, 
>*Commande* : npx install jest --global     
>
>![alt text](Pictures/installationJest.PNG)


#### Lancement du test sur la Calculette JS :    

>*Commande* : npx jest tests/calculator.test.js    
>
> ![alt text](Pictures/jestTestPassed.PNG)  

>La calculette :  
>![alt text](Pictures/calculatrice.PNG)    


>Addition :  
![alt text](Pictures/addition.PNG)
>![alt text](Pictures/addition_result.PNG)   


>Soustraction :    
![alt text](Pictures/soustraction.PNG)
![alt text](Pictures/soustraction_result.PNG)    


>Multiplication :     
![alt text](Pictures/multiplication.PNG)
![alt text](Pictures/multiplication_result.PNG)     
>     
>![alt text](Pictures/multiplier0.PNG)
>![alt text](Pictures/multiplier0_result.PNG)     

>Division : 
![alt text](Pictures/division.PNG)
![alt text](Pictures/division_result.PNG)     
>      
>![alt text](Pictures/diviser0.PNG)
>![alt text](Pictures/diviser0_result.PNG)

>Priorisation des calculs :     
2+3x4 => 14 (la priorisation est la multiplication [3x4] puis l'addition [12+2])     
>      
>![alt text](Pictures/2plus3fois4.PNG)
![alt text](Pictures/2plus3fois4_result.PNG)             


Parenthèses dans les calculs :     
 

