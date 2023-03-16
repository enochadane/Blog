import { articleActions } from "./article-slice";

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
