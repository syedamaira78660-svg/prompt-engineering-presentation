# Context Placement in Prompt Engineering

## Overview

The effectiveness of a prompt depends not only on **what information you provide**, but also **where you place it**. Research has shown that Large Language Models (LLMs) do not treat every part of a long prompt equally. Instead, they often exhibit a **positional bias**, giving greater attention to information near the **beginning** and **end** of a prompt while being less effective at using information buried in the **middle**.

This behavior is commonly known as the **"Lost in the Middle"** phenomenon.

---

## Key Insight

> **The position of important information within a prompt can significantly affect an LLM's ability to retrieve, retain, and use that information.**

In many current LLMs, important information is typically used most effectively when it appears near the beginning of the prompt, followed by the end. Information placed in the middle of long prompts is more likely to be overlooked.

**Typical Information Retention Pattern**

```text
Beginning > End > Middle
```

> **Note:** This is a general trend observed in many modern LLMs—not an absolute rule. Performance varies depending on the model, prompt design, and task.

---

## The "Lost in the Middle" Effect

The paper **"Lost in the Middle: How Language Models Use Long Contexts" (Liu et al., 2023)** evaluated several state-of-the-art language models by placing the same relevant information at different positions within long prompts.

### Key Findings

- Information placed at the **beginning** of a prompt was retrieved most accurately.
- Information placed at the **end** of a prompt also achieved strong retrieval performance due to recency.
- Information located in the **middle** of long prompts was significantly more likely to be overlooked.
- Simply increasing the context window (for example, 32K, 100K, or more tokens) does **not** guarantee that the model will effectively use information throughout the entire context.
- Longer prompts can reduce retrieval accuracy when important information is poorly positioned or surrounded by irrelevant content.

---

## Why Does This Matter?

Modern AI applications often use long prompts containing conversation history, retrieved documents, code, or datasets. If important instructions or facts are buried in the middle of this context, the model may not use them effectively.

Poor context placement can lead to:

- Ignoring important instructions
- Missing relevant information
- Incomplete or incorrect responses
- Reduced reasoning quality
- Hallucinations caused by overlooked supporting evidence

Organizing prompts effectively can improve response quality without changing the model itself.

---

## Best Practices

### ✅ Place Primary Instructions First

Clearly state the main objective at the beginning of the prompt.

**Good**

```text
Summarize the following research paper.

<Research Paper Content>
```

**Less Effective**

```text
<Research Paper Content>

Summarize the paper.
```

---

### ✅ Put Important Context Near the Beginning

Present the most relevant facts, constraints, or reference information before lengthy supporting material.

**Example**

```text
Role:
You are a cybersecurity expert.

Objective:
Explain the vulnerability.

Reference Material:
...
```

---

### ✅ Reinforce Critical Constraints Near the End

For long prompts, repeat important formatting or behavioral requirements near the end.

**Example**

```text
Remember:
- Respond only in JSON.
- Do not include explanations.
```

This helps keep critical instructions prominent even after processing a large amount of context.

---

### ✅ Order Retrieved Documents by Relevance (RAG)

In Retrieval-Augmented Generation (RAG), arrange retrieved documents strategically.

**Recommended order**

```text
Most Relevant Document
Supporting Document
Additional Context
```

Avoid placing the most relevant document in the middle of numerous less relevant documents whenever possible.

---

### ✅ Keep Prompts Focused

Avoid including unnecessary context simply because the model supports a large context window.

A shorter, well-structured prompt is often more effective than a longer, cluttered one.

---

## Practical Applications

### Chatbots

- Place system instructions at the beginning.
- Reinforce important behavioral rules during long conversations.

### Retrieval-Augmented Generation (RAG)

- Rank retrieved documents by relevance.
- Place the most relevant documents first (or, depending on the workflow, reinforce key information near the end).

### Document Question Answering

- Present the most relevant sections before supporting material.

### Code Generation

- Place coding requirements and constraints before large code snippets.

### Summarization

- State the summarization task before the document rather than after it.

---

## Recommended Prompt Structure

```text
1. System Role or Objective
2. Primary Instructions
3. Important Context
4. Supporting Information
5. Examples (if needed)
6. Final Reminder or Constraints
```

This structure aligns well with how many current LLMs process long prompts.

---

## Key Takeaways

- The position of information within a prompt can significantly influence model performance.
- Many LLMs retrieve information more effectively from the beginning and end of long prompts than from the middle.
- Avoid burying critical instructions or key facts within lengthy contexts.
- Organize prompts so that essential information appears early, and reinforce important constraints near the end when appropriate.
- Larger context windows increase capacity but do not guarantee that every part of the prompt receives equal attention.

---

## Reference

Liu, N. F., et al. (2023). **Lost in the Middle: How Language Models Use Long Contexts.**

**Paper:** https://arxiv.org/abs/2307.03172
