
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
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Load data and train the model:
   ```python
   # Load data
   X = np.load('noisy_signals.npy')
   Y = np.load('clean_signals.npy')

   # Reshape
   X = X[..., np.newaxis]
   Y = Y[..., np.newaxis]

   # Train
   autoencoder.fit(X, Y, epochs=10, batch_size=1)
   ```

4. Visualize results and save model if needed.

---

## 📊 Results

| Metric     | Value     |
|------------|-----------|
| Training Loss (MSE) | ~0.0012 (example) |
| Denoised Output     | Visual improvement in signal clarity |

_Detailed plots and comparisons available in the notebook._

---

## 📁 Repository Structure

```
├── ecg_denoising_autoencoder.ipynb  # Jupyter Notebook
├── noisy_signals.npy                # Noised ECG signals
├── clean_signals.npy                # Ground-truth ECG signals
├── model_weights.h5                 # Trained model weights (optional)
├── README.md                        # Project overview
```

---

## 👨‍💻 Author

**Rajesh Kumar**  
B.Tech CSE (AI ML)  
NIET, Greater Noida
[mailrajeshkumar124@gmail.com](mailto:mailrajeshkumar124@gmail.com)

---

## 📌 Acknowledgements

- [PhysioNet](https://physionet.org/) for providing high-quality biomedical datasets.
- Inspiration from academic papers on ECG signal processing and autoencoders.

---

## 📜 License

This project is licensed under the MIT License.

---
