https://teachablemachine.withgoogle.com/models/E_fvh70uK/
bark="0"
meow="0"
moo="0"
roar="0"
function detectAudio() {
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier.ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/E_fvh70uK/model.json' , modelReady);
}

function modelReady(){
    classifier.classify(gotReasults);
}
function gotResults(error, results) {
if(error) {
    console.log(error);
}else{
    console.log(results);
    random_number_r = Math.floor(Math.random()) * 255 + 1;
    random_number_g = Math.floor(Math.random()) * 255 + 1;
    random_number_b = Math.floor(Math.random()) * 255 + 1;

    document.getElementById("result_label").innerHTML = 'I can hear - '+
    results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy - '+
    (results[0].confidence*100).toFixed(2)+"%";
    document.getElementById("result_label").style.color = "rgb("
    +random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("result_confidence").style.color = "rgb("
    +random_number_r+","+random_number_g+","+random_number_b+",";

    
    img = document.getElementById('img1');
    img1 = document.getElementById('img2');
    img2 = document.getElementById('img3');
    img3 = document.getElementById('img4');
    
    if ( results[0].label == "Barking") {
        img.src = 'tenor.gif';
        img1.src = 'raw.gif';
        img2.src = 'another_scary_cow.gif';
        img3.src = 'R.gif';
    }else if (results[0].label == "Meowing") {
        img.src = 'tenor.gif';
        img1.src = 'raw.gif';
        img2.src = 'another_scary_cow.gif';
        img3.src = 'R.gif';
    }else if (results[0].label == "Mooing") {
        img.src = 'tenor.gif';
        img1.src = 'raw.gif';
        img2.src = 'another_scary_cow.gif';
        img3.src = 'R.gif';
    }
 else if (results[0].label == "Roar") {
    img.src = 'tenor.gif';
        img1.src = 'raw.gif';
        img2.src = 'another_scary_cow.gif';
        img3.src = 'R.gif';
}
    else{
        img.src = 'tenor.gif';
        img1.src = 'raw.gif';
        img2.src = 'another_scary_cow.gif';
        img3.src = 'R.gif';
}

    
}
}