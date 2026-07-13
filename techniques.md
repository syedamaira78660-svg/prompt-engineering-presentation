---
layout: default
title: 2. Prompting Techniques
nav_order: 3
---
### 1. Standard Prompting

Standard prompting is the simplest way to interact with an AI model.

**Example 1 -- Writing**

``` text
Write a blog about remote work habits.
```

**Example 2 -- Software Development**

``` text
Create a web application using HTML, CSS, and JavaScript that allows users to add prompts, save them, and view the saved prompts.
```

------------------------------------------------------------------------

### 2. Zero-Shot Prompting

Zero-shot prompting provides detailed instructions without examples.

**Example 1 -- Writing**

``` text
Act as a witty, casual blog writer.

Write an 800-word blog post on "Remote Work Habits" specifically for Gen Z professionals who struggle with work-life balance.

Requirements:
- Conversational tone
- Practical tips
- Headings
- Bullet points
- Motivating conclusion
```

**Example 2 -- Software Development**

``` text
Act as a senior frontend developer.

Create a responsive Prompt Manager web application using HTML, CSS, and JavaScript.

Requirements:
- Modern dashboard UI
- Add Prompt form (Title, Category, Prompt)
- Save using Local Storage
- Display prompt cards
- Search by title
- Filter by category
- Edit/Delete prompts
- Responsive design
- Vanilla HTML, CSS and JavaScript only
```

------------------------------------------------------------------------

### 3. One-Shot Prompting

Provide exactly one example before the actual task.

**Example 1 -- Writing**

``` text
Example

Input:
Topic: Healthy Habits

Output:
Good habits improve every aspect of your life...

Now write an introduction for:
Topic: Remote Work Habits
```

**Example 2 -- Software Development**

``` text
Act as a senior frontend developer.

Example

Input:
Build a simple To-Do List application.

Output:
Features:
- Add tasks
- Delete tasks
- Mark completed
- Local Storage
- Responsive UI

Now build:

Input:
Prompt Manager

Requirements:
- Add prompts
- Save prompts
- Rate prompts (1–5 stars)
- Search
- Edit
- Delete
- Responsive interface
```

------------------------------------------------------------------------

### 4. Few-Shot Prompting

Provide multiple examples so the model learns the desired pattern.

**Example 1 -- Writing**

``` text
Example 1
Input: Healthy Habits
Output: Introduction...

Example 2
Input: Time Management
Output: Introduction...

Now write an introduction for:
Topic: Remote Work Habits
```

**Example 2 -- Software Development**

``` text
Act as a senior frontend developer.

Example 1

Input:
To-Do List

Output:
Features:
- Add tasks
- Delete tasks
- Complete tasks
- Local Storage

Example 2

Input:
Expense Tracker

Output:
Features:
- Add expenses
- Categories
- Charts
- Local Storage

Now build:

Input:
Prompt Manager

Requirements:
- Add prompts
- Save prompts
- Categories
- Search
- Sort
- Edit
- Delete
- Favorite prompts
- 5-star ratings
- Copy to clipboard
- Export JSON
- Responsive UI
```

## Comparison

  Technique   Examples   Best For
  ----------- ---------- -------------------------------
  Standard    None       Quick/simple tasks
  Zero-Shot   None       Detailed instructions
  One-Shot    One        Matching a style or structure
  Few-Shot    Multiple   Complex, consistent outputs

> **Tip:** Notice how the same "Prompt Manager" application becomes
> increasingly complete and consistent as more guidance and examples are
> provided.
