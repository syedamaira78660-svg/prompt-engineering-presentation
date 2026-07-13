# Context Placement in Prompt Engineering

## Overview

The effectiveness of a prompt depends not only on **what information is provided**, but also **where that information is placed**. Research has shown that Large Language Models (LLMs) do not treat every part of a long prompt equally. Instead, they exhibit a positional bias, giving more attention to information located at the **beginning** and **end** of the prompt while often overlooking information in the **middle**.

This behavior is commonly referred to as the **"Lost in the Middle"** phenomenon.

---

## Key Insight

> **The position of important information within a prompt significantly affects an LLM's ability to retrieve, retain, and use that information.**

Models generally perform best when important information is placed at the beginning of the prompt, followed by the end, while performance drops when the same information is placed in the middle.

**Information Retention Order:**

```text
Beginning > End > Middle
```

---

## The "Lost in the Middle" Effect

The paper **"Lost in the Middle: How Language Models Use Long Contexts" (Liu et al., 2023)** evaluated several state-of-the-art language models by placing the same relevant information at different positions within long prompts.

### Key Findings

- Information placed at the **beginning** of the prompt is retrieved most accurately.
- Information placed at the **end** of the prompt is also recalled effectively due to its recency.
- Information buried in the **middle** of long prompts is significantly more likely to be ignored or forgotten.
- Increasing the context window (e.g., 32K, 100K, or more tokens) does **not** guarantee that the model will effectively utilize information throughout the entire context.
- Longer prompts can actually reduce retrieval accuracy if important information is poorly positioned.

---

## Why Does This Matter?

When prompts become long due to conversation history, retrieved documents, code, or large datasets, critical instructions can become less effective if they are hidden in the middle.

Poor context placement may result in:
- Ignoring important instructions
- Missing relevant information
- Incorrect or incomplete responses
- Reduced reasoning accuracy
- Hallucinations caused by overlooking supporting facts

Proper context placement helps improve response quality without changing the model itself.

---

## Best Practices

### ✅ Place Primary Instructions First

The first part of the prompt should clearly state the main objective.

**Example**

```text
Summarize the following research paper.

<Research Paper Content>
```

Instead of:

```text
<Research Paper Content>

Summarize the paper.
```

---

### ✅ Put Important Context Near the Beginning

Provide the most relevant facts, constraints, or reference information before lengthy supporting material.

Example:

```text
Role:
You are a cybersecurity expert.

Objective:
Explain the vulnerability.

Reference Material:
...
```

---

### ✅ Reinforce Important Constraints at the End

If the prompt is very long, repeat critical constraints near the end.

Example:

```text
Remember:
- Respond only in JSON.
- Do not include explanations.
```

This helps ensure important formatting or behavioral requirements remain prominent.

---

### ✅ Order Retrieved Documents by Relevance (RAG)

In Retrieval-Augmented Generation (RAG), arrange retrieved documents strategically.

Preferred order:

```text
Most Relevant Document
Supporting Document
Additional Context
```

Avoid placing the most relevant document in the middle of many less relevant ones.

---

### ✅ Keep Prompts Focused

Avoid adding unnecessary context simply because the model supports a large context window.

A shorter, well-structured prompt is often more effective than a longer, cluttered one.

---

## Practical Applications

### Chatbots

- Keep system instructions at the beginning.
- Reinforce important behavioral rules when conversations become lengthy.

### Retrieval-Augmented Generation (RAG)

- Rank retrieved documents by relevance.
- Place the most useful documents first (or occasionally last).

### Document Question Answering

- Present the most relevant sections before supporting material.

### Code Generation

- Put coding requirements and constraints before large code snippets.

### Summarization

- State the summarization task before the document rather than after it.

---

## Prompt Structure Recommendation

```text
1. System Role / Objective
2. Primary Instructions
3. Important Context
4. Supporting Information
5. Examples (if needed)
6. Final Reminder or Constraints
```

This structure aligns with how current LLMs tend to process long prompts.

---

## Key Takeaways

- The location of information inside a prompt significantly impacts model performance.
- LLMs generally retrieve information more effectively from the beginning and end of long prompts.
- Avoid placing essential instructions or facts in the middle of long contexts.
- Organize prompts so that the most important information appears first, with final constraints reinforced at the end.
- Longer context windows do not guarantee better information retrieval—effective prompt organization remains essential.

---

## Reference

Liu, N. F., et al. (2023). **Lost in the Middle: How Language Models Use Long Contexts.** arXiv:2307.03172.

**Paper:** https://arxiv.org/abs/2307.03172
