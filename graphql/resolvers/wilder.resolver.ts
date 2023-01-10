import { MutationAddWilderArgs, Wilder } from "../../src/generated/graphql";
import WilderService from "../../service/wilder.service";
export default {
  Query: {
    async listWilders(): Promise<Wilder[]> {
      let wilders = await new WilderService().listWilders();
      return [];
    },
  },
  Mutation: {
    async addWilder(_: any, { createWilderInput }: MutationAddWilderArgs) {
      let wilder = await new WilderService().createWilder({
        ...createWilderInput,
      });

      return wilder;
    },
  },
};
