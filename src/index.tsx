import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers/reducer";

//TODO не заполнять стейт хардкодом пока страница грузится...
const store = createStore(
  reducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

// TODO: remove hardcode
export const BACKEND_URI = "http://localhost:3001";

// Получение данных для заполнения инфы о последнем коммите

fetch(
  `${BACKEND_URI}/api/repos/${store.getState().repository}/${
    store.getState().branch
  }/?number=1`
)
  .then(res => res.json())
  .then(
    result => {
      store.dispatch({
        type: "LAST_COMMIT_CHANGED",
        content: {
          sha: result[0].sha,
          author: result[0].author,
          date: result[0].date,
          message: result[0].message
        }
      });
    },
    error => {
      console.log("Error occurred while retrieving last commit: ", error);
    }
  );

export function refreshFilesList() {
  // Получение данных для заполнения файлов
  const cwd = store.getState().cwd;
  return fetch(
    `${BACKEND_URI}/api/repos/${store.getState().repository}?path=${cwd}`
  )
    .then(res => res.json())
    .then(
      files_arr => {
        let promises = [];
        for (let i = 0; i < files_arr.length; i++) {
          const filename = files_arr[i].name;
          const filepath = cwd + "/" + filename;
          const filetype = files_arr[i].type;

          //console.log("Filename: ", filename, " is being traversed");
          promises.push(
            fetch(
              `${BACKEND_URI}/api/repos/${store.getState().repository}/blob/${
                store.getState().branch
              }/${filepath}?skip_content=true`
            )
              .then(res => res.json())
              .then(
                fileinfo => {
                  //console.log("Extended file information: ", fileinfo);
                  const sha = fileinfo.last_sha;

                  return fetch(
                    `${BACKEND_URI}/api/repos/${
                      store.getState().repository
                    }/${sha}/?number=1`
                  )
                    .then(res => res.json())
                    .then(
                      result => {
                        //console.log(result);
                        return {
                          author: result[0].author,
                          date: result[0].date,
                          message: result[0].message,
                          sha: sha,
                          id: i,
                          name: filename,
                          type: filetype
                        };
                      },
                      // TODO написать нормальные ошибки
                      error => {
                        console.log(
                          "Error occurred while retrieving last commit: ",
                          error
                        );
                      }
                    );
                },
                error => {
                  console.log(
                    "Error occurred while retrieving last commit: ",
                    error
                  );
                }
              )
          );
        }

        Promise.all(promises).then(values =>
          store.dispatch({
            type: "FILES_INFO_UPDATE",
            content: values
          })
        );
      },
      error => {
        console.log("Error occurred while retrieving last commit: ", error);
      }
    );
}

// Получение данных для заполнения веток

function refreshBranchesList() {
  return fetch(
    `${BACKEND_URI}/api/repos/${store.getState().repository}/branches`
  )
    .then(res => res.json())
    .then(
      result => {
        store.dispatch({
          type: "BRANCHES_INFO_UPDATE",
          content: result
        });
      },
      error => {
        console.log("Error occurred while retrieving last commit: ", error);
      }
    );
}

refreshFilesList();
refreshBranchesList();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
