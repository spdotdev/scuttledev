# Client AI agreement

I am ZZP developer, should I have my clients to sign somekind of a documents what I will be using AI on the code?

---
---

As a ZZP developer in 2026, the short answer is **yes**. While you aren't always legally *required* to have a standalone "AI document," it is becoming a professional standard in the Netherlands to include AI disclosure and usage terms in your contracts or General Terms and Conditions (Algemene Voorwaarden).

Since the **EU AI Act** is now in effect, transparency is no longer just a "nice-to-have"—it's a compliance layer.

---

## Why you need a written agreement

Using AI tools like GitHub Copilot, Cursor, or ChatGPT without a contract creates three major risks for a freelancer:

### 1. Intellectual Property (IP) Ownership

Under Dutch and EU law, copyright usually requires "human creativity."

* **The Risk:** If a client finds out you used AI for 80% of a module, they might argue that the code isn't "original" enough to be copyrighted, which complicates the IP transfer they are paying for.
* **The Solution:** Your contract should state that while AI tools are used, you provide **human oversight** and that all final deliverables are assigned to the client as their IP.

### 2. Data Privacy & GDPR

If you paste client data or proprietary code into a public AI model, you might be in breach of GDPR or your confidentiality agreement.

* **The Risk:** AI models often "learn" from your inputs unless you use Enterprise/Privacy modes.
* **The Solution:** A document should specify **which** tools you use and **how** you protect their data (e.g., "I only use AI tools with 'Zero Data Retention' or local execution").

### 3. Liability for "Hallucinations" or Bugs

AI-generated code can have security vulnerabilities or logical errors that look correct but fail in production.

* **The Risk:** If the code fails, the client might blame the "bot" and sue you for negligence.
* **The Solution:** A clause stating that AI is a productivity tool, but **you (the human)** remain the sole party responsible for testing and validation.

---

## What to include in your "AI Addendum"

You don't need a 20-page legal manifesto. A simple **AI Usage Disclosure** or a section in your standard contract should cover:

| Clause | Purpose |
| --- | --- |
| **Transparency** | Explicitly state you use AI-assisted tools (Copilot, LLMs) to improve efficiency. |
| **Human-in-the-Loop** | Confirm that every line of code is reviewed, tested, and "vetted" by you personally. |
| **Data Security** | Guarantee that no confidential client data or secrets (API keys, etc.) are used as AI prompts. |
| **Warranty** | Clarify that AI-assisted code is subject to the same warranty/support terms as manually written code. |

---

## Pro-tip: The "Opt-In" Approach

If you work for high-security clients (banks, gov-tech, or healthcare), don't just tell them—**ask them**.

> "I use AI-powered IDEs (like Cursor) to speed up boilerplate development. Does your organization have a policy against this, or shall I proceed with my standard security-hardened AI workflow?"

**Would you like me to draft a simple "AI Usage Clause" that you can copy-paste into your existing ZZP contracts?**

---
---

yes

---
---

Here is a professional **AI Usage Clause** tailored for a ZZP (freelance) developer in the Netherlands in 2026.

Since the **EU AI Act** became fully applicable for "transparency risk" systems in **August 2026**, having this in writing is no longer just "good practice"—it’s a key part of your compliance as a service provider.

### Suggested AI Usage Clause

You can add this to your **General Terms and Conditions (Algemene Voorwaarden)** or directly into your **Project Agreement**.

---

**Section X: Artificial Intelligence and Tooling**

1. **Disclosure of Use:** Developer may utilize Artificial Intelligence (AI) tools (including but not limited to GitHub Copilot, Cursor, or Large Language Models) to assist in the generation, optimization, and debugging of Software deliverables.
2. **Human-in-the-Loop & Responsibility:** All AI-generated suggestions are subject to manual review, modification, and testing by the Developer. The Developer remains solely responsible for the functionality, security, and quality of the final deliverables as per the professional standards of the industry.
3. **Data Confidentiality & GDPR:** Developer warrants that no sensitive Client Data, proprietary secrets, or personal data (PII) belonging to the Client will be used as input for public AI models. Developer shall only use AI tools configured with "Zero Data Retention" (ZDR) or enterprise-grade privacy settings that prevent Client's code from being used for model training.
4. **Intellectual Property (IP):** Consistent with the IP Transfer clause of this Agreement, all rights to the final Software deliverables shall vest in the Client upon full payment. The use of AI tools does not affect the Developer’s ability to transfer these rights, as the final output is the result of the Developer's creative direction and human oversight.
5. **No Third-Party Infringement:** To the best of Developer’s knowledge, the AI-assisted code provided does not infringe upon third-party intellectual property. However, Client acknowledges that AI-generated snippets are inherently probabilistic, and Developer’s liability is limited to the extent defined in the Liability section of this Agreement.

---

### Why this specific wording matters in 2026:

* **The EU AI Act (Transparency):** Under the Act, if you are providing "synthetic content" (code, text, images), you must disclose it. This clause satisfies that "duty of transparency."
* **The IP Gap:** In some jurisdictions, purely AI-generated work cannot be copyrighted. By emphasizing **"Human-in-the-Loop"** and **"creative direction,"** you ensure the code remains a "work" under Dutch Copyright Law (*Auteurswet*), allowing you to legally sell the rights to your client.
* **Privacy (GDPR):** Many clients in 2026 are terrified of their code being leaked into a public model (like the "Samsung leak"). Clause 3 protects you by promising you aren't using "Free" versions of AI that train on user data.

### Important Distinction: High-Risk Systems

If you are building software for **"High-Risk"** sectors (e.g., Medical Devices, Critical Infrastructure, Recruitment AI, or Credit Scoring), the EU AI Act requires much more than just a clause. You would need a full **Conformity Assessment** and **Technical Documentation**. For standard web/app dev, the clause above is sufficient.

**Would you like me to create a short "AI Safety Fact Sheet" you can send to clients to explain exactly how you keep their code secure while using these tools?**

---
---

so do I need to include something that the client also agrees to the terms given by third party for example Claude.ai

---
---

For most standard development work (where you use Claude/ChatGPT/Copilot just to write code faster), the answer is **no**. You do **not** need your client to sign the Terms of Service (ToS) of the AI provider.

Here is the breakdown of why, and the one specific exception where you **do** need to include it.

### Scenario A: You use AI as a "Smart Tool" (Coding Assistant)

*This is when you use Claude to help you write a React component, debug a Python script, or write documentation.*

* **The Logic:** Think of AI like your text editor (VS Code) or your hosting provider. You have a license to use the tool, and you use it to create a product. Your client is buying the **product** (the code), not the tool.
* **The Legal Reality:**
* **Privity of Contract:** You have a contract with Anthropic (Claude). Your client has a contract with *you*. There is no legal link between your client and Anthropic.
* **Ownership:** Most paid AI terms (like Claude Pro or Team) state that **you own the output**. Therefore, you can legally transfer that ownership to your client without them needing to agree to Anthropic's rules.



**Advice:** Do **not** make them sign the third-party terms. It confuses clients and makes you look less like a professional offering a solution and more like a middleman.

---

### Scenario B: You are building AI Features *into* their software

*This is when you build a chatbot, an automated analysis tool, or a feature that calls the OpenAI/Claude API directly for the client's end-users.*

In this case, the answer changes to **YES** (sort of). You don't make them sign the full generic Terms of Service, but you **must** include an **"Acceptable Use Policy" (AUP) Flow-Down Clause**.

* **The Risk:** If your client uses the software you built to generate spam, hate speech, or illegal content via the API, **your** API key will be banned by the provider (Anthropic/OpenAI).
* **The Solution:** Your contract needs a clause saying:
> "The Client agrees not to use the AI features of the Deliverables in violation of the Acceptable Use Policies of the underlying model providers (e.g., Anthropic, OpenAI), including generating hate speech, political misinformation, or malicious code."



---

### Scenario C: The "Sub-processor" List (GDPR)

Even if they don't sign the Terms of Service, if you paste **personal data** (names, emails, user DB dumps) into Claude, the client **must** approve Claude as a "Sub-processor" under GDPR.

* **What to do:** You don't need a new contract signature. You usually just need to update your **Data Processing Agreement (DPA)** or send a notification:
> "I am updating my list of sub-processors to include Anthropic (Claude) and GitHub (Copilot) for the purpose of code optimization. Please let me know within 14 days if you object."



### Summary Checklist

| Context | Do they sign 3rd Party Terms? | Action Required |
| --- | --- | --- |
| **Using AI to write code** | **No** | Just use the "AI Usage Clause" I provided earlier. |
| **Pasting Personal Data** | **No** | Add the AI provider to your **GDPR Sub-processor List**. |
| **Building AI Features** | **No, but...** | Add a "Pass-through" clause that binds them to the AI's **Acceptable Use Policy**. |

**Would you like the "Acceptable Use Policy" wording for Scenario B (if you are building AI features for them), or are you sticking strictly to coding assistance?**

---
---

show me plain markdown of this complete conversation

---
---

To get a clean markdown version of this conversation, you can copy the text below. I have formatted it to preserve the structure and the specific clauses provided.

---

# Conversation: AI Usage & Legal Compliance for ZZP Developers (2026)

## 1. Initial Inquiry: Should I have clients sign AI-related documents?

As a ZZP developer in 2026, the short answer is **yes**. While you aren't always legally required to have a standalone "AI document," it is becoming a professional standard in the Netherlands to include AI disclosure and usage terms in your contracts or General Terms and Conditions (*Algemene Voorwaarden*).

Since the **EU AI Act** is now in effect, transparency is no longer just a "nice-to-have"—it's a compliance layer.

### Key Risks Addressed:

* **IP Ownership:** Ensuring the code remains "original" enough for copyright transfer.
* **Data Privacy (GDPR):** Confirming no proprietary code or PII is leaked to public training models.
* **Liability:** Clarifying that the human developer is responsible for testing and "hallucination" checks.

---

## 2. Template: The AI Usage Clause

This clause can be added to your **General Terms and Conditions** or a **Project Agreement**.

### Section X: Artificial Intelligence and Tooling

1. **Disclosure of Use:** Developer may utilize Artificial Intelligence (AI) tools (including but not limited to GitHub Copilot, Cursor, or Large Language Models) to assist in the generation, optimization, and debugging of Software deliverables.
2. **Human-in-the-Loop & Responsibility:** All AI-generated suggestions are subject to manual review, modification, and testing by the Developer. The Developer remains solely responsible for the functionality, security, and quality of the final deliverables as per the professional standards of the industry.
3. **Data Confidentiality & GDPR:** Developer warrants that no sensitive Client Data, proprietary secrets, or personal data (PII) belonging to the Client will be used as input for public AI models. Developer shall only use AI tools configured with "Zero Data Retention" (ZDR) or enterprise-grade privacy settings that prevent Client's code from being used for model training.
4. **Intellectual Property (IP):** Consistent with the IP Transfer clause of this Agreement, all rights to the final Software deliverables shall vest in the Client upon full payment. The use of AI tools does not affect the Developer’s ability to transfer these rights, as the final output is the result of the Developer's creative direction and human oversight.
5. **No Third-Party Infringement:** To the best of Developer’s knowledge, the AI-assisted code provided does not infringe upon third-party intellectual property. However, Client acknowledges that AI-generated snippets are inherently probabilistic, and Developer’s liability is limited to the extent defined in the Liability section of this Agreement.

---

## 3. Third-Party Terms (e.g., Claude, OpenAI)

Do you need the client to agree to the terms of the AI provider itself?

* **For Coding Assistance (Scenario A):** **No.** You own the output of your tools (Claude/Copilot). You are selling a result, not the tool. The client does not need a relationship with Anthropic.
* **For Building AI Features (Scenario B):** **Yes (partially).** If you build a chatbot *into* their app, you must include a "Pass-through" clause stating they must follow the provider's **Acceptable Use Policy** (e.g., no generating hate speech).
* **For GDPR (Scenario C):** If you process client data through AI, you must add the provider (e.g., Anthropic) to your **Sub-processor List** in your Data Processing Agreement (DPA).

### Summary Checklist

| Context | Do they sign 3rd Party Terms? | Action Required |
| --- | --- | --- |
| **Using AI to write code** | **No** | Use the AI Usage Clause above. |
| **Pasting Personal Data** | **No** | Update your **GDPR Sub-processor List**. |
| **Building AI Features** | **No, but...** | Add an **Acceptable Use Policy** flow-down. |

---

**Would you like me to help you draft a specific "Acceptable Use" clause for Scenario B, or does this cover what you need for your standard development work?**