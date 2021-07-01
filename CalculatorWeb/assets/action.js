const firstName    = prompt ("Siapa nama depanmu ?");
const lastName      = prompt ("Siapa nama Belakangmu  ?");
const language      = prompt ("Bisa berbahasa apa ?");

const user = {
    name:{
        first:firstName,
        last:lastName,
    },
    language : language 
};
    
if(user.language === "English"){
    alert ("Nice To Meet U " + user.name.first + " " + user.name.last + "!");
}
else if(user.language === "French"){
    alert ("Ravi de vous recpntrer" + user.name.first + " " + user.name.last + "!");
}
else if(user.language === "Japanese"){
    alert ("Hajimemashite" + user.name.first + " " + user.name.last + "!");
}
else{
    alert ("Senang Bertemu Dengan Anda  " + user.name.first + " " + user.name.last + "!");
}