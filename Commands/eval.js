const { inspect } = require("util");

module.exports = {
    name: 'eval',
    description: "eval?",
    execute(message, args) {
        
        try {
            if (message.author.id !== '546631496673394688') return; // Make sure this command can only used by you!;
            let toEval = args.join(" ");
            if (!toEval) return message.channel.send(`Must pass arguments...`); // Check if arguments aren't empty;
            return message.channel.send(inspect(eval(toEval, { depth: 0 })), { code: 'js', maxLength: 1900 });
        } catch (e) {
            message.channel.send(`Error while evaluating: \`${e.message}\``); //Check for any errors;

        }
    }
}