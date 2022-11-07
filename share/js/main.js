var headerPopap1 = document.querySelector('#headerPopap');
const shateMenu = document.querySelector('.shateMenu ' );

shateMenu.addEventListener("click", () => {
    // headerPopap1.style.transform='translateY(-300px)';
    headerPopap1.classList.toggle("active") 
    // alert("123456789")
});

document.querySelectorAll('.popap_links').forEach(n => n. 
    addEventListener("click",()=>{
        headerPopap1.classList.toggle("active") 
    }))
    





    // tell
    
    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
      }
      // Закрыть раскрывающийся список, если пользователь щелкнет за его пределами.
      window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
           
            
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
             
              
           
            }
          }
        }
    
    }
  

      var shareBtn = document.getElementById('shareee')

shareBtn.addEventListener('click', event => {

  // Check for Web Share api support
  if (navigator.share) {
    // Browser supports native share api
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://goo.gl/maps/HEfGuyt7JBdU5zBb8'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    // Fallback
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});


// qrcode
// fa-qrcode
var qrcodePopap = document.querySelector("#qrcodePopap")
var faQrcode = document.querySelector("#qrcode")
var close = document.querySelector(".close")
faQrcode.onclick = function() {
  qrcodePopap.style.display = "block";
 

}
close.onclick = function() {
  qrcodePopap.style.display = "none";
 

}
window.onclick = function(event) {
if (event.target == qrcodePopap) {
  qrcodePopap.style.display = "none";
}
}  



 