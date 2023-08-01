import {
  closeComponent,
  makeComponentsVisible,
  moveButtonContainer,
  updateTitle,
  updateDescription,
  updateTitleColor,
  updateTitleAlignment,
  generatePoster,
} from "../helpers/helperFunctions.js";

import {
  closeHeading,
  closePosterImage,
  closeDescription,
  componentHeading,
  componentPosterImage,
  componentDescription,
  heading,
  image,
  description,
  headingInput,
  descriptionInput,
  imageFileInput,
  previewTitle,
  previewImage,
  previewImageContainer,
  previewDescription,
  canvas,
  downloadButton,
  colorRed,
  colorGreen,
  colorBlue,
  alignLeft,
  alignCenter,
  alignRight,
  previewSection,
} from "../helpers/elements.js";

/* EVENT LISTENERS */

// Close Buttons (X)
closeHeading.addEventListener("click", () => {
  closeComponent(componentHeading, heading);
});
closePosterImage.addEventListener("click", () => {
  closeComponent(componentPosterImage, image);
});
closeDescription.addEventListener("click", () => {
  closeComponent(componentDescription, description);
});

// Item Buttons
heading.addEventListener("click", () => {
  makeComponentsVisible(componentHeading, heading);
  moveButtonContainer();
});
image.addEventListener("click", () => {
  makeComponentsVisible(componentPosterImage, image);
  moveButtonContainer();
});
description.addEventListener("click", () => {
  makeComponentsVisible(componentDescription, description);
  moveButtonContainer();
});

// Inputs
headingInput.addEventListener("input", (event) => {
  updateTitle(previewTitle, event.target.value);
});

descriptionInput.addEventListener("input", (event) => {
  updateDescription(previewDescription, event.target.value);
});

// Title Color Change
colorRed.addEventListener("click", () => {
  updateTitleColor(previewTitle, "text-red-600");
});
colorGreen.addEventListener("click", () => {
  updateTitleColor(previewTitle, "text-green-600");
});
colorBlue.addEventListener("click", () => {
  updateTitleColor(previewTitle, "text-blue-600");
});

// Title Alignment Change
alignLeft.addEventListener("click", () => {
  updateTitleAlignment(previewTitle, "self-start");
});
alignCenter.addEventListener("click", () => {
  updateTitleAlignment(previewTitle, "self-center");
});
alignRight.addEventListener("click", () => {
  updateTitleAlignment(previewTitle, "self-end");
});

// Handling Image
imageFileInput.addEventListener("change", () => {
  const imageFile = imageFileInput.files[0];
  if (previewImageContainer.classList.contains("invisible")) {
    previewImageContainer.classList.remove("invisible");
  }
  previewImage.setAttribute("src", URL.createObjectURL(imageFile));
});

// Canvas
downloadButton.addEventListener("click", () => {
  generatePoster(
    canvas,
    previewSection,
    previewTitle.innerText,
    previewImage,
    previewDescription.innerText
  );
});
