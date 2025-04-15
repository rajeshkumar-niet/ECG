# ECG Denoising using 1D CNN Autoencoder

This project focuses on removing noise from ECG signals using a deep learning-based 1D Convolutional Autoencoder architecture. The model is trained on artificially noised signals created using standard ECG and noise datasets like **MIT-BIH** and **NSTDB**.

## 🧠 Objective

To build a deep learning model capable of denoising ECG signals and preserving essential cardiac features by:
- Adding realistic noise to clean ECG signals.
- Training a 1D CNN Autoencoder on the noisy-clean signal pairs.
- Evaluating the model’s ability to generalize across varying noise types.

---

## 🗂️ Datasets Used

1. **MIT-BIH Normal Sinus Rhythm Database**
   - Clean ECG signals
   - Available via PhysioNet

2. **NSTDB (Noise Stress Test Database)**
   - Noise types: baseline wander, muscle artifacts, electrode motion
   - Available via PhysioNet

---

## 🧪 Methodology

1. **Data Preprocessing**
   - ECG signals were resampled to a common frequency (360Hz).
   - Trimming/Padding to standard length (e.g., 650000 samples).
   - Noise was added with varying Signal-to-Noise Ratios (SNRs).

2. **Model Architecture**
   - A symmetric 1D CNN Autoencoder.
   - Encoder compresses input signal.
   - Decoder reconstructs denoised ECG.
   - Trained using MSE loss and Adam optimizer.

3. **Evaluation**
   - Loss curves
   - Visual comparison between original, noisy, and denoised signals

---

## 🛠️ Tech Stack

- Python
- TensorFlow / Keras
- NumPy
- Matplotlib
- Google Colab (for training and visualization)

---

## 🚀 How to Run

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/ecg-denoising-cnn.git
   cd ecg-denoising-cnn
