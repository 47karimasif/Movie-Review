
class Movie{
  constructor(link,name,rating,review,imdb){
    this.link=link;
    this.name=name;
    this.rating=rating;
    this.review=review;
    this.imdb=imdb;
  }
}

class Main extends Movie{

addMovie(movie){

const mainrow=document.querySelector(".asif");

  const div1=document.createElement("div");
  div1.className="card";

  const cardimage=document.createElement("div");
  cardimage.className="card-image";
cardimage.innerHTML=`
<img src="${movie.link}">
`;

const cardcontent=document.createElement("div");
cardcontent.className="card-content";
cardcontent.innerHTML=`
<h5 class="center moviename">${movie.name}</h5>
<p class="center rating ">My rating -  <span>${movie.rating}</span></p>
<div id="review">
<p>${movie.review}</p>
</div>
`;

const cardaction=document.createElement("div");
cardaction.className="card-action center";
cardaction.innerHTML=`
<a href="${movie.imdb} target="_blank">IMDB link <i class="fab fa-imdb fa-1x"></i></a>
`;

const removemovie=document.createElement("div");
removemovie.className="card-action center";
removemovie.innerHTML=`
  <button class="waves-effect waves-light btn-small red delete">Remove</button>

`;

div1.appendChild(cardimage);
div1.appendChild(cardcontent);
div1.appendChild(cardaction);
div1.appendChild(removemovie);

const col=document.createElement("div");
col.className="col s6 m4 l3";

col.appendChild(div1);
mainrow.appendChild(col);


}

Alert(message){
alert(message);
}

removemovie(target){
  const parent=document.querySelector(".asif");
  const id=target.parentElement.parentElement.parentElement;
  if(target.classList.contains("delete"))
  {
parent.removeChild(id);
  }
}
}

















document.querySelector(".movie-form ").addEventListener("submit",function(e){
const link=document.getElementById("Image-Link").value;
      name=document.getElementById("Movie-Name").value;
      rating=document.getElementById("Rating").value;
      review=document.getElementById("Review").value;
      imdb=document.getElementById("Imdb-Link").value;
      movie = new Movie(link,name,rating,review,imdb);

const main=new Main();

if (link===""|| name===""||rating===""||review===""||imdb==="")
{
  main.Alert("Please fill in all the fields");
}
else{
main.addMovie(movie);
}
  e.preventDefault();
})


document.querySelector(".asif").addEventListener("click",function(e){
  const main=new Main();
  main.removemovie(e.target);
  e.preventDefault();
})
