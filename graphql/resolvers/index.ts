import wilderResolver from "./wilder.resolver";
import { mergeResolvers } from "@graphql-tools/merge";

export default mergeResolvers([wilderResolver]);
