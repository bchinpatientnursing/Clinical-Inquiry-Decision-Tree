const quizData = {
    nodes: {
        0: {
            title: "Step 1: Check the Foundation",
            question: "Has anyone solved this before? Have you looked at the literature or BCH internal policies?",
            options: [
                { text: "Yes, I've checked the evidence.", nextNode: 1 },
                { text: "No, I need a head start on searching.", result: "ResultA" }
            ]
        },
        1: {
            title: "Step 2: The Evidence",
            question: "What does the science say about your idea?",
            options: [
                { text: "There's a clear 'Best Practice' already out there.", nextNode: 2 },
                { text: "The evidence is thin or totally missing.", nextNode: 3 }
            ]
        },
        2: {
            title: "Step 3: Your Goal",
            question: "The answer exists! What are you trying to do?",
            options: [
                { text: "Bring that best practice to my unit's bedside.", result: "ResultEBP" },
                { text: "Fix a local process or workflow snag.", result: "ResultQI" }
            ]
        },
        3: {
            title: "Step 3: Your Intention",
            question: "The science is missing. What's your next move?",
            options: [
                { text: "I want to prove a new theory for all of pediatrics.", result: "ResultResearch" },
                { text: "I just want to trial a fix here on my unit.", result: "ResultQI" }
            ]
        }
    },
    results: {
        ResultA: {
            title: "🔍 Let's Get You the Evidence",
            text: "Before we build, we check the blueprints. Use <b>Consensus.app</b> (AI Research) or reach out to the <b>BCH Librarian</b> tonight!",
            power: "Knowledge is power. Finding a single article can turn an 'idea' into a 'proposal' in 10 minutes.",
            terminal: true
        },
        ResultEBP: {
            title: "✨ This is Evidence-Based Practice!",
            text: "You aren't reinventing the wheel—you're making sure our kids get the <i>best</i> wheel available.",
            power: "Ask your Clinical Educator: 'What is our current policy vs. what the literature suggests?'",
            terminal: false
        },
        ResultQI: {
            title: "🚀 This is Quality Improvement!",
            text: "You've spotted a system gap. This is about making <i>our</i> hospital work better, safer, and faster.",
            power: "Ask your manager about a 'PDSA Cycle.' It's the fastest way to test a small change by tomorrow.",
            terminal: false
        },
        ResultResearch: {
            title: "🧬 This is Clinical Research!",
            text: "You're a pioneer. You've found a question that the world hasn't answered yet.",
            power: "Start a 'Reflection Log.' Documenting exactly where the knowledge gap is will be your first step for the IRB.",
            terminal: false
        }
    }
};

let currentIdea = "";

function startJourney() {
    currentIdea = document.getElementById('initial-idea').value;
    if(!currentIdea) return alert("Share your spark first!");
    document.getElementById('stage-start').classList.add('hidden');
    document.getElementById('stage-quiz').classList.remove('hidden');
    showNode(0);
}

function showNode(id) {
    const node = quizData.nodes[id];
    document.getElementById('quiz-content').innerHTML = `
        <h1>${node.title}</h1>
        <p>${node.question}</p>
        ${node.options.map((opt, i) => `<button class="option-btn" onclick="optClick(${id},${i})">${opt.text}</button>`).join('')}
    `;
}

function optClick(nodeId, optIdx) {
    const opt = quizData.nodes[nodeId].options[optIdx];
    opt.nextNode !== undefined ? showNode(opt.nextNode) : showResult(opt.result);
}

function showResult(resKey) {
    const res = quizData.results[resKey];
    document.getElementById('stage-quiz').classList.add('hidden');
    document.getElementById('stage-results').classList.remove('hidden');
    document.getElementById('result-classification').innerHTML = `<h1>${res.title}</h1>`;
    document.getElementById('result-teaching').innerHTML = `<p>${res.text}</p>`;
    document.getElementById('power-move-text').innerHTML = res.power;
    if(res.terminal) document.querySelector('.ms-form-container').classList.add('hidden');
}

function resetJourney() { location.reload(); }
