// Sections
const componentsSection = document.getElementById("components");
const previewSection = document.getElementById("preview");

// Input or Textarea fields
const headingInput = document.getElementById("heading-input");
const descriptionInput = document.getElementById("description-input");
const imageFileInput = document.getElementById("dropzone-file");
const imageFileLabel = document.getElementById("upload-image");

// Components
const componentHeading = document.getElementById("component-heading");
const componentPosterImage = document.getElementById("component-poster_image");
const componentDescription = document.getElementById("component-description");

// Previews
const previewTitle = document.getElementById("preview-title");
const previewImage = document.getElementById("preview-image");
const previewImageContainer = document.getElementById(
  "preview-image-container"
);
const previewDescription = document.getElementById("preview-description");
const canvas = document.getElementById("poster-canvas");
const downloadButton = document.getElementById("download-button");

/* Buttons */

// Item Buttons in Components Section
const heading = document.getElementById("item-heading");
const image = document.getElementById("item-image");
const description = document.getElementById("item-description");
const itemButtonsContainer = document.getElementById("items");

// Closing(X) Buttons
const closeHeading = document.getElementById("heading-close-button");
const closePosterImage = document.getElementById("poster-image-close-button");
const closeDescription = document.getElementById("desctiption-close-button");

// Alignment Buttons (For Heading Component)
const alignLeft = document.getElementById("align-left");
const alignCenter = document.getElementById("align-center");
const alignRight = document.getElementById("align-right");

// Color Buttons (For Heading Component)
const colorRed = document.getElementById("color-red");
const colorGreen = document.getElementById("color-green");
const colorBlue = document.getElementById("color-blue");

export {
  componentsSection,
  previewSection,
  headingInput,
  descriptionInput,
  imageFileInput,
  imageFileLabel,
  componentHeading,
  componentPosterImage,
  componentDescription,
  heading,
  image,
  description,
  itemButtonsContainer,
  closeHeading,
  closePosterImage,
  closeDescription,
  alignLeft,
  alignCenter,
  alignRight,
  colorRed,
  colorGreen,
  colorBlue,
  previewTitle,
  previewImage,
  previewImageContainer,
  previewDescription,
  canvas,
  downloadButton,
};
