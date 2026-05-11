const BASE_URL = "http://localhost:5000/api";

export const uploadFile = async (file) => {
  const formData = new FormData(); //"create new object for formdata"
  formData.append("file", file); //"add your file to the object"

  const res = await fetch(`${BASE_URL}/upload`, {
    method: "POST", //"sends HTTP POst reequest"
    body: formData,
  });

  return res.json(); //"converting backend response to json object"
};

export const askQuestion = async (question) => {
  const res = await fetch(`${BASE_URL}/ask`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ question }),
  });

  return res.json();
};