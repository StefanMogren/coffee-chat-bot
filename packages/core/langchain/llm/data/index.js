import { ChatOllama } from "@langchain/ollama";
import { getMenuTool } from "@chatapp/get-menu-tool";

export const llm = new ChatOllama({
	model: "llama3.2:latest",
});

export const llmWithTools = llm.bindTools([getMenuTool]);
