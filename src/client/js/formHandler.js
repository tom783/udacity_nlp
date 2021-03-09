export function handleSubmit(event) {
  event.preventDefault();

  const formUrl = document.getElementById("urlInput").value;
  const errorMessage = document.getElementById("errorMessage");
  if (Client.checkUrl(formUrl)) {
    fetch("http://localhost:8080/apiCall", {
      method: "POST",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formUrl }),
    })
      .then((res) => res.json())
      .then((res) => {
        errorMessage.innerText = null;
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
    errorMessage.innerText = "Check url";
    document.getElementById("result_output").innerText = null;
    document.getElementById("subjectivity_output").innerText = null;
    document.getElementById("score_output").innerText = null;
  }
}

export const checkScore = (value) => {
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
};
