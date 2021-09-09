function preload() {

}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    webcam_vid = createCapture(VIDEO);
    webcam_vid.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/TiM7Siv82/model.json', modelLoaded);


}

function draw() {
    image(webcam_vid, 0, 0, 300, 300);
    classifier.classify(webcam_vid, gotResult)
}

function modelLoaded() {
    console.log('model is loaded ');
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        object_name = results[0].label;
        object_acc = results[0].confidence.toFixed(2) * 100;
        document.getElementById("object_name").innerHTML = object_name;
        document.getElementById("object_acc").innerHTML = object_acc;
    }
}