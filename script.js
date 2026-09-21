* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #2f3640;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.container {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  width: 90%;
  max-width: 450px;
}

.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.status-badge {
  background: rgba(255, 255, 255, 0.2);
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  transition: background-color 0.3s ease;
}

.view-buttons {
  display: flex;
  gap: 8px;
}

.view-buttons button {
  background: rgba(255, 255, 255, 0.15);
  border: none;
  color: #ffffff;
  padding: 5px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: bold;
  transition: background 0.2s;
}

.view-buttons button:hover {
  background: rgba(255, 255, 255, 0.25);
}

h1 {
  margin-bottom: 20px;
  font-size: 1.8rem;
  font-weight: 600;
}

.time-inputs {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
}

.input-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}

.input-group label {
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  opacity: 0.8;
}

.input-group input {
  width: 70px;
  padding: 6px 10px;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(0, 0, 0, 0.2);
  color: #ffffff;
  font-size: 1rem;
  text-align: center;
  font-weight: bold;
  outline: none;
}

.input-group input:focus {
  border-color: rgba(255, 255, 255, 0.5);
}

.timer-display {
  font-size: 4.5rem;
  font-weight: 700;
  margin: 15px 0;
  letter-spacing: 2px;
  font-variant-numeric: tabular-nums;
}

.controls {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 10px;
}

.controls button {
  background-color: #ffffff;
  color: #2f3640;
  border: none;
  padding: 12px 26px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  text-transform: uppercase;
  transition: transform 0.1s, opacity 0.2s;
}

.controls button:hover:not(:disabled) {
  transform: translateY(-2px);
  background-color: #f1f2f6;
}

.controls button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

/* Dynamic styling for Picture-in-Picture window scaling */
body.pip-mode {
  min-height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2f3640;
}

body.pip-mode .container {
  width: 100vw;
  height: 100vh;
  max-width: none;
  border-radius: 0;
  border: none;
  box-shadow: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  box-sizing: border-box;
}

body.pip-mode .timer-display {
  font-size: clamp(2.5rem, 15vw, 5rem);
  margin: 10px 0;
}

body.pip-mode h1 {
  font-size: clamp(1.2rem, 5vw, 1.8rem);
  margin-bottom: 10px;
}
