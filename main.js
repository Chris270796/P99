var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event) {

    console.log(event);

    var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    if (Content == "take my selfie") {
        console.log("taking selfie");
        speak();
    }
}


function speak() {
    var synth = window.speechSynthesis;

    speak_data = "Taking your Selfie in 5 seconds ";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    Webcam.attach(camera);

    setTimeout(function() {
        img_id = "selfie1";
        speak_data = "Taking your Selfie in 5 seconds ";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        take_snapshot();
        save();
    }, 5000);
}


camera = document.getElementById("camera");
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'jpeg',
    jpeg_quality: 90
});

function take_snapshot() {
    console.log(img_id);

    Webcam.snap(function(data_uri) {
        if (img_id == "photo1") {
            document.getElementById(result1).innerHTML = '<img id="photo1" src="' + data_uri + '"/>';
        }
        if (img_id == "photo2") {
            document.getElementById(result1).innerHTML = '<img id="photo2" src="' + data_uri + '"/>';
        }
        if (img_id == "photo3") {
            document.getElementById(result1).innerHTML = '<img id="photo3" src="' + data_uri + '"/>';
        }
        document.getElementById("result").innerHTML = '<img id="photo1" src="' + data_uri + '"/>';
    });
}


function save() {
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");