import { Resolver, Query, Mutation, Arg, UseMiddleware, MiddlewareFn } from "type-graphql";
import Wilder, { CreateWilderInput } from "../../entity/Wilder";
import WilderService from "../../service/wilder.service";

@Resolver()
export default class WilderResolver {
  @Query(() => [Wilder])
  async listWilders(): Promise<Wilder[]> {
    let wilders = await new WilderService().listWilders();
    return wilders;
  }

  @Mutation(() => Wilder)
  async addWilder(
    @Arg("createWilderInput")
    createWilderInput: CreateWilderInput
  ): Promise<Wilder> {
    console.log("createWilderInput", createWilderInput);
    let wilder = await new WilderService().createWilder({
      ...createWilderInput,
    });
    return wilder;
  }
}

// import { MutationAddWilderArgs, Wilder } from "../../src/generated/graphql";
// export default {
//   Query: {
//     async listWilders(): Promise<Wilder[]> {
//       let wilders = await new WilderService().listWilders();
//       return [];
//     },
//   },
// Mutation: {
//   async addWilder(_: any, { createWilderInput }: MutationAddWilderArgs) {
//     let wilder = await new WilderService().createWilder({
//       ...createWilderInput,
//     });

//       return wilder;
//     },
//   },
// };
