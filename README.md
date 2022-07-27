Hey! This is my homepage and after endless tries I found this tutorial to host a react app with gh-pages:

https://www.youtube.com/watch?v=2hM5viLMJpA

prior to this I did (in the terminal): 
 - mkdir homepage-folder
 - cd homepage-folder
 - npx create-react-app geza-hp
 - cd geza-hp

 then I followed along the tutorial, except for one thing:

  - between 
  git commit -m "initial commit"   
    and
  git push -u origin main
    I squeezed in 
  git branch -M main
    as recommended on github.

In the end make sure to:
 - not use capital letters (your github account name ON GITHUB can have them, but dont write them in the package.json or in the repo name) or blanc spaces basically ANYWHERE

 - check if the correct branch is deployed. to do so: 
 github repo -> settings -> pages 
  and set at "Source" the branch to "gh-pages" and the "root" folder.


