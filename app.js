window.addEventListener("load", () => {
  const $videoTitle = document.querySelector(".video__title > .value");
  const $videoDuration = document.querySelector(".video__duration > .value");

  chrome.tabs.executeScript(
    {
      code: `(${() => {
        const video = {
          duration: document.getElementById("movie_player").innerText,
          durationInSeconds: document.querySelector("video").duration,
          title: document.querySelector(".title.style-scope.ytd-video-primary-info-renderer").innerText,
        };

        return video;
      }})()`,
    },

    (results) => {
      function getVideoDuration(stringDuration) {
        const totalDuration = stringDuration.split("/")[1];
        return totalDuration;
      }
      const video = results && results[0];
      $videoTitle.innerText = video?.title;
      $videoDuration.innerText = getVideoDuration(video.duration);
      const userLogin = { Email: "gleisonsubzerokz@gmail.com", Senha: "g33888705", ManterConectado: true };
      console.log(axios);

      const headers = {
        "Content-Type": "application/json",
      };

      axios
        .post("https://cors-anywhere.herokuapp.com/https://aprovadoapp.com/service/Usuario/Autenticar", userLogin, {
          headers: headers,
        })
        .then((response) => {
          console.log(response);
          console.log(response.headers["set-cookie"]);
        })
        .catch((error) => {
          console.log(error);
        });

      //   userLogin = {'Email': "gleisonsubzerokz@gmail.com", 'Senha': "g33888705", 'ManterConectado': True}
      //     request = requests.post('https://aprovadoapp.com/service/Usuario/Autenticar', data=userLogin)
      //     headers = {'Content-Type': 'application/json'}
      //     myCookies = request.cookies
      //     myData = {
      //         "Id": 0,
      //         "Materia": {
      //             "Id": 6496550
      //         },
      //         "Tipo": "manual",
      //         "Conteudo": {
      //             "Id": 9178637
      //         },
      //         "DataInicio": "18/09/2020",
      //         "HoraInicio": "12:13",
      //         "Anotacoes": f"{videoTitle}",
      //         "Duracao": videoDuration
      //     }

      //     jsonData = json.dumps(myData)
      //     result = requests.post('https://aprovadoapp.com/service/Atividade/Novo', cookies=myCookies, data=jsonData, headers=headers)
    }
  );
});
