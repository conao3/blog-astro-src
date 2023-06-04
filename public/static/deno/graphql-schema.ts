import * as graphql from "https://esm.sh/graphql@16.6.0";
import * as flags from "https://deno.land/std@0.190.0/flags/mod.ts";

function do_help() {
  const message = `\
Usage: get-graphql-schema ENDPOINT_URL [options]
Options:
  -h, --help: Show this help message and exit.
  --introspection-query: Show introspection query and exit.
  --json: Output in JSON format
`;
  console.log(message.slice(0, -1));
}

function do_introspection_query() {
  console.log(graphql.getIntrospectionQuery());
}

async function main() {
  const args = flags.parse(Deno.args, {
    boolean: ["h", "help", "introspection-query", "json"],
  });

  const exit_actions = {
    h: do_help,
    help: do_help,
    "introspection-query": do_introspection_query
  }

  if (args._.length >= 2) {
    do_help();
    Deno.exit(1);
  }

  const endpoint_url = args._[0] as string;

  for (const [key, value] of Object.entries(exit_actions)) {
    if (args[key]) {
      value();
      Deno.exit(0);
    }
  }

  const headers = {
    "Content-Type": "application/json",
  }

  try {
    const {data, errors} = await fetch(endpoint_url, {
      method: "POST",
      headers,
      body: JSON.stringify({
        query: graphql.getIntrospectionQuery(),
      }),
    }).then((response) => response.json());

    if (errors) {
      console.error(`Error: ${JSON.stringify(errors, null, 2)}`);
      Deno.exit(1);
    }

    if (args.json) {
      console.log(JSON.stringify(data, null, 2));
    } else {
      const schema = graphql.buildClientSchema(data);
      console.log(graphql.printSchema(schema));
    }
  } catch (error) {
    console.error(error);
    Deno.exit(1);
  }
}

await main();
