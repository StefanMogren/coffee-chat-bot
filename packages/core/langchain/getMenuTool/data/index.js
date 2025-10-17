import { tool } from "@langchain/core/tools";
import { FetchMenu } from "@chatapp/fetch-menu";
import { z } from "zod";

export const getMenuTool = tool(
	async () => {
		const menu = await FetchMenu();
		if (menu) {
			return { menu: "Detta är kaffemenyn: " + menu };
		} else {
			return { menu: "Kaffemenyn är tillfälligt ur funktion." };
		}
	},
	{
		name: "getMenuTool",
		description: "Returnerar kaffemenyn",
		schema: z.object({}), // Inga argument uppenbarligen.
	}
);
