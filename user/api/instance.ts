"use client";

import axios from "axios";

export const usersApiInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_USERS_API,
});
