interface CatImage {
  id: string;
  url: string;
  width: number;
  height: number;
}

async function fetchCatImage(): Promise<CatImage> {
  const API_URL = "https://api.thecatapi.com/v1/images/search";

  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: CatImage[] = await response.json();
    return data[0];
  } catch (error) {
    console.error("Error fetching cat image:", error);
    throw error;
  }
}

async function displayCatImage() {
  try {
    const catImage = await fetchCatImage();
    const imgElement = document.getElementById("cat-image") as HTMLImageElement;
    imgElement.src = catImage.url;
    imgElement.alt = "A cute cat";
    playCatSound();
  } catch (error) {
    console.error("Error:", error);
  }
}

function playCatSound() {
  const audio = document.getElementById("cat-sound") as HTMLAudioElement;
  if (audio) {
    audio.currentTime = 0; // Reset the audio to the beginning
    audio.play().catch((error) => console.error("Error playing sound:", error));
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const loadButton = document.getElementById("load-button");
  if (loadButton) {
    loadButton.addEventListener("click", () => {
      displayCatImage();
      playCatSound();
    });
  }

  // Load initial cat image and play sound
  displayCatImage();
});
