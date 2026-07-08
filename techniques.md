---
layout: default
title: 2. Prompting Techniques
nav_order: 3
---

# Prompting Techniques

## 1. Standard Prompting
Asking a model to perform a task without adding any constraints like audience, tone, length, or structure.

```text
"Act as a blog writer and write me a blog on 'remote work habits'."
```


Slide away from basic questions and master these proven structural frameworks.

## 2. Zero-Shot Prompting
Asking the model to perform a task without giving it any examples. Ideal for simple tasks or highly capable models.

```text
"Act as a witty, casual blog writer. Write an 800-word blog post on 'remote work habits' specifically tailored for Gen Z professionals who struggle with work-life balance. Use a conversational tone, include actionable bullet points, and use a heading structure."
```

## 3. One-shot Prompting
One-Shot Prompting is an AI prompting technique where you provide the model with exactly one concrete example of the desired output before asking it to complete a task. Instead of just telling the AI what to do, you show it a single blueprint of the exact tone, structure, or logic you want. This bridges the gap between abstract instructions and your actual expectations, drastically improving the accuracy and formatting of the model's response on the very first try.

```text
"Act as a  senior workplace productivity coach with over 10 years of experience helping remote employees and freelancers improve their work habits. Your writing style is friendly, motivational, and easy to understand. Write engaging blog introductions that encourage readers to continue reading.
Example:

Input:
Topic: Healthy Habits: 8 Good Habits to Have in Life

Output:
Good habits benefit our physical, emotional, spiritual, and mental health. These are the habits that bring you closer to living your best life. They help you become more productive, energetic, and resilient while improving your overall well-being. Whether it's exercising regularly, managing your time effectively, or maintaining a positive mindset, small daily habits can create lasting positive change. If you're unsure where to begin, read on to discover eight simple habits that can help you build a healthier and more successful life.

Now write an introduction for the following topic:

Topic: Remote Work Habits"
```
