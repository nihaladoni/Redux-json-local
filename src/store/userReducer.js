const uri = "http://localhost:3300/users";

const FETCH_POSTS = "FETCH_POSTS";
const POST_DATA = "POST_DATA";
const DELETE_DATA = "DELETE_DATA";
const UPDATE_DATA = "UPDATE_DATA";

export const userReducer = (state = "", { type, payload }) => {
  switch (type) {
    case FETCH_POSTS:
      return [...state, ...payload];
    case POST_DATA:
      return [...state, payload];
    case DELETE_DATA:
      const a = state.filter((user) => user.id !== payload);
      return [...a];
    case UPDATE_DATA:
      const newArr = state.map((user) => {
        if (user.id !== payload.id) {
          return user;
        } else {
          return payload;
        }
      });
      return [...newArr];

    default:
      return state;
  }
};

export const fetchPosts = () => async (dispatch) => {
  const users = await fetch(uri).then((res) => res.json());
  dispatch({ type: FETCH_POSTS, payload: users });
};

export const postData = (data) => async (dispatch) => {
  await fetch(uri, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
  dispatch({ type: POST_DATA, payload: data });
};

export const deleteData = (id) => async (dispatch) => {
  await fetch(`${uri}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  }).then((res) => res.json());

  dispatch({ type: DELETE_DATA, payload: id });
};

export const updateData = (data) => async (dispatch) => {
  await fetch(`${uri}/${data.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());

  dispatch({ type: UPDATE_DATA, payload: data });
};
