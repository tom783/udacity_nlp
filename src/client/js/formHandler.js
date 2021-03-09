function handleSubmit(event) {
  event.preventDefault();

  let formUrl = document.getElementById("urlInput").value;
  const errorMessage = document.getElementById("errorMessage");
  if (Client.checkUrl(formUrl)) {
    fetch("http://localhost:8080/article", {
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
        console.log(res);
        document.querySelector(
          "#result_output"
        ).innerText = `신뢰도 : ${res.confidence}%`;
        document.querySelector(
          "#subjectivity_output"
        ).innerText = `주관 : ${res.subjectivity}`;
        document.querySelector("#score_output").innerText = `점수 : ${score(
          res.score_tag
        )}`;
      });
  } else {
    console.log(errorMessage, "invalid url");
  }
}

export const score = (score_tag) => {
  switch (score_tag) {
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

export { handleSubmit };
