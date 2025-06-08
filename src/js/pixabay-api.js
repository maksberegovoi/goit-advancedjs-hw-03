function getImagesApi(q){
  const searchParams = new URLSearchParams( {
    key: "50733939-cc357c6b4bbe4fcbb86f08b26",
    q: q,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: "true",
  })

  return fetch(`https://pixabay.com/api/?${searchParams.toString()}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
}

export {getImagesApi}