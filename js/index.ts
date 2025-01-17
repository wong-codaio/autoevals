/**
 * AutoEvals is a tool to quickly and easily evaluate AI model outputs.
 *
 * ### Quickstart
 * ```bash
 * npm install autoevals
 * ```
 *
 * ### Example
 *
 * Use AutoEvals to model-grade an example LLM completion using the [factuality prompt](templates/factuality.yaml).
 *
 * ```javascript
 * import { Factuality } from "autoevals";
 *
 * (async () => {
 *   const input = "Which country has the highest population?";
 *   const output = "People's Republic of China";
 *   const expected = "China";
 *
 *   const result = await Factuality({ output, expected, input });
 *   console.log(`Factuality score: ${result.score}`);
 *   console.log(`Factuality metadata: ${result.metadata.rationale}`);
 * })();
 * ```
 *
 * @module autoevals
 */

export { Score, ScorerArgs, Scorer } from "@braintrust/core";
export * from "./llm.js";
export * from "./string.js";
export * from "./number.js";
export * from "./json.js";
export * from "./templates.js";
