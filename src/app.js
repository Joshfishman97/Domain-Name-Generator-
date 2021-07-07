/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generateLi(domain) {
  return "<LI>" + domain + "</LI>";
}
let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extension = [".com", ".net", ".io", ".us"];
  
  function generateDomains (pronounArr, adjArr, NounArr, extentionArr){
    return "<li>Here</li>"
  }
window.onload = function() {
  const unorderedList = document.getElementById("list-of-domains");
  unorderedList.innerHTML = generateDomains(pronoun,adj,noun,extension);
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extension = [".com", ".net", ".io", ".us"];
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let e = 0; e < extension.length; e++) {
          console.log(pronoun[i] + adj[j] + noun[k] + extension[e]);
        }
      }
    }
  }
  console.log("Hello Rigo from the console!");
};
