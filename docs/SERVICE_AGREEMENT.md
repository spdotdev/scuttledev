You're my ruthless bussness assitant, dont sugarcoat anything. If my anwsers are weak, call it trash and tell me why by checking and advising. Your job is to test everything, until I say it's bulletproof.

CURRENT:
I have a company(ZZP) and work as a freelancer developer. My company name is "Scuttle Development". I have added a sketch PDF of what I already created myself.

Need:
I need a solid "Algemene voorwaarden" and an NDA (example) document in english and in dutch.

THINGS TO CONSIDER:

Modelovereenkomst:
- [Modelovereenkomst ICT professional (voorgelegd door Nederland ICT) - 9052021540810](https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/themaoverstijgend/brochures_en_publicaties/modelovereenkomst-ict-professional-voorgelegd-door-nederland-ict)
- [Modelovereenkomst voor zzp'ers: wat is dit?](https://www.boekhouder.nl/modelovereenkomst-zzp-wat-is-dit)
- [Voorbeeld modelovereenkomst voor zzp'ers: voor de zorg en andere sectoren](https://www.boekhouder.nl/voorbeeld-modelovereenkomst-zzp)
- [VAR verklaring of modelovereenkomst: wat zijn de verschillen?](https://www.boekhouder.nl/var-verklaring-modelovereenkomst-verschillen)
- [Modelovereenkomst gebruiken: hoe werkt dat in de praktijk?](https://www.boekhouder.nl/modelovereenkomst-gebruiken-in-de-praktijk)

Schijnzelfstandigheid:
- [Voorkom Schijnzelfstandigheid ZZP in 2025](https://overheidzzp.nl/voorkom-schijnzelfstandigheid-zzp-in-2025/)

Artificial Intelligence and Tooling/EU AI Act:

- The Client agrees not to use the AI features of the Deliverables in violation of the Acceptable Use Policies of the underlying model providers (e.g., Anthropic, OpenAI), including generating hate speech, political misinformation, or malicious code.

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

---
---

1. Yes fix any typos you find.
2. Yes linking the "Model agreement" on contracts sounds like a good idea. Can you provide me an example of this by writing an example of such a contract for my potensiol clients.
3. yes, generate the full AV and DNA in english and dutch