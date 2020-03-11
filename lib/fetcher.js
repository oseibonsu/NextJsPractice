import fetch from "isomorphic-unfetch";

function fetcher(...args) {
  return fetch(...args).then(response => response.json());
}

export default fetcher;