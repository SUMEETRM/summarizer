console.log(chrome);
console.log(chrome.extension);
console.log(chrome.extension.getBackgroundPage());
console.log(chrome.extension.getBackgroundPage().word);

let bgpage = chrome.extension.getBackgroundPage();
let word = bgpage.word;
//createP(word);

const data = JSON.stringify({
  text: word,
  num_sentences: 2
});

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
    var summary = this.responseText;
    document.getElementById("summary").innerHTML=summary;
  }
});

document.write(word);

xhr.open("POST", "https://gpt-summarization.p.rapidapi.com/summarize");
xhr.setRequestHeader("content-type", "application/json");
xhr.setRequestHeader(
  "x-rapidapi-key",
  ""
);
xhr.setRequestHeader("x-rapidapi-host", "gpt-summarization.p.rapidapi.com");

xhr.send(data);
