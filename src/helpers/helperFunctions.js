import { itemButtonsContainer } from "./elements.js";
// import DOMPurify from "isomorphic-dompurify";

let countVisibleButtons = 3;
let titlePosition = "";
let currentTitleColor;
let allTitleColor = {
  "text-red-600": "#dc2626",
  "text-green-600": "#16a34a",
  "text-blue-600": "#2563eb",
};
// Making the Item Buttons Container appear last
const moveButtonContainer = () => {
  if (!itemButtonsContainer.classList.contains("order-last")) {
    itemButtonsContainer.classList.add("order-last");
  }
};

// Making Component Sections visible and Hiding the buttons simultaenously
const makeComponentsVisible = (component, componentButton) => {
  if (component.classList.contains("hidden")) {
    component.classList.remove("hidden");
    component.classList.add("flex", "flex-col", "gap-3");
  }
  componentButton.classList.add("hidden");
  countVisibleButtons -= 1;
  checkButtons();
};

// Closing (Hiding) the Component Sections and Making the buttons reappear simultaneously
const closeComponent = (component, componentButton) => {
  component.classList.add("hidden");
  component.classList.remove("flex", "flex-col");
  if (componentButton.classList.contains("hidden")) {
    componentButton.classList.remove("hidden");
  }
  countVisibleButtons += 1;
  checkButtons();
};

const checkButtons = () => {
  if (countVisibleButtons === 0) {
    document.querySelector("#items > h1").classList.add("hidden");
  } else {
    document.querySelector("#items > h1").classList.remove("hidden");
  }
};

// Update Title Content (Live)
const updateTitle = (title, value) => {
  if (title.classList.contains("invisible")) {
    title.classList.remove("invisible");
  }
  title.textContent = value;
};

// Update Title Color (Live)
const colorClasses = ["text-red-600", "text-green-600", "text-blue-600"];
const updateTitleColor = (title, color) => {
  const classList = title.classList;
  colorClasses.forEach((colorClass) => {
    if (classList.contains(colorClass)) {
      classList.remove(colorClass);
    }
  });
  classList.add(color);
  currentTitleColor = color;
};

// Update Title Alignment (Live)
const alignClasses = ["self-start", "self-center", "self-end"];
const updateTitleAlignment = (title, alignment) => {
  const classList = title.classList;
  console.log(classList);
  alignClasses.forEach((alignClass) => {
    if (classList.contains(alignClass)) {
      classList.remove(alignClass);
    }
  });
  classList.add(alignment);
  titlePosition = alignment;
};

// Update Description Content (Live)
const updateDescription = (description, value) => {
  if (description.classList.contains("invisible")) {
    description.classList.remove("invisible");
  }
  description.innerText = value;
};

// Download Button
const generatePoster = (canvas, previewSection, title, image, description) => {
  // Setting canvas size to match the resolution 1920x1080
  canvas.width = 1920;
  canvas.height = 1080;
  console.log(canvas.width, canvas.height);

  const ctx = canvas.getContext("2d");

  // Setting Canvas background
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Set font for title and description
  ctx.font = "bold 64px Monospace";
  ctx.fillStyle = allTitleColor[currentTitleColor] || "#000";
  // Draw the Title onto the canvas
  if (titlePosition == "self-end") {
    ctx.textAlign = "right";
    ctx.fillText(title, canvas.width - 64, 120);
  } else if (titlePosition == "self-center") {
    ctx.textAlign = "center";
    ctx.fillText(title, canvas.width / 2, 120);
  } else {
    ctx.textAlign = "left";
    ctx.fillText(title, 64, 120);
  }

  // Draw Image on canvas
  ctx.drawImage(image, 64, 150, canvas.width * 0.6, canvas.height * 0.6);

  // Draw Description
  ctx.font = "26px Monospace";
  ctx.textAlign = "left";
  ctx.fillStyle = "black";
  wrapText(ctx, description, 64, canvas.height * 0.8, canvas.width - 64, 30);

  // Get the data URL of the poster image
  const dataURL = canvas.toDataURL("image/png");

  // Create a link element and simulate a click to download the image
  const link = document.createElement("a");
  link.href = dataURL;
  link.download = "poster.png";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Function to wrap text in the canvas context
const wrapText = (context, text, x, y, maxWidth, lineHeight) => {
  const paragraphs = text.split("\n");

  for (let p = 0; p < paragraphs.length; p++) {
    const words = paragraphs[p].split(" ");
    let line = "";

    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + " ";
      const metrics = context.measureText(testLine);
      const testWidth = metrics.width;

      if (testWidth > maxWidth && n > 0) {
        context.fillText(line, x, y);
        line = words[n] + " ";
        y += lineHeight;
      } else {
        line = testLine;
      }
    }

    context.fillText(line, x, y);

    // Move to the next line for the next paragraph
    y += lineHeight;
  }
};

export {
  moveButtonContainer,
  makeComponentsVisible,
  closeComponent,
  updateTitle,
  updateDescription,
  updateTitleColor,
  updateTitleAlignment,
  generatePoster,
};
