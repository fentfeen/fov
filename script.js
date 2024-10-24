document.addEventListener("DOMContentLoaded", function () {
    const fovInput = document.getElementById("fovInput");
    const fovSlider = document.getElementById("fovSlider");
    const fovCircle = document.getElementById("fovCircle");

    // Update circle size based on FOV value
    function updateCircleSize(fovValue) {
        const diameter = fovValue * 2; // Diameter based on FOV
        fovCircle.style.width = `${diameter}px`;
        fovCircle.style.height = `${diameter}px`;
    }

    // Event listener for the text input
    fovInput.addEventListener("input", function () {
        const fovValue = parseInt(fovInput.value) || 0; // Default to 0 if NaN
        fovSlider.value = fovValue; // Update slider position
        updateCircleSize(fovValue);
    });

    // Event listener for the slider
    fovSlider.addEventListener("input", function () {
        const fovValue = parseInt(fovSlider.value) || 0; // Default to 0 if NaN
        fovInput.value = fovValue; // Update text input value
        updateCircleSize(fovValue);
    });

    // Initialize circle size with default slider value
    updateCircleSize(fovSlider.value);
});
