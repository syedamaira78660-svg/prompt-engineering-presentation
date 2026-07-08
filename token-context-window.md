## Token Limits and Context Windows

Before we start writing prompts, it's important to understand **tokens** and the **context window**, because they determine how much information an AI model can process and remember during a conversation.

# What is a Token?

A **token** is the basic unit of text processed by a Large Language
Model (LLM). Tokens are **not the same as words or characters**.
Instead, they are pieces of text created by a **tokenizer**, which
breaks text into efficient units that the model can understand.

Depending on the text, a token can represent:

-   A complete word
-   Part of a word
-   A punctuation mark
-   A number
-   A symbol
-   Whitespace
-   Special characters

For example:

  Text            Possible Tokenization
  --------------- ---------------------------
  `Hello`         `["Hello"]`
  `engineering`   `["engine", "ering"]`
  `can't`         `["can", "'t"]`
  `12345`         May be one or more tokens

> **Note:** The exact tokenization depends on the tokenizer used by the
> model. Different AI models may tokenize the same text differently.

# Tokens Are Not Words

Many beginners assume:

> **1 word = 1 token**

This is **not true**.

Likewise,

> **1 character = 1 token**

is also incorrect.

Instead, the tokenizer breaks text into pieces based on patterns learned
from large amounts of text.

For example:

  Text           Characters   Tokens
  ------------ ------------ --------
  `Hello`                 5        1
  `Helbo`                 5        2
  `OpenAI`        Usually 1 
  `OpenAI's`      Usually 2 

Notice that **Hello** and **Helbo** contain the same number of
characters but have different token counts because **Hello** is a common
word in the tokenizer's vocabulary, while **Helbo** is not. Common words
are often represented as a single token, whereas uncommon or made-up
words are split into smaller pieces.

---

### Cumulative Tokens

Every interaction with an LLM consumes tokens from multiple sources:

- **Input Tokens** – Your prompt or message.
- **Output Tokens** – The AI's generated response.
- **Conversation History** – Previous user and assistant messages.

**Total Tokens = Input Tokens + Output Tokens + Conversation History**

As the conversation grows, the cumulative token count increases.

---

### What is a Context Window?

The **context window** is the maximum number of tokens an AI model can process and keep in its working memory for a single request.

Think of it as the model's **short-term memory**. Everything inside this window is available for the model to understand and generate its next response.

---

### What is Included in the Context Window?

The context window is shared by **all information** sent to the model, including:

- **System Prompt** *(hidden instructions that define the model's behavior and safety rules)*
- **Developer Prompt** *(instructions provided by the application developer)*
- **Conversation History** *(previous user and assistant messages)*
- **Current User Prompt**
- **Model Response** *(generated tokens)*

```text
┌────────────────────────────────────────────┐
│             Context Window                 │
├────────────────────────────────────────────┤
│ System Prompt (Hidden)                     │
│ Developer Prompt                           │
│ Previous Conversation                      │
│ Current User Prompt                        │
│ Model Response                             │
└────────────────────────────────────────────┘
```

> **Example:** When you use **Claude**, **ChatGPT**, or **Gemini**, each platform includes its own hidden system prompt. If you're using their APIs, you can also provide your own developer or system instructions. All of these consume part of the available context window.

---

### What Happens When the Limit is Reached?

When the context window becomes full:

- The **oldest messages are automatically removed**.
- Earlier instructions are no longer available to the model.
- The model may forget previous requirements or lose important context.
- This happens **silently**—the user typically isn't notified.

---

### Why It Matters in Prompt Engineering

To build reliable AI applications:

- Keep prompts **clear and concise**.
- Include **only relevant context**.
- Remove unnecessary conversation history.
- Summarize long conversations instead of sending everything again.
- Use techniques like **Retrieval-Augmented Generation (RAG)** to retrieve only the information needed for each request.

---

### Key Takeaways

- Tokens are the units an LLM processes.
- Every request consumes **input**, **output**, and **history** tokens.
- The context window is the model's **working memory**.
- **System prompts, developer prompts, conversation history, user prompts, and responses all share the same context window.**
- Once the token limit is reached, the **oldest context is discarded**, which can affect response quality.
- Managing context efficiently is one of the most important skills in prompt engineering.
