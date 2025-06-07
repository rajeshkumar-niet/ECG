function showSection(id) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

document.getElementById('upload-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const form = e.target;
    const fileInput = form.querySelector('input[type="file"]');
    const file = fileInput.files[0];

    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await fetch('http://localhost:5000/process', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'denoised_ecg.csv';
        document.body.appendChild(a);
        a.click();
        a.remove();

        alert('Your ECG has been denoised and downloaded successfully. Thank you for visiting!');
    } catch (error) {
        alert('Error processing file: ' + error.message);
    }
});