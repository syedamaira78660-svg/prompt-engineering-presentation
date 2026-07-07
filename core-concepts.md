---
layout: default
title: 1. Core Concepts
nav_order: 2
---

# Core Concepts in Prompt Engineering

Before writing prompts, we must understand what is happening under the hood. An LLM doesn't "think" like a human; it predicts the most statistically likely next word (token) based on patterns in its training data.

## 1. Tokenization: The Currency of LLMs
LLMs do not read words; they read chunks of characters called **tokens**. 
* 100 words is roughly equal to 133 tokens.
* If a prompt is ambiguous, the statistical probability splits, leading to generic or "hallucinated" answers. Clear prompts tighten the mathematical probability toward the correct answer.

## 2. The Garbage In, Garbage Out (GIGO) Rule
AI performance is directly tied to input quality. 
* **Bad Input:** "Write a blog post about productivity." (Result: Clichés, generic bullet points).
* **Good Input:** "Write a 500-word case study on how time-blocking helps remote software engineers reduce burnout." (Result: Specific, actionable, targeted).

## 3. The Anatomy of a Perfect Prompt
A master-level prompt typically contains four elements:

| Element | Purpose | Example |
| :--- | :--- | :--- |
| **Role/Persona** | Tells the AI *who* it is simulating. | "Act as a veteran data analyst..." |
| **Context** | Explains the background and constraints. | "We are launching a new app and have 100 user reviews..." |
| **Task/Instruction** | Explicitly defines what to do. | "Identify the top 3 recurring feature requests..." |
| **Output Format** | Defines the structure of the response. | "Present this in a Markdown table with columns: Feature, Frequency, Priority." |
