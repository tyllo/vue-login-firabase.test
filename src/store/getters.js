
export const isAuthorized = (state) => !!(state.auth?.idToken);

export const idToken = (state) => state.auth?.idToken;

export const profile = (state) => state.profile?.profile;
