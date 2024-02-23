"use strict";

import { hash, compare } from "bcrypt";

export const encrypt = async (password) => {
  try {
    return hash(password, 10);
  } catch (err) {
    console.error(err);
    return err;
  }
};

export const checkPassword = async (password, hash) => {
  try {
    return await compare(password, hash);
  } catch (err) {
    console.error(err);
    return err;
  }
};

export const checkUpdate = (data, userId) => {
  if (userId) {
    if (Object.entries(data).length === 0 || data.role || data.role == "") {
      return false;
    }
    return true;
  } else {
    return true;
  }
};

export const checkUpdateCategorie = (data, categorieId) => {
  if (categorieId) {
    if (
      Object.entries(data).length === 0 ||
      data.description ||
      data.description == ""
    ) {
      return false;
    }
    return true;
  } else {
    return true;
  }
};

export const checkUpdateProduct = (data, productId) => {
  if (productId) {
    if (
      Object.entries(data).length === 0 ||
      data.categorie ||
      data.categorie == ""
    ) {
      return false;
    }
    return true;
  } else {
    return true;
  }
};

export const checkUpdateCart = (data, cartId) => {
  if (cartId) {
    if (
      Object.entries(data).length === 0 ||
      data.ordernumber ||
      data.ordernumber == "" ||
      data.user ||
      data.user == "" ||
      data.product ||
      data.product == ""
    ) {
      return false;
    }
    return true;
  } else {
    return true;
  }
};
