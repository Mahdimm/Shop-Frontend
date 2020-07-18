import { ApiBaseUrl } from "../Config";

let _jwt = "";

function defaultHeaders() {
  return {
    "Content-type": "application/json",
    Authorization: `Bearer ${_jwt}`,
  };
}

export function setJwt(jwt) {
  _jwt = jwt;
}

export function getJwt() {
  return _jwt;
}

async function myFetch() {
  const res = await fetch(...arguments);
  return await new Promise((resolve) => setTimeout(() => resolve(res), 0));
}

export function register({ email, password }) {
  return myFetch(`http://${ApiBaseUrl}/api/v1/account/register`, {
    method: "POST",
    headers: {
      ...defaultHeaders(),
    },
    body: JSON.stringify({ email, password }),
  });
}

export function login({ email, password }) {
  return myFetch(`http://${ApiBaseUrl}/api/v1/account/login`, {
    method: "POST",
    headers: {
      ...defaultHeaders(),
    },
    body: JSON.stringify({ email, password }),
  });
}

export function addProduct({ title, price, buyed, color }) {
  return myFetch(`http://${ApiBaseUrl}/api/v1/technoop/add_phone`, {
    method: "POST",
    headers: {
      ...defaultHeaders(),
    },
    body: JSON.stringify({ title, price, buyed, color }),
  });
}

export function getProducts() {
  return myFetch(`http://${ApiBaseUrl}/api/v1/technoop/get_all_phone`, {
    method: "GET",
    headers: {
      ...defaultHeaders(),
    },
  });
}

export function removeProduct(productId) {
  return myFetch(
    `http://${ApiBaseUrl}/api/v1/technoop/phone_delete/${productId}`,
    {
      method: "DELETE",
      headers: {
        ...defaultHeaders(),
      },
    }
  );
}

export function editProduct({ _id, ...product }) {
  return myFetch(`http://${ApiBaseUrl}/api/v1/technoop/phone_update/${_id}`, {
    method: "PUT",
    body: JSON.stringify(product),
    headers: {
      ...defaultHeaders(),
    },
  });
}
