// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../src/helpers/elements.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.previewTitle = exports.previewSection = exports.previewImageContainer = exports.previewImage = exports.previewDescription = exports.itemButtonsContainer = exports.imageFileLabel = exports.imageFileInput = exports.image = exports.headingInput = exports.heading = exports.downloadButton = exports.descriptionInput = exports.description = exports.componentsSection = exports.componentPosterImage = exports.componentHeading = exports.componentDescription = exports.colorRed = exports.colorGreen = exports.colorBlue = exports.closePosterImage = exports.closeHeading = exports.closeDescription = exports.canvas = exports.alignRight = exports.alignLeft = exports.alignCenter = void 0;
// Sections
var componentsSection = document.getElementById("components");
exports.componentsSection = componentsSection;
var previewSection = document.getElementById("preview");

// Input or Textarea fields
exports.previewSection = previewSection;
var headingInput = document.getElementById("heading-input");
exports.headingInput = headingInput;
var descriptionInput = document.getElementById("description-input");
exports.descriptionInput = descriptionInput;
var imageFileInput = document.getElementById("dropzone-file");
exports.imageFileInput = imageFileInput;
var imageFileLabel = document.getElementById("upload-image");

// Components
exports.imageFileLabel = imageFileLabel;
var componentHeading = document.getElementById("component-heading");
exports.componentHeading = componentHeading;
var componentPosterImage = document.getElementById("component-poster_image");
exports.componentPosterImage = componentPosterImage;
var componentDescription = document.getElementById("component-description");

// Previews
exports.componentDescription = componentDescription;
var previewTitle = document.getElementById("preview-title");
exports.previewTitle = previewTitle;
var previewImage = document.getElementById("preview-image");
exports.previewImage = previewImage;
var previewImageContainer = document.getElementById("preview-image-container");
exports.previewImageContainer = previewImageContainer;
var previewDescription = document.getElementById("preview-description");
exports.previewDescription = previewDescription;
var canvas = document.getElementById("poster-canvas");
exports.canvas = canvas;
var downloadButton = document.getElementById("download-button");

/* Buttons */

// Item Buttons in Components Section
exports.downloadButton = downloadButton;
var heading = document.getElementById("item-heading");
exports.heading = heading;
var image = document.getElementById("item-image");
exports.image = image;
var description = document.getElementById("item-description");
exports.description = description;
var itemButtonsContainer = document.getElementById("items");

// Closing(X) Buttons
exports.itemButtonsContainer = itemButtonsContainer;
var closeHeading = document.getElementById("heading-close-button");
exports.closeHeading = closeHeading;
var closePosterImage = document.getElementById("poster-image-close-button");
exports.closePosterImage = closePosterImage;
var closeDescription = document.getElementById("desctiption-close-button");

// Alignment Buttons (For Heading Component)
exports.closeDescription = closeDescription;
var alignLeft = document.getElementById("align-left");
exports.alignLeft = alignLeft;
var alignCenter = document.getElementById("align-center");
exports.alignCenter = alignCenter;
var alignRight = document.getElementById("align-right");

// Color Buttons (For Heading Component)
exports.alignRight = alignRight;
var colorRed = document.getElementById("color-red");
exports.colorRed = colorRed;
var colorGreen = document.getElementById("color-green");
exports.colorGreen = colorGreen;
var colorBlue = document.getElementById("color-blue");
exports.colorBlue = colorBlue;
},{}],"../src/helpers/helperFunctions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateTitleColor = exports.updateTitleAlignment = exports.updateTitle = exports.updateDescription = exports.moveButtonContainer = exports.makeComponentsVisible = exports.generatePoster = exports.closeComponent = void 0;
var _elements = require("./elements.js");
// import DOMPurify from "isomorphic-dompurify";

var countVisibleButtons = 3;
var titlePosition = "";
var currentTitleColor;
var allTitleColor = {
  "text-red-600": "#dc2626",
  "text-green-600": "#16a34a",
  "text-blue-600": "#2563eb"
};
// Making the Item Buttons Container appear last
var moveButtonContainer = function moveButtonContainer() {
  if (!_elements.itemButtonsContainer.classList.contains("order-last")) {
    _elements.itemButtonsContainer.classList.add("order-last");
  }
};

// Making Component Sections visible and Hiding the buttons simultaenously
exports.moveButtonContainer = moveButtonContainer;
var makeComponentsVisible = function makeComponentsVisible(component, componentButton) {
  if (component.classList.contains("hidden")) {
    component.classList.remove("hidden");
    component.classList.add("flex", "flex-col", "gap-3");
  }
  componentButton.classList.add("hidden");
  countVisibleButtons -= 1;
  checkButtons();
};

// Closing (Hiding) the Component Sections and Making the buttons reappear simultaneously
exports.makeComponentsVisible = makeComponentsVisible;
var closeComponent = function closeComponent(component, componentButton) {
  component.classList.add("hidden");
  component.classList.remove("flex", "flex-col");
  if (componentButton.classList.contains("hidden")) {
    componentButton.classList.remove("hidden");
  }
  countVisibleButtons += 1;
  checkButtons();
};
exports.closeComponent = closeComponent;
var checkButtons = function checkButtons() {
  if (countVisibleButtons === 0) {
    document.querySelector("#items > h1").classList.add("hidden");
  } else {
    document.querySelector("#items > h1").classList.remove("hidden");
  }
};

// Update Title Content (Live)
var updateTitle = function updateTitle(title, value) {
  if (title.classList.contains("invisible")) {
    title.classList.remove("invisible");
  }
  title.textContent = value;
};

// Update Title Color (Live)
exports.updateTitle = updateTitle;
var colorClasses = ["text-red-600", "text-green-600", "text-blue-600"];
var updateTitleColor = function updateTitleColor(title, color) {
  var classList = title.classList;
  colorClasses.forEach(function (colorClass) {
    if (classList.contains(colorClass)) {
      classList.remove(colorClass);
    }
  });
  classList.add(color);
  currentTitleColor = color;
};

// Update Title Alignment (Live)
exports.updateTitleColor = updateTitleColor;
var alignClasses = ["self-start", "self-center", "self-end"];
var updateTitleAlignment = function updateTitleAlignment(title, alignment) {
  var classList = title.classList;
  console.log(classList);
  alignClasses.forEach(function (alignClass) {
    if (classList.contains(alignClass)) {
      classList.remove(alignClass);
    }
  });
  classList.add(alignment);
  titlePosition = alignment;
};

// Update Description Content (Live)
exports.updateTitleAlignment = updateTitleAlignment;
var updateDescription = function updateDescription(description, value) {
  if (description.classList.contains("invisible")) {
    description.classList.remove("invisible");
  }
  description.innerText = value;
};

// Download Button
exports.updateDescription = updateDescription;
var generatePoster = function generatePoster(canvas, previewSection, title, image, description) {
  // Setting canvas size to match the resolution 1920x1080
  canvas.width = 1920;
  canvas.height = 1080;
  console.log(canvas.width, canvas.height);
  var ctx = canvas.getContext("2d");

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
  var dataURL = canvas.toDataURL("image/png");

  // Create a link element and simulate a click to download the image
  var link = document.createElement("a");
  link.href = dataURL;
  link.download = "poster.png";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Function to wrap text in the canvas context
exports.generatePoster = generatePoster;
var wrapText = function wrapText(context, text, x, y, maxWidth, lineHeight) {
  var paragraphs = text.split("\n");
  for (var p = 0; p < paragraphs.length; p++) {
    var words = paragraphs[p].split(" ");
    var line = "";
    for (var n = 0; n < words.length; n++) {
      var testLine = line + words[n] + " ";
      var metrics = context.measureText(testLine);
      var testWidth = metrics.width;
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
},{"./elements.js":"../src/helpers/elements.js"}],"../src/handlers/eventHandlers.js":[function(require,module,exports) {
"use strict";

var _helperFunctions = require("../helpers/helperFunctions.js");
var _elements = require("../helpers/elements.js");
/* EVENT LISTENERS */ // Close Buttons (X)
_elements.closeHeading.addEventListener("click", function () {
  (0, _helperFunctions.closeComponent)(_elements.componentHeading, _elements.heading);
});
_elements.closePosterImage.addEventListener("click", function () {
  (0, _helperFunctions.closeComponent)(_elements.componentPosterImage, _elements.image);
});
_elements.closeDescription.addEventListener("click", function () {
  (0, _helperFunctions.closeComponent)(_elements.componentDescription, _elements.description);
});

// Item Buttons
_elements.heading.addEventListener("click", function () {
  (0, _helperFunctions.makeComponentsVisible)(_elements.componentHeading, _elements.heading);
  (0, _helperFunctions.moveButtonContainer)();
});
_elements.image.addEventListener("click", function () {
  (0, _helperFunctions.makeComponentsVisible)(_elements.componentPosterImage, _elements.image);
  (0, _helperFunctions.moveButtonContainer)();
});
_elements.description.addEventListener("click", function () {
  (0, _helperFunctions.makeComponentsVisible)(_elements.componentDescription, _elements.description);
  (0, _helperFunctions.moveButtonContainer)();
});

// Inputs
_elements.headingInput.addEventListener("input", function (event) {
  (0, _helperFunctions.updateTitle)(_elements.previewTitle, event.target.value);
});
_elements.descriptionInput.addEventListener("input", function (event) {
  (0, _helperFunctions.updateDescription)(_elements.previewDescription, event.target.value);
});

// Title Color Change
_elements.colorRed.addEventListener("click", function () {
  (0, _helperFunctions.updateTitleColor)(_elements.previewTitle, "text-red-600");
});
_elements.colorGreen.addEventListener("click", function () {
  (0, _helperFunctions.updateTitleColor)(_elements.previewTitle, "text-green-600");
});
_elements.colorBlue.addEventListener("click", function () {
  (0, _helperFunctions.updateTitleColor)(_elements.previewTitle, "text-blue-600");
});

// Title Alignment Change
_elements.alignLeft.addEventListener("click", function () {
  (0, _helperFunctions.updateTitleAlignment)(_elements.previewTitle, "self-start");
});
_elements.alignCenter.addEventListener("click", function () {
  (0, _helperFunctions.updateTitleAlignment)(_elements.previewTitle, "self-center");
});
_elements.alignRight.addEventListener("click", function () {
  (0, _helperFunctions.updateTitleAlignment)(_elements.previewTitle, "self-end");
});

// Handling Image
_elements.imageFileInput.addEventListener("change", function () {
  var imageFile = _elements.imageFileInput.files[0];
  if (_elements.previewImageContainer.classList.contains("invisible")) {
    _elements.previewImageContainer.classList.remove("invisible");
  }
  _elements.previewImage.setAttribute("src", URL.createObjectURL(imageFile));
});

// Canvas
_elements.downloadButton.addEventListener("click", function () {
  (0, _helperFunctions.generatePoster)(_elements.canvas, _elements.previewSection, _elements.previewTitle.innerText, _elements.previewImage, _elements.previewDescription.innerText);
});
},{"../helpers/helperFunctions.js":"../src/helpers/helperFunctions.js","../helpers/elements.js":"../src/helpers/elements.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64018" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../src/handlers/eventHandlers.js"], null)
//# sourceMappingURL=/eventHandlers.45072ac1.js.map