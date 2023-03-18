import { articleActions } from "./article-slice";

export const createArticle = (title: string, body: string) => {
  return async (dispatch: any) => {
    const createData = async () => {
      const res = await fetch("http://localhost:3000/articles", {
        method: "POST",
        body: JSON.stringify({
          title,
          body,
        }),
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const data = await res.json();
      return data;
    };

    try {
      const res = await createData();
      dispatch(
        articleActions.createArticle({
          article: res.data,
        })
      );
    } catch (e) {}
  };
};

export const fetchArticles = () => {
  return async (dispatch: any) => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/articles", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      });
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const data = await res.json();
      return data;
    };

    try {
      const data = await fetchData();
      dispatch(
        articleActions.getArticles({
          items: data.data,
        })
      );
    } catch (e: any) {
      console.log(e.message);
    }
  };
};

export const fetchArticle = (id: number) => {
  return async (dispatch: any) => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:3000/articles/${id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      });
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const data = await res.json();
      return data;
    };
    try {
      const article = await fetchData();
      dispatch(
        articleActions.getArticle({
          article: article.data,
        })
      );
    } catch (e: any) {
      console.log(e.message);
    }
  };
};

export const updateArticle = (id: number, title: string, body: string) => {
  return async (dispatch: any) => {
    const updateData = async () => {
      const res = await fetch(`http://localhost:3000/articles/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          title,
          body,
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
      const article = await updateData();
      dispatch(
        articleActions.updateArticle({
          article: article.data,
        })
      );
    } catch (e: any) {
      console.log(e.message);
    }
  };
};
