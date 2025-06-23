export function DownloadScreenShot() {
    const canvas = document.querySelector("canvas");
    if (canvas) {
        const dataURL = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = dataURL;
        link.download = "screenshot.png";
        link.click();
    }
}