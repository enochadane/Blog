import { articleActions } from "./article-slice";

export const createComment = (articleId: number, content: string) => {
  return async (dispatch: any) => {
    const createData = async () => {
      const res = await fetch("http://localhost:3000/comments", {
        method: "POST",
        body: JSON.stringify({
          articleId,
          body: content,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const data = await res.json();
      return data;
    };

    try {
      const comment = await createData();
      dispatch(
        articleActions.createComment({
          comment: comment.data,
        })
      );
    } catch (e: any) {
      console.log(e.message);
    }
  };
};

export const fetchComments = (articleId: number) => {
  return async (dispatch: any) => {
    const fetchData = async () => {
      const res = await fetch(
        `http://localhost:3000/comments/article/${articleId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const data = await res.json();
      return data;
    };

    try {
      const comments = await fetchData();
      dispatch(
        articleActions.getComments({
          comments: comments.data,
        })
      );
    } catch (e: any) {
      console.log(e.message);
    }
  };
};

export const updateComment = (commentId: number, content: string) => {
  return async (dispatch: any) => {
    const updateData = async () => {
      const res = await fetch(`http://localhost:3000/comments/${commentId}`, {
        method: "PUT",
        body: JSON.stringify({
          body: content,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const data = await res.json();
      return data;
    };
    try {
      const comment = await updateData();
      dispatch(
        articleActions.updateComment({
          comment: comment.data,
        })
      );
    } catch (e: any) {
      console.log(e.message);
    }
  };
};

export const deleteComment = (id: number) => {
  return async (dispatch: any) => {
    const deleteData = async () => {
      const res = await fetch(`http://localhost:3000/comments/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const data = await res.json();
      return data;
    };
    try {
      const articleData = await deleteData();
      dispatch(
        articleActions.deleteComment({
          id: articleData.data.id,
        })
      );
    } catch (e: any) {
      console.log(e.message);
    }
  };
};
