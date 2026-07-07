---
layout: default
title: 4. Resources & Links
nav_order: 5
---

# Resources, Frameworks & Toolkits

Thank you for attending the presentation! This resource hub is designed to help you transition from theory to daily practice. Bookmark this page to use these frameworks as a quick reference when building your prompts.

---

## 📐 Foundational Prompting Frameworks

When writing complex prompts on the fly, relying on a mental framework prevents you from leaving out crucial constraints. Here are two industry-standard mental models:

### 1. The "CREATE" Framework (Best for Content & Business Tasks)
* **C**haracter: Assign a specific role or persona *(e.g., "Act as a veteran copywriter...")*
* **R**equest: Define the primary task clearly *(e.g., "Draft an onboarding email...")*
* **E**xamples: Provide 1 or 2 few-shot samples of style or format.
* **A**djustments: Specify constraints, tone limits, and length guidelines.
* **T**ype of Output: Pick a layout style *(e.g., Markdown table, bullet points, JSON)*
* **E**xecute: Run the initial prompt, evaluate, and iterate.

### 2. The "RTCE" Framework (Best for Technical, Legal & Coding Tasks)
* **R**ole: Who is the AI? *(e.g., "Senior DevOps Engineer")*
* **T**ask: What is the exact mechanical execution? *(e.g., "Write a bash script")*
* **C**onstraints: What are the strict boundaries? *(e.g., "No external libraries, compatible with Ubuntu 22.04")*
* **E**xpectation: What does success look like? *(e.g., "Output clean code blocks with zero conversational intro text")*

---

## 📋 Copy-Paste Base Templates

Copy these raw system prompt skeletons into your favorited AI notes to use as starters.

### Template A: The Expert Consultant (Problem Solving)
```text
Role: You are an expert consultant in [Field/Domain] with 15+ years of experience.
Context: I am trying to solve [Specific Problem/Challenge] within [Industry/Context].
Task: Provide a prioritized list of [Solutions/Strategies] to address this.
Constraints: 
- Rank the solutions by impact vs. implementation effort.
- Do not suggest generic advice; focus purely on highly actionable tactics.
Format: Present your findings using bold headers for each strategy followed by a brief 2-sentence breakdown.
