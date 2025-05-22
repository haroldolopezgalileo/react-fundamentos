import { CommonConstants } from "../util/CommonConstants";

export const fakeAuth = {
  isAuthenticated: true,
  user: {
    name: 'Juan',
    role: CommonConstants.USER, // puede ser 'user' o 'admin'
  },
};