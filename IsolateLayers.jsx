// This script toggles the shy switch for non-selected layers in the active composition.

(function shyOppositeLayers() {
    var comp = app.project.activeItem;
    if (!comp || !(comp instanceof CompItem)) {
        alert("No active composition.");
        return;
    }

    app.beginUndoGroup("Shy Opposite Layers");

    // Loop through all layers in the composition
    for (var i = 1; i <= comp.numLayers; i++) {
        var layer = comp.layer(i);
        // Check if the layer is selected
        if (!layer.selected) {
            // If the layer is not selected, enable the shy switch
            layer.shy = true;
        } else {
            // If the layer is selected, make sure the shy switch is off
            layer.shy = false;
        }
    }

    // Toggle the master shy switch to reflect changes
    comp.hideShyLayers = true;

    app.endUndoGroup();
})();
