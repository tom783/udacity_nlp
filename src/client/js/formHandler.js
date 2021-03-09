export function handleSubmit(event) {
  event.preventDefault();

  const formText = document.getElementById("textInput").value;
  const errorMessage = document.getElementById("errorMessage");
  if (formText) {
    fetch("http://localhost:8080/apiCall", {
      method: "POST",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formText }),
    })
      .then((res) => res.json())
      .then((res) => {
        errorMessage.innerText = null;
        document.getElementById(
          "analysis_text"
        ).innerText = `분석 문장 : ${res.sentence_list[0].text}`;
        document.getElementById(
          "apply_model"
        ).innerText = `적용 모델 : ${res.model}`;
        document.getElementById(
          "result_output"
        ).innerText = `신뢰도 : ${res.confidence}%`;
        document.getElementById(
          "subjectivity_output"
        ).innerText = `주관 : ${res.subjectivity}`;
        document.getElementById(
          "score_output"
        ).innerText = `점수 : ${checkScore(res.score_tag)}`;
      });
  } else {
    errorMessage.innerText = "Input text";
    document.getElementById("result_output").innerText = null;
    document.getElementById("subjectivity_output").innerText = null;
    document.getElementById("score_output").innerText = null;
  }
}

export function checkScore(value) {
  switch (value) {
    case "P+":
    case "P":
      return "긍정적";
    case "N+":
    case "N":
      return "부정적";
    case "NEU":
      return "중립";
    default:
      return "미확인";
  }
}
