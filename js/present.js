
var to = 'Chanz';
var gift_url = 'https://www.facebook.com/profile.php?id=100040269362659';
var gift_image_url = 'https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.15752-9/275016615_764793478242061_7748320927427081639_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=ae9488&_nc_ohc=njy06sAX8VAAX8MsuBB&_nc_oc=AQkhCYd6QFAkEKfsDEySmDbauMKp4E_wm4fyWimiIyOmg_5L12hK6BgyHTvDOVPtArzlR8gm7kRGZXW16F_t3sye&_nc_ht=scontent.fsgn2-5.fna&oh=03_AVLgCZ-NCKFyzpoH9_6x3Gc3iNMmkO2WRUCiIA-wg4Pa1A&oe=624CDE2C';



var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");


function init() {
  
  var _giftLink, 
      _giftImg;
  
  if (gift_url) {
    _giftLink = document.createElement("a");
    _giftLink.href = gift_url;
    _giftLink.target = "_blank";
    presentImage.appendChild(_giftLink);
  }
  
  if (gift_image_url) {
    _giftImg = document.createElement("img");
    _giftImg.src = gift_image_url;
    if(_giftLink) {
      _giftLink.appendChild(_giftImg);
    } else {
      presentImage.appendChild(_giftImg);
    }
  }
    
  present.addEventListener("click", function(e){
    present.classList.toggle("open");
    document.getElementById('card').classList.add('card-show');
  }, false);
  
  
  
  nametag.innerText = to;
}

init();

