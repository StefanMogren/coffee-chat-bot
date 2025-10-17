import {
	PromptTemplate,
	ChatPromptTemplate,
	SystemMessagePromptTemplate,
	HumanMessagePromptTemplate,
} from "@langchain/core/prompts";

export const classifyPrompt = PromptTemplate.fromTemplate(
	`Klassifiera följande fråga ifall du behöver kaffemenyn för att kunna svara.
	
	Fråga: {question}`
);
