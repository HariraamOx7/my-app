
import { useState } from "react";

export default function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState(null);

  const calculateBMI = (e) => {
    e.preventDefault();

    const weightKg = Number(weight);
    const heightM = Number(height) / 100;

    if (weightKg <= 0 || heightM <= 0) {
      setResult({ error: "Please enter valid weight and height." });
      return;
    }

    const bmi = weightKg / (heightM * heightM);

    let category = "";
    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 25) category = "Normal weight";
    else if (bmi < 30) category = "Overweight";
    else category = "Obesity";

    setResult({ bmi: bmi.toFixed(1), category });
  };

  return (
    <main style={styles.page}>
      <section style={styles.card}>
        <h1>BMI Calculator</h1>

        <form onSubmit={calculateBMI} style={styles.form}>
          <label>
            Weight (kg)
            <input
              type="number"
              min="1"
              step="0.1"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="e.g. 70"
              required
              style={styles.input}
            />
          </label>

          <label>
            Height (cm)
            <input
              type="number"
              min="1"
              step="0.1"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="e.g. 175"
              required
              style={styles.input}
            />
          </label>

          <button type="submit" style={styles.button}>
            Calculate BMI
          </button>
        </form>

        {result && (
          <div style={styles.result}>
            {result.error ? (
              <p>{result.error}</p>
            ) : (
              <>
                <h2>Your BMI: {result.bmi}</h2>
                <p>Category: {result.category}</p>
              </>
            )}
          </div>
        )}
      </section>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "grid",
    placeItems: "center",
    background: "#f2f6ff",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    width: "min(400px, 90%)",
    padding: "32px",
    borderRadius: "16px",
    background: "#ffffff",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.12)",
    textAlign: "center",
  },
  form: {
    display: "grid",
    gap: "16px",
    textAlign: "left",
  },
  input: {
    display: "block",
    width: "100%",
    boxSizing: "border-box",
    marginTop: "7px",
    padding: "12px",
    border: "1px solid #cbd5e1",
    borderRadius: "8px",
    fontSize: "16px",
  },
  button: {
    padding: "12px",
    border: "none",
    borderRadius: "8px",
    background: "#2563eb",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  result: {
    marginTop: "24px",
    padding: "16px",
    borderRadius: "10px",
    background: "#eff6ff",
  },
};
