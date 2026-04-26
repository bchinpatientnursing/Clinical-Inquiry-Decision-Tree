/* --- GLOBAL THEME --- */
:root {
    --bch-teal: #0a9396;
    --bch-dark: #005f73;
    --bch-light: #94d2bd;
    --accent: #ee9b00;
    --bg-color: #f0f4f5;
}

body {
    font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    background-color: var(--bg-color);
    margin: 0;
    padding: 20px;
    display: flex;
    justify-content: center;
    min-height: 100vh;
}

.main-container {
    width: 100%;
    max-width: 650px;
}

/* --- CARD SYSTEM --- */
.card {
    background: white;
    padding: 35px;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
    text-align: center;
    transition: opacity 0.4s ease, transform 0.4s ease;
}

.hidden {
    display: none;
}

/* --- TYPOGRAPHY --- */
h1 {
    color: var(--bch-dark);
    font-size: 1.8rem;
    margin-bottom: 15px;
}

h2 {
    background: linear-gradient(120deg, var(--bch-teal), var(--bch-light));
    color: white;
    padding: 15px;
    border-radius: 10px;
    font-size: 1.4rem;
}

p {
    line-height: 1.6;
    color: #444;
}

/* --- INPUTS & BUTTONS --- */
textarea {
    width: 100%;
    min-height: 120px;
    padding: 15px;
    border: 2px solid #e0e0e0;
    border-radius: 12px;
    font-family: inherit;
    font-size: 1rem;
    box-sizing: border-box;
    margin-top: 10px;
    outline: none;
}

textarea:focus {
    border-color: var(--bch-teal);
}

.primary-btn {
    background: var(--bch-teal);
    color: white;
    border: none;
    padding: 18px 30px;
    border-radius: 50px;
    width: 100%;
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;
    margin-top: 20px;
}

.primary-btn:hover {
    background: var(--bch-dark);
}

.option-btn {
    background: white;
    border: 2px solid var(--bch-light);
    padding: 18px;
    border-radius: 12px;
    width: 100%;
    margin-bottom: 12px;
    text-align: left;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.2s;
}

.option-btn:hover {
    background: #f0f9f7;
    border-color: var(--bch-teal);
}

.secondary-btn {
    background: #e0f2f1;
    color: var(--bch-dark);
    border: none;
    padding: 12px 25px;
    border-radius: 50px;
    margin-top: 30px;
    cursor: pointer;
}

/* --- PEDS INNOVATION ELEMENTS --- */
.icon {
    font-size: 3.5rem;
    margin-bottom: 10px;
}

.knowledge-boost {
    background: #fff9db;
    border-left: 6px solid var(--accent);
    padding: 20px;
    text-align: left;
    margin: 25px 0;
    border-radius: 0 12px 12px 0;
}

.knowledge-boost h4 {
    margin-top: 0;
    color: #856404;
}

/* --- MS FORM INTEGRATION --- */
.ms-form-container {
    margin-top: 40px;
    padding-top: 25px;
    border-top: 2px solid #eee;
}

.embedded-form-wrapper {
    border-radius: 15px;
    overflow: hidden;
    box-shadow: inset 0 2px 10px rgba(0,0,0,0.05);
    background: #fff;
    margin-top: 15px;
    border: 1px solid #ddd;
}

/* --- MOBILE RESPONSIVENESS --- */
@media (max-width: 600px) {
    body { padding: 10px; }
    .card { padding: 20px; }
    h1 { font-size: 1.5rem; }
    .embedded-form-wrapper iframe {
        height: 850px; /* Forms get longer on mobile stacks */
    }
}
