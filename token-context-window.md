## Token Limits and Context Windows

Before we start writing prompts, it's important to understand **tokens** and the **context window**, because they determine how much information an AI model can process and remember during a conversation.

### What is a Token?
- A **token** is the basic unit of text processed by a Large Language Model (LLM).
- On average:
  - **1 token ≈ 0.75 words**
  - **100 tokens ≈ 75 words**
- Tokens can represent:
  - A whole word (`Hello`)
  - Part of a word (`engine` + `ering`)
  - Punctuation (`.`, `,`, `?`)
  - Numbers, spaces, or special characters

> **Note:** Token count varies depending on the language, formatting, and tokenizer used by the model.

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
