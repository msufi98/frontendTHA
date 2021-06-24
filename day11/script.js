let qa = [
  {
    q: "What technology is used to record cryptocurrency transactions?",
    options: ["Digital wallet", "Mining", "Blockchain", "Token"],
    a: "Blockchain",
  },
  {
    q: "What kind of malware is packaged along with a seemingly legitimate software?",
    options: ["Zero-day exploit", "Virus", "Ransomware", "Trojan horse"],
    a: "Trojan horse",
  },
  {
    q: "Making a compressed digital archive might produce what type of file format?",
    options: ["PDF", "JPEG", "ZIP", "MP3"],
    a: "ZIP",
  },
  {
    q: "What does acronym FOSS stand for?",
    options: [
      "Free and Open-Source Software",
      "Full Option Sensor System",
      "Follow-On Support Service",
      "Fiber Optics Science System",
    ],
    a: "Free and Open-Source Software",
  },
  {
    q: "What technology is used to make telephone calls over the Internet possible?",
    options: ["Bluetooth", "Ethernet", "NFC", "VoIP"],
    a: "VoIP",
  },
  {
    q: "What is the term for text that automatically continues from one line to the next?",
    options: [
      "Word processing",
      "Word wrapping",
      "Word flowing",
      "Word binding",
    ],
    a: "Word wrapping",
  },
];
correct = 0;
function startGame() {
  q_seq = randomizer(qa.length - 1, 3);
  //console.log(q_seq)
  for (ind of q_seq) {
    document.querySelector("#question-area").appendChild(questionCreator(ind));
  }
}
document.querySelector("#submit").addEventListener("click", ()=>{
  score = 0
  vs = document.querySelectorAll("input:checked")
  for (v of vs) {
    console.log(v.parentElement)
    if(qa[v["name"].substring(1,2)].a==v["value"]) {
      v.parentElement.classList.add("correct-selected")
      score = score+1
      
    }
    else{
      v.parentElement.classList.add("incorrect-selected")

    }
    document.querySelector("#score").innerText = "Your Score is "+score
  }
})

function randomizer(upperLimit, numberOfElements) {
  ar = [];
  r = 0;
  while (numberOfElements > 0) {
    do {
      r = Math.round(Math.random() * upperLimit);
    } while (ar.includes(r));
    //console.log(r,numberOfElements)
    ar.push(r);
    numberOfElements--;
  }
  return ar;
}
function questionCreator(ind) {
  individualQuestion = document.createElement("div");
  individualQuestion.classList.add("individualQuestion");
  question = document.createElement("h2");
  question.innerText = qa[ind].q;
  individualQuestion.appendChild(question);

  answer = document.createElement("div");
  answer.classList.add("choices");
  individualQuestion.appendChild(answer);
  a_seq = randomizer(3, 4);
  for (a_ind of a_seq) {
    individualAnswer = document.createElement("div");
    individualAnswer.setAttribute("class","individualAnswer");
    individualAnswer.innerHTML =
      "<input type ='radio' name = 'q" +
      ind +
      "' id = 'q" +
      ind + 
      "' value="+"'"+qa[ind].options[a_ind]+"'><label for='q" +
      ind +
      "'>" +
      qa[ind].options[a_ind] +
      "</label>";

    //individualAnswer.innerText = qa[ind].options[a_ind]
    answer.appendChild(individualAnswer);
  }
  console.log(a_seq);

  return individualQuestion;
}

function reload(){
  document.location.reload();
}

startGame();
