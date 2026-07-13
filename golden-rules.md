---
layout: default
title: The 5 Golden Rules of Prompt Engineering
nav_order: 4
---

# The 5 Golden Rules of Prompt Engineering

To consistently get high-quality responses from AI, every prompt should include **five essential components**. These components help the AI understand your intent, reduce ambiguity, and produce more accurate, relevant, and well-structured responses.

## The Prompt Formula

```text
Role + Task + Context + Constraints + Output Format
```

---

# Rule 1: Role 👤

## Tell AI Who It Should Become

A **role** defines the AI's expertise, perspective, and communication style before it begins the task.

Assigning a role helps AI respond like the right expert instead of giving a generic answer.

### Why it matters

- Produces responses from the right perspective
- Adjusts tone and expertise
- Makes answers more relevant

### Example

```text
Act as an experienced career coach who helps university students prepare for software engineering jobs.
```

> At this stage, AI knows **who it is**, but not **what it should do**.

---

# Rule 2: Task 🎯

## Tell AI What You Want

The **task** clearly defines what you want the AI to accomplish.

Without a task, AI has to guess your objective.

### Why it matters

- Gives AI a clear goal
- Reduces misunderstanding
- Produces focused responses

### Example

```text
Act as an experienced career coach who helps university students prepare for software engineering jobs.

Help me prepare for my first software engineering interview.
```

> Now AI knows **who it is** and **what it should do**.

---

# Rule 3: Context 📖

## Give AI the Background

**Context** provides the information AI needs to understand your situation.

The more relevant context you provide, the better AI can personalize its response.

### Why it matters

- Makes responses more relevant
- Reduces assumptions
- Improves accuracy

### Example

```text
Act as an experienced career coach who helps university students prepare for software engineering jobs.

Help me prepare for my first software engineering interview.

I know basic Python programming but have never attended a technical interview before.
```

> Now AI understands the situation and can tailor its advice.

---

# Rule 4: Constraints 📏

## Tell AI the Rules

**Constraints** specify the requirements and limitations that AI must follow while completing the task.

### Examples of Constraints

- Use simple English.
- Keep the answer under 500 words.
- Avoid unnecessary theory.
- Include practical advice.

### Why it matters

- Keeps responses focused
- Prevents unwanted output
- Saves editing time

### Example

```text
Act as an experienced career coach who helps university students prepare for software engineering jobs.

Help me prepare for my first software engineering interview.

I know basic Python programming but have never attended a technical interview before.

Use simple English.
Keep the answer under 500 words.
Avoid unnecessary theory.
Include practical advice.
```

> AI now knows both **what to do** and **how to do it**.

---

# Rule 5: Output Format 📄

## Tell AI How to Present the Response

The **output format** tells AI how to organize and structure the final answer.

### Common Formats

- Bullet points
- Table
- Email
- Blog post
- Markdown
- JSON
- Checklist
- Step-by-step guide

### Why it matters

- Improves readability
- Makes the response easier to use
- Reduces manual formatting

### Complete Prompt

```text
Act as an experienced career coach who helps university students prepare for software engineering jobs.

Help me prepare for my first software engineering interview.

I know basic Python programming but have never attended a technical interview before.

Use simple English.
Keep the answer under 500 words.
Avoid unnecessary theory.
Include practical advice.

Present the response as:
1. Interview preparation checklist
2. Common interview questions
3. A one-week study plan
4. Key takeaways
```

> AI now has everything it needs to produce a high-quality response.

---

# Summary

A great prompt answers five simple questions:

| Rule | Question |
|------|----------|
| 👤 **Role** | Who should AI become? |
| 🎯 **Task** | What should AI do? |
| 📖 **Context** | What background should AI know? |
| 📏 **Constraints** | What rules should AI follow? |
| 📄 **Output Format** | How should the response be presented? |

## Remember

```text
Role + Task + Context + Constraints + Output Format
        ↓
     High-Quality Prompt
```

The clearer your instructions, the better the AI's response.
