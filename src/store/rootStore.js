export const fetchData = async () => {
    const response = await fetch("https://616e2f49a83a850017caa84c.mockapi.io/api/v1/thumbs");
    const data = await response.json();
    const thumbsData = data[0].data;
    return thumbsData;
  }