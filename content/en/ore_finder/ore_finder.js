let options = {
    showOutlines: false,    // Debugging - Show bounding boxes
    showAxes: false,        // Debugging - Show the scene's axes
    showGrid: false,        // Debugging - Show coordinate grid
    autoResize: false,      // Whether to automatically resize the canvas
    controls: {
        enabled: true,      // Toggle controls
        zoom: true,         // Toggle zooming
        rotate: true,      // Toggle rotation
        pan: false           // Toggle panning
    },
    camera: {               // Camera position
        x: 20,
        y: 25,
        z: 30,
        target: [0, 0, 0]   // Where the camera should look
    },
    canvas: {               // Dimensions the canvas starts off with (undefined -> use window size)
        width: 80,
        height: 80
    },
    pauseHidden: true,       // Whether to pause animations that aren't currently visible
    sendStats: false,
};
const buttons = [
    ["andesiteButton", "andesite"],
    ["clayButton", "clay"],
    ["coalButton", "coal_ore"],
    ["diamondButton", "diamond_ore"],
    ["dirtButton", "dirt"],
    ["goldButton", "gold_ore"],
    ["graniteButton", "granite"],
    ["gravelButton", "gravel"],
    ["ironButton", "iron_ore"],
    ["lapisButton", "lapis_ore"],
    ["redstoneButton", "redstone_ore"],
    ["sandButton", "sand"]
]
const modelsRenderers = {};
let firstBlockSelected=null;
let secondBlockSelected=null;


function display(shouldCreateBlockPredicate, onClickListener, columnId) {
    for (let [buttonId, blockName] of buttons) {
        console.log(shouldCreateBlockPredicate(blockName),blockName)
        if (!shouldCreateBlockPredicate(blockName)) continue
        const element = document.getElementById(buttonId + columnId);
        const modelRender = new ModelRender(options, element);
        modelRender.render(["block/" + blockName]);
        element.addEventListener("modelRender", (function (e) {
                let t = e.detail.models;
                for (let n = 0; n < t.length; n++)
                    t[n].rotation.y += .01
            }
        ))
        modelsRenderers[blockName] = modelRender
        element.addEventListener("click", onClickListener(element, buttonId, blockName))
    }
}

function step1(){
    firstBlockSelected=null;
    secondBlockSelected=null;
    display(() => true, (element, buttonId, blockName) => (() => step2(element, buttonId, blockName)),"1")
}

step1()




function step2(element, buttonId, blockName) {
    firstBlockSelected=blockName;
    Object.entries(modelsRenderers).forEach(([key, renderer]) => {
        if (key !== blockName) {
            renderer.dispose()
        }
    });
    ModelRender.cache.clearAll()
    display(block=>block!==blockName,(element, buttonId, blockName) => (() => step3(element, buttonId, blockName)),"2")
}

function step3(element, buttonId, blockName) {
    secondBlockSelected=blockName
    console.log({firstBlockSelected,secondBlockSelected})
}