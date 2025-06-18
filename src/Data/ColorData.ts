import { Color } from "three";

const ColorData = {
    White: new Color().setRGB(1, 1, 1),
    Black: new Color().setRGB(0, 0, 0),
    Red: new Color().setRGB(1, 0, 0),
    Green: new Color().setRGB(0, 1, 0),  // Fixed
    Blue: new Color().setRGB(0, 0, 1),   // Fixed
    Yellow: new Color().setRGB(1, 1, 0),
    Cyan: new Color().setRGB(0, 1, 1),
    Magenta: new Color().setRGB(1, 0, 1),
    Orange: new Color().setRGB(1, 0.5, 0),
    Purple: new Color().setRGB(0.5, 0, 0.5),
    Gray: new Color().setRGB(0.5, 0.5, 0.5),
    Pink: new Color().setRGB(1, 0.75, 0.8),
    Brown: new Color().setRGB(0.6, 0.3, 0.1),
    LightBlue: new Color().setRGB(0.4, 0.6, 1),
};

export default ColorData;
