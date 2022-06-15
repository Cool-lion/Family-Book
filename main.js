var images =
["IMG_0029.JPG","Dad.jpeg","Gautamama.jpeg","Angshumami.png","Sobuj.jpeg","Dadu.jpeg","Dida.jpeg", "Sudhata.jpeg","Tata.jpeg","Nanama.jpeg"];
var names =
["Mom", "Dad", "Gautamama", "Angshumami", "Sobuj", "Dadu", "Dida", "Sudhata", "Tata", "Nanama"];
var i = 0
function update()
{
     i++;
     var numbers_of_family_members_in_array = 9;
     if (i > numbers_of_family_members_in_array) 
     {
          i = 0;
     }
     var updatedImage = images[i];
     var updatedName = names[i];
     document.getElementById("family_member_image").src = updatedImage;
     document.getElementById("family_member_name").innerHTML = updatedName;
}

