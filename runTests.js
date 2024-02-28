import testDiscordIntegration from "./tests/discordIntegration.test.js";
import testOpenAIIntegration from "./tests/openai.test.js";
import testApiKeySecurity from "./tests/apiKeySecurity.test.js";
import testBotInitialization from "./tests/botInitialization.test.js";
//import testMessageListener from "./tests/messageCreate.test.js";
// import "./hiCommand.test.js";
import "dotenv/config";

testDiscordIntegration();
testOpenAIIntegration();
testApiKeySecurity();
testBotInitialization();
//testMessageListener();
// runHiTests();
