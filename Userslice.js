import { createSlice } from "@reduxjs/toolkit";
const storedUser = JSON.parse(localStorage.getItem("user")) || null;
const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuthenticated: !!storedUser,
    user: storedUser,
    registeredUsers: JSON.parse(localStorage.getItem("registeredUsers")) || [],
  },
  reducers: {
    signup: (state, action) => {
      const newUser = action.payload;
      const exists = state.registeredUsers.find(u => u.email === newUser.email);
        if (!exists) {
        state.registeredUsers.push(newUser);
        localStorage.setItem("registeredUsers", JSON.stringify(state.registeredUsers));
      }
    },
    login: (state, action) => {
      const { email, password } = action.payload;
      const foundUser = state.registeredUsers.find(
        (u) => u.email === email && u.password === password
      );
      if (foundUser) {
        state.isAuthenticated = true;
        state.user = foundUser;
        localStorage.setItem("user", JSON.stringify(foundUser));
      } else {
        alert("Invalid email or password. Please try again.");
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem("user");
    },
  },
});
export const { signup, login, logout } = userSlice.actions;
export default userSlice.reducer;
