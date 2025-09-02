# IsolateLayers

After Effects script to isolate selected layers by hiding all others using the shy switch, instantly decluttering your timeline.

## What it does

**IsolateLayers** creates a clean, focused timeline by:

1. **Makes all unselected layers shy** (hides them)
2. **Keeps selected layers visible** (removes shy from them)
3. **Enables master shy switch** to hide the shy layers
4. **Single undo** reverts everything

Perfect for focusing on specific layers without the distraction of a cluttered timeline.

## Installation

1. Copy `IsolateLayers.jsx` to your After Effects Scripts folder:
   ```
   Windows: C:\Program Files\Adobe\Adobe After Effects [version]\Support Files\Scripts\
   macOS: /Applications/Adobe After Effects [version]/Scripts/
   ```

2. Restart After Effects

## Usage

1. **Select the layers you want to work with** (the ones you want to keep visible)
2. Run **File → Scripts → IsolateLayers.jsx**
3. **Timeline is now clean** - only your selected layers are visible
4. **Toggle master shy switch** (🙈 button) to show/hide all layers again

## Use Cases

### **Animation Focus**
- Select character layers, hide everything else
- Focus on specific animation elements

### **Complex Compositions**  
- Hide background layers when working on foreground
- Isolate effect layers for fine-tuning

### **Client Reviews**
- Show only relevant layers for presentation
- Hide work-in-progress elements

### **Troubleshooting**
- Isolate problematic layers
- Focus on specific layer interactions

## Features

- **Instant declutter** - one click to clean timeline
- **Smart toggle** - selected layers stay visible, others hidden
- **Master shy enabled** - automatically activates shy layer hiding
- **Undo support** - single undo brings back full timeline
- **Non-destructive** - doesn't delete or disable layers

## Workflow Tips

**Before running:**
```
✅ Layer 1 (selected - will stay visible)
❌ Layer 2 (unselected - will be hidden)  
❌ Layer 3 (unselected - will be hidden)
✅ Layer 4 (selected - will stay visible)
❌ Layer 5 (unselected - will be hidden)
```

**After running:**
```
✅ Layer 1 (visible)
✅ Layer 4 (visible)
(Layers 2, 3, 5 are shy/hidden)
```

## Pro Tips

- **Select nothing** = hides ALL layers (useful for starting fresh)
- **Select everything** = shows ALL layers (removes all shy switches)
- **Master shy button** = toggle to temporarily show hidden layers
- **Assign hotkey** = for instant timeline decluttering

## Requirements

- Adobe After Effects (any version with scripting support)
- Active composition with layers

## Keyboard Shortcut Suggestion

Assign this script to a hotkey like **Shift+H** for instant "hide others" functionality.

## License

MIT
